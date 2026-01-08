import { useCarSuggestions } from "@/services/cars";

export const useCarSuggestion = () => {
    const { data: carSuggestions = [] } = useCarSuggestions();
    return {
        carSuggestions,
    };
  }