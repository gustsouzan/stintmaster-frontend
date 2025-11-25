import { createPilot } from "@/services/pilots"
import { useForm } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    age: number
    iracing_id: string
    experience: string
    team: string
    created_by: string
    }

export const usePilot = () => {
    const {
    register,
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      created_by: "Fake User",
    },
  })

  const onSubmit = async(data: Inputs) => {
    const response = await createPilot(data)
    if (response.success) {
    alert("Piloto registrado com sucesso!")
    reset()
    } else {
    alert(response.data.error || "Erro ao registrar piloto.")
    }
  }

  return {
        register,
        handleSubmit,
        onSubmit,
    }
}
