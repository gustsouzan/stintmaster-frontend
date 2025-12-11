import { fetchCarsClasses } from "@/services/cars"
import { createEvent } from "@/services/events"
import { fetchTracks } from "@/services/tracks"
import { CarClass } from "@/type/car"
import { Track } from "@/type/track"
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

  const {data: tracksFetched} = fetchTracks()

  useEffect(()=> {
    if(tracksFetched) {
      createCollectionsTrackes(tracksFetched)
    }
  },[tracksFetched])

  const createCollectionsTrackes = (list: Track[]) => {
    const tracksCollection = createListCollection({
      items: list ? list.map((track) => ({
        value: track.ID.toString(),
        label: track.Nome,
      })) : [],
    })
    setTracks(tracksCollection);
  }

  const {data: carClasses} = fetchCarsClasses();

  useEffect(()=> {
    if(carClasses) {
      createCollectionsCarClasses(carClasses)
    }
  },[carClasses])

  const createCollectionsCarClasses = (carClassesList: CarClass[]) => {
    const carsClassesCollection = createListCollection({
      items: carClassesList ? carClassesList.map((carClass) => ({
        value: carClass,
        label: carClass,
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