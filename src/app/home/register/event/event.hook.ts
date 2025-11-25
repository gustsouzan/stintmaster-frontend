import { createEvent } from "@/services/events"
import { useForm } from "react-hook-form"


type Inputs = {
  name: string
  platform: string
  date: string
  duration: number
  image_url: string
  created_by: string
}

export const useEvents = () => {
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
    }
}