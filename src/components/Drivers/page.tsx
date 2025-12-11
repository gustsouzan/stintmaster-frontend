"use client";
import { Box, Button, Card, Field, Fieldset, Flex, Heading, Input, Portal, Select, Stack, Text, createListCollection } from "@chakra-ui/react";
import { useState } from "react";
import { usePilot } from "./pilot.hook";
import { Car } from "@/type/car";
import { LuCheck, LuX } from "react-icons/lu";


export default function DriversPage() {

    const { pilotosCadastrados, cars, register, handleSubmit, onSubmit , removePilot} = usePilot();
    const [selectedCars, setSelectedCars] = useState<string[]>([]);

    const carOptions = createListCollection({
        items: Object.entries(cars).flatMap(([classe, carros]) =>
            Array.isArray(carros)
                ? carros.map((car: Car) => ({
                    value: car.ID.toString(),
                    label: `${car.Nome} (${classe})`,
                }))
                : []
        ),
    });

    return (
        <Flex flexDir={"column"} gap={8} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box bgColor={"gray.900"} maxW={"sm"} mx="auto" p={4} borderRadius={8}>
                    <Heading mb={6}>Cadastro de Piloto</Heading>
                    <Fieldset.Root gap={2} >
                        <Field.Root>
                            <Field.Label>
                                Nome do Piloto
                            </Field.Label>
                            <Input
                                placeholder="Digite o nome do piloto"
                                {...register("name")}
                                required
                            />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>iRating</Field.Label>
                            <Input
                                type="number"
                                min={0}
                                placeholder="iRating"
                                {...register("irating", { valueAsNumber: true })}
                                required
                            />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>Carros Disponíveis</Field.Label>
                            <Select.Root
                                multiple
                                collection={carOptions}
                                size="sm"
                                width="100%"
                                onValueChange={values => setSelectedCars(values.value)}
                                {...register("cars")}
                                value={selectedCars}
                            >
                                <Select.HiddenSelect />
                                <Select.Label>Selecione os carros</Select.Label>
                                <Select.Control>
                                    <Select.Trigger>
                                        <Select.ValueText placeholder="Selecione os carros" />
                                    </Select.Trigger>
                                    <Select.IndicatorGroup>
                                        <Select.Indicator />
                                    </Select.IndicatorGroup>
                                </Select.Control>
                                <Portal>
                                    <Select.Positioner>
                                        <Select.Content>
                                            {carOptions.items.map((car) => (
                                                <Select.Item item={car} key={car.value}>
                                                    {car.label}
                                                    <Select.ItemIndicator />
                                                </Select.Item>
                                            ))}
                                        </Select.Content>
                                    </Select.Positioner>
                                </Portal>
                            </Select.Root>
                        </Field.Root>
                        <Stack>
                            <Text mb={2}>Períodos de Restrição</Text>
                            <Field.Root orientation={"horizontal"} >
                                <Field.Label>Início:</Field.Label>
                                <Input type="datetime-local" />
                            </Field.Root>
                            <Field.Root orientation={"horizontal"}>
                                <Field.Label>Fim:</Field.Label>
                                <Input type="datetime-local" />
                            </Field.Root>
                            <Button alignSelf={"flex-end"} type="button">Add</Button>
                        </Stack>
                        <Button colorScheme="blue" type="submit" w="full">Cadastrar Piloto</Button>

                    </Fieldset.Root>
                </Box>
                <Box bgColor={"gray.900"} maxW={"sm"} p={4} borderRadius={8}>
                    <Heading mb={4} textAlign="center">Lista de Pilotos Cadastrados</Heading>
                    {pilotosCadastrados.map((piloto) => (
                        <Card.Root key={piloto.id} size={"sm"}>
                            <Card.Header>
                                <Card.Title>{piloto.name}</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Stack >
                                    Irating: {piloto.irating}
                                </Stack>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="subtle" colorPalette="red" flex="1" onClick={() => removePilot(piloto.id)}>
                                    <LuX />
                                    Remove
                                </Button>
                            </Card.Footer>
                        </Card.Root>
                    ))}
                </Box>
            </form>
        </Flex>
    );
}
