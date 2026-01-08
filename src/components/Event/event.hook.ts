import { useCarClasses } from "@/services/cars"
import { createEvent } from "@/services/events"
import { useTracks } from "@/services/tracks"
import { CarClass } from "@/type/car"
import { Track } from "@/type/track"
import { createListCollection, ListCollection } from "@chakra-ui/react"
import { useMemo, useState } from "react"
import { useForm } from "react-hook-form"
import { Inputs } from "./event.type"

type SelectItem = { value: string; label: string };

export const useEvent = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>();

  const [selectedCars, setSelectedCars] = useState<string[]>([]);

  const { data: tracksFetched } = useTracks();
  const { data: carClassesFetched } = useCarClasses();

  const tracks: ListCollection<SelectItem> = useMemo(() => {
    const items: SelectItem[] = (tracksFetched ?? []).map((track: Track) => ({
      value: track.ID.toString(),
      label: track.Nome,
    }));
    return createListCollection<SelectItem>({ items });
  }, [tracksFetched]);

  const carsClasses: ListCollection<SelectItem> = useMemo(() => {
    const items: SelectItem[] = (carClassesFetched ?? []).map((carClass: CarClass) => ({
      value: carClass.Classe,
      label: carClass.Classe,
    }));
    return createListCollection<SelectItem>({ items });
  }, [carClassesFetched]);

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