'use client";'
import { Box, Button, CheckboxCard, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useCarSuggestion } from "./CarSuggestion.hook";

export default function CarSuggestionPage() {

    const [selectedCar, setSelectedCar] = useState<number | null>(null);

    const { carSuggestions } = useCarSuggestion();

    return (
        <Box w="100%" display={"flex"} flexDir="column" alignItems="center" p={4} gap={2}>
            <Heading size="md" mb={2}>Escolha um carro sugerido e inicie o cálculo do evento</Heading>
            <Flex mb={2} gap={2}>
                {carSuggestions.map((car, idx) => (
                    <CheckboxCard.Root
                        key={car.ID}
                        maxW="240px"
                        checked={selectedCar === car.ID}
                        onChange={() => setSelectedCar(car.ID)}
                    >
                        <CheckboxCard.HiddenInput />
                        <CheckboxCard.Control>
                            <CheckboxCard.Content>
                                <CheckboxCard.Label>{carSuggestions[idx]?.Classe}</CheckboxCard.Label>
                                <CheckboxCard.Description>{carSuggestions[idx]?.Nome}</CheckboxCard.Description>
                                <CheckboxCard.Content>Qtd Pilotos que possuem: {carSuggestions[idx]?.Qtd}</CheckboxCard.Content>
                            </CheckboxCard.Content>
                            <CheckboxCard.Indicator />
                        </CheckboxCard.Control>
                    </CheckboxCard.Root>
                ))}
            </Flex>
            <Button size={"lg"}>
                Calcular Evento
            </Button>
        </Box>
    );
}