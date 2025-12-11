import { fetchCarsByClass } from "@/services/cars"
import { apiRemovePilot, createPilot, fetchPilots } from "@/services/pilots"
import { Car, CarGroupedByClass } from "@/type/car"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Pilot } from "./pilot.type"
import { useSession } from "@/app/Session.context"

export const usePilot = () => {
    const {
    register,
    handleSubmit,
    reset,
  } = useForm<Pilot>();

  const [cars , setCars] = useState<CarGroupedByClass[]>([]) 
  const [pilotosCadastrados, setPilotosCadastrados] = useState<Pilot[]>([])
  const {token} = useSession()

  const onSubmit = async(data: Pilot) => {
    const response = await createPilot(data,token)
    if (response) {
    alert("Piloto registrado com sucesso!")
    reset()
    refetch()
    } else {
    alert((response && (response.error || response.message)) || "Erro ao registrar piloto.")
    }
  }

  const {data: carsByClass } = fetchCarsByClass();
  
  const {data ,refetch} = fetchPilots();
   

  const removePilot = async (id: number) => {
    const response = await apiRemovePilot(id)
    if (response) {
        alert("Piloto removido com sucesso!")
        refetch()
    } else {
        alert((response && (response.error || response.message)) || "Erro ao remover piloto.")
    }
    
  }

  useEffect(() => {
    if(data){
    setPilotosCadastrados(data)
    }
  }, [data])

  useEffect(() => {
    if(carsByClass){
    setCars(carsByClass)
    }
  }, [carsByClass])

  return {
        register,
        handleSubmit,
        onSubmit,
        cars,
        pilotosCadastrados,
        removePilot,
    }
}
