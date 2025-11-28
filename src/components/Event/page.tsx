'use client';
import { useEvents } from "@/components/Event/event.hook";
import { Box, Button, Field, Fieldset, Flex, Input, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";

export default function Event() {

    const { handleSubmit, onSubmit, register } = useEvents();

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Fieldset.Root bg="gray.900" flexDir="column" gap={4} p={4}>
                    <Stack alignItems={"center"}>
                        <Fieldset.Legend justifySelf={"center"}>Cadastro do Evento</Fieldset.Legend>
                        <Fieldset.HelperText>Insira as informações do evento que deseja registrar.</Fieldset.HelperText>
                    </Stack>
                    <Fieldset.Content flexDir="row" gap={4}>
                        <Field.Root maxW={['100%', 96]}>
                            <Field.Label>Nome do Evento</Field.Label>
                            <Input {...register("name")} />
                        </Field.Root>

                        <Field.Root maxW={['100%', 48]}>
                            <Field.Label>Plataforma</Field.Label>
                            <Input {...register("platform")} />
                        </Field.Root>
                        <Field.Root maxW={['100%', 48]}>
                            <Field.Label>Data do Evento</Field.Label>
                            <Input type="date" {...register("date")} />
                        </Field.Root>

                        <Field.Root maxW={['100%', 48]}>
                            <Field.Label>Duração (minutos)</Field.Label>
                            <Input type="number" max={1440} min={0} {...register("duration")} />
                        </Field.Root>
                        <Field.Root maxW={['100%', 96]}>
                            <Field.Label>URL da Imagem</Field.Label>
                            <Input type="url" {...register("image_url")} />
                        </Field.Root>
                    </Fieldset.Content>
                    <Stack alignItems={"center"}>
                        <Button type="submit" w={48}>Registrar Evento</Button>
                    </Stack>
                </Fieldset.Root>
            </form>
        </>
    );
}