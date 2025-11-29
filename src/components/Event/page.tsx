'use client';
import { useEvent } from "@/components/Event/event.hook";
import { Button, createListCollection, Field, Fieldset, Input, Portal, Select, Stack } from "@chakra-ui/react";

export default function Event() {

    const { tracks, carsClasses, setSelectedCars, selectedCars,register, handleSubmit, onSubmit } = useEvent();
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset.Root flexDir="column" gap={4} p={4}>
                    <Stack alignItems={"center"}>
                        <Fieldset.Legend justifySelf={"center"}>Cadastro do Evento</Fieldset.Legend>
                        <Fieldset.HelperText>Insira as informações do evento que deseja registrar.</Fieldset.HelperText>
                    </Stack>
                    <Fieldset.Content flexDir="row" gap={4}>
                        <Field.Root maxW={['100%', 96]}>
                            <Select.Root collection={tracks} size="md" {...register("trackID", { valueAsNumber: true })} >
                                <Select.HiddenSelect />
                                <Select.Label>Pista</Select.Label>
                                <Select.Control>
                                    <Select.Trigger>
                                        <Select.ValueText placeholder="Select a pista" />
                                    </Select.Trigger>
                                    <Select.IndicatorGroup>
                                        <Select.Indicator />
                                    </Select.IndicatorGroup>
                                </Select.Control>
                                <Portal>
                                    <Select.Positioner>
                                        <Select.Content>
                                            {tracks.items.map((track) => (
                                                <Select.Item item={track} key={track.value}>
                                                    {track.label}
                                                    <Select.ItemIndicator />
                                                </Select.Item>
                                            ))}
                                        </Select.Content>
                                    </Select.Positioner>
                                </Portal>
                            </Select.Root>
                        </Field.Root>

                        <Field.Root maxW={['100%', 48]}>
                            <Field.Label>Duração (minutos)</Field.Label>
                            <Input type="number" max={1440} min={0} placeholder="Duração (minutos)" {...register("duration", { valueAsNumber: true })} />
                        </Field.Root>
                        <Field.Root maxW={['100%', 48]}>
                            <Field.Label>Mínimo de pilotos</Field.Label>
                            <Input type="number" min={1} placeholder="Mínimo de pilotos" {...register("minDrivers", { valueAsNumber: true })} />
                        </Field.Root>
                        <Field.Root maxW={['100%', 48]}>
                            <Field.Label>Máximo de pilotos</Field.Label>
                            <Input type="number" min={1} placeholder="Máximo de pilotos" {...register("maxDrivers", { valueAsNumber: true })} />
                        </Field.Root>
                        <Field.Root maxW={['100%', 96]}>

                        <Select.Root
                            multiple
                            collection={carsClasses}
                            size="md"
                            {...register("carClasses")}
                            onValueChange={values => setSelectedCars(values.value)}
                            value={selectedCars}
                        >
                            <Select.HiddenSelect />
                            <Select.Label>Classes dos carros</Select.Label>
                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Selecione as classes" />
                                </Select.Trigger>
                                <Select.IndicatorGroup>
                                    <Select.Indicator />
                                </Select.IndicatorGroup>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {carsClasses.items.map((carClass) => (
                                            <Select.Item item={carClass} key={carClass.value}>
                                                {carClass.label}
                                                <Select.ItemIndicator />
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>
                        </Field.Root>

                    </Fieldset.Content>
                    <Stack alignItems={"center"}>
                        <Button type="submit" w={48}>Registrar Evento</Button>
                    </Stack>
                </Fieldset.Root>
            </form>
    );
}