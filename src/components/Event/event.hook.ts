import { fetchCarsClasses } from "@/services/cars"
import { createEvent } from "@/services/events"
import { getTracks } from "@/services/tracks"
import { createListCollection, ListCollection } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Inputs } from "./event.type"

export const useEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>();

  const [selectedCars, setSelectedCars] = useState<string[]>([]);

  const [tracks, setTracks] = useState<ListCollection>(createListCollection<any>({ items: [] }));
  const [carsClasses, setCarsClasses] = useState<ListCollection>(createListCollection<any>({ items: [] }));

  const fetchTracks = async () => {
    const response = await getTracks();
    const tracksCollection = createListCollection({
      items: response ? response.map((track) => ({
        value: track.ID.toString(),
        label: track.Nome,
      })) : [],
    })
    setTracks(tracksCollection);
  }

  const getCarsClasses = async () => {
    const response = await fetchCarsClasses();
    const carsClassesCollection = createListCollection({
      items: response ? response.map((carClass) => ({
        value: carClass,
        label: carClass.Classe,
      })) : [],
    })
    setCarsClasses(carsClassesCollection);
  }

  const onSubmit = async (data: Inputs) => {
    const response = await createEvent(data)
    if (response) {
      alert("Evento criado com sucesso!")
      reset()
    } else {
      alert("Erro ao criar evento.")
    }
  }


  useEffect(() => {
    fetchTracks();
    getCarsClasses();
  }, []);

  return {
    register,
    handleSubmit,
    onSubmit,
    carsClasses,
    setSelectedCars,
    selectedCars,
    tracks,
  }
}