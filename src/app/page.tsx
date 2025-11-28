'use client';
import Drivers from "@/components/Drivers/page";
import Event from "@/components/Event/page";
import Race from "@/components/Race/page";
import { Box, CheckboxCard, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Button, Select, Text } from "@chakra-ui/react";


export default function HomeV2() {
    const [selectedCar, setSelectedCar] = useState<string | null>(null);
    const cars = [
        { label: "Carro A", description: "Descrição do Carro A" },
        { label: "Carro B", description: "Descrição do Carro B" },
        { label: "Carro C", description: "Descrição do Carro C" },
    ];

    return (
        <Flex direction="column" h="100vh" gap={4}>
            <Box bgColor={"gray.900"} w="100%" h="fit-content" p={4}>
                <header>
                    <VStack>
                    <Heading p={4}>StintMaster</Heading>
                    </VStack>
                </header>
            </Box>
            <Flex flex="1" gap={4}>
                <Box w="fit-content" h="100%">
                    <Drivers />
                </Box>
                <Flex direction="column" flex="1" gap={4}>
                    <Box w="100%" h="fit-content" >
                        <Event />
                    </Box>
                    <Box w="100%" display={"flex"} flexDir="column" alignItems="center" bgColor="gray.900" p={4} gap={2}>
                        <Heading size="md" mb={2}>Escolha um carro sugerido e inicie o cálculo do evento</Heading>
                        <Flex mb={2} gap={2}>
                            {cars.map((car, idx) => (
                                <CheckboxCard.Root
                                    key={car.label}
                                    maxW="240px"
                                    checked={selectedCar === car.label}
                                    onChange={() => setSelectedCar(car.label)}
                                >
                                    <CheckboxCard.HiddenInput />
                                    <CheckboxCard.Control>
                                        <CheckboxCard.Content>
                                            <CheckboxCard.Label>{car.label}</CheckboxCard.Label>
                                            <CheckboxCard.Description>{car.description}</CheckboxCard.Description>
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
                    <Box bgColor="gray.900" w="100%" flex="1">
                        <Race />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}