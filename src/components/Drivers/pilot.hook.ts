import { fetchCarsByClass } from "@/services/cars"
import { createPilot } from "@/services/pilots"
import { Car, CarGroupedByClass } from "@/type/car"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Pilot } from "./pilot.type"

export const usePilot = () => {
    const {
    register,
    handleSubmit,
    reset,
  } = useForm<Pilot>();

  const [cars , setCars] = useState<CarGroupedByClass[]>([]) 

  const onSubmit = async(data: Pilot) => {
    const response = await createPilot(data)
    if (response.success) {
    alert("Piloto registrado com sucesso!")
    reset()
    } else {
    alert(response.data.error || "Erro ao registrar piloto.")
    }
  }

  const getCars = async() => {
    const response = await fetchCarsByClass()
    setCars(response)
  }

  useEffect(() => {
    getCars()
  }, [])

  return {
        register,
        handleSubmit,
        onSubmit,
        cars,
    }
}
