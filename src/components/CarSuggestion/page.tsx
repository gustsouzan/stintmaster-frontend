"use client"
import { Box, Button, Center, Checkbox, CheckboxCard, CloseButton, Dialog, Field, Flex, Heading, Input, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { useCarSuggestion } from "./CarSuggestion.hook";

export default function CarSuggestionPage() {
    const [dialogOpen, setDialogOpen] = useState(false);

    const [selectedCar, setSelectedCar] = useState<number | null>(null);

    const { carSuggestions } = useCarSuggestion();

    return (
        <Box w="100%" display={"flex"} flexDir="column" alignItems="center" p={4} gap={2}>
            <Heading size="md" mb={2}>Escolha um carro sugerido e inicie o cálculo do evento</Heading>
            <Flex mb={2} gap={2}>
                {carSuggestions?.map((car, idx) => (
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
            <Button type="button" onClick={() => {setDialogOpen(true)}} size={"lg"}>
                Calcular Evento
            </Button>

            <Dialog.Root size={{ mdDown: "full", md: "lg" }} open={dialogOpen}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Selecione e complemente os dados dos pilotos para o Evento</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              {pilotosMock.map((piloto) => (
                <Box key={piloto.id} mb={4} p={4} borderWidth="1px" borderRadius="md">
                  <Heading size="sm" mb={2}>{piloto.name}</Heading>
                  <Checkbox.Root mb={2}>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>Incluir no Evento</Checkbox.Label>
                  </Checkbox.Root>
                  <Flex gap={4} alignItems={"center"}>
                    <Field.Root orientation="horizontal">
                      <Field.Label>Tempo de Volta:</Field.Label>
                      <Input
                        type="time"
                        step="1"
                        value={piloto.tempo_volta}
                        onChange={(e) => {
                          piloto.tempo_volta = e.target.value;
                        }}
                      />
                    </Field.Root>
                      <Field.Root orientation="horizontal">
                      <Field.Label>Consumo por Volta (litros):</Field.Label>
                      <Input
                        type="text"
                        value={piloto.consumo_volta}
                        onChange={(e) => {
                          piloto.consumo_volta = e.target.value;
                        }}
                      />
                    </Field.Root>
                    <Field.Root orientation="horizontal">
                      <Field.Label>Máximo de Stints:</Field.Label>
                      <Input
                        type="number"
                        min={1}
                        value={piloto.maximo_stints}
                        onChange={(e) => {
                          piloto.maximo_stints = parseInt(e.target.value, 10);
                        }}
                      />
                    </Field.Root>
                  </Flex>
                </Box>
              ))}
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              </Dialog.ActionTrigger>
              <Button>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" onClick={() => setDialogOpen(false)} />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
        </Box>
        
    );
}

const pilotosMock = [
    { id: 1, name: "Piloto 1", tempo_volta: "02:17:50", consumo_volta: "4.04", maximo_stints: 2 },
    { id: 2, name: "Piloto 2", tempo_volta: "02:18:00", consumo_volta: "4.10" , maximo_stints: 3},
    { id: 3, name: "Piloto 3", tempo_volta: "02:16:50", consumo_volta: "4.05" , maximo_stints: 2},
];