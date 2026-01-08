import { useCarsByClass } from "@/services/cars"
import { apiRemovePilot, createPilot, usePilots } from "@/services/pilots"
import { useForm } from "react-hook-form"
import { Pilot } from "./pilot.type"

export const usePilot = () => {
    const {
    register,
    handleSubmit,
    reset,
  } = useForm<Pilot>();

  const { data: cars = [] } = useCarsByClass();
  const { data: pilotosCadastrados = [], refetch } = usePilots();

  const onSubmit = async(data: Pilot) => {
    const response = await createPilot(data)
    if (response) {
    alert("Piloto registrado com sucesso!")
    reset()
    refetch()
    } else {
    alert((response && (response.error || response.message)) || "Erro ao registrar piloto.")
    }
  }

  const removePilot = async (id: number) => {
    const response = await apiRemovePilot(id)
    if (response) {
        alert("Piloto removido com sucesso!")
        refetch()
    } else {
        alert((response && (response.error || response.message)) || "Erro ao remover piloto.")
    }
    
  }

  return {
        register,
        handleSubmit,
        onSubmit,
        cars,
        pilotosCadastrados,
        removePilot,
    }
}
