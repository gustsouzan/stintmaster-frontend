'use client'
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Box, Button, Field, Fieldset, Flex, Input, Stack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEvents } from "./event.hook";

export default function eventRegisterPage() {

    const { register, handleSubmit, onSubmit } = useEvents();

    const router = useRouter();
    return (
        <Flex direction="column" gap={4}>
            <PageTitle title="Registrar Novo Evento" description="Preencha os detalhes do evento abaixo para registrá-lo no sistema.">
                <Button onClick={() => router.push('/home/dashboard/event')} variant="solid" size="sm">Ver Lista de Eventos</Button>
            </PageTitle>
            <VStack mt={4}>
            <Box p={4} bg="bg.panel" shadow="md" borderRadius="md" w={"-webkit-fit-content"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Fieldset.Root gap={4} w={['100%', 96]}>
                        <Stack alignItems={"center"}>
                            <Fieldset.Legend justifySelf={"center"}>Cadastro do Evento</Fieldset.Legend>
                            <Fieldset.HelperText>Insira as informações do evento que deseja registrar.</Fieldset.HelperText>
                        </Stack>
                        <Fieldset.Content gap={4}>
                            <Stack gap={4}>
                                <Field.Root maxW={['100%', 96]}>
                                    <Field.Label>Nome do Evento</Field.Label>
                                    <Input {...register("name")} />
                                </Field.Root>

                                <Field.Root maxW={['100%', 48]}>
                                    <Field.Label>Plataforma</Field.Label>
                                    <Input {...register("platform")} />
                                </Field.Root>
                            </Stack>

                            <Stack gap={4} flexDir={["column", "row"]} w={'100%'}>
                                <Field.Root maxW={['100%', 48]}>
                                    <Field.Label>Data do Evento</Field.Label>
                                    <Input type="date" {...register("date")} />
                                </Field.Root>

                                <Field.Root maxW={['100%', 48]}>
                                    <Field.Label>Duração (minutos)</Field.Label>
                                    <Input type="number" max={1440} min={0} {...register("duration")} />
                                </Field.Root>
                            </Stack>
                            <Stack>
                                <Field.Root maxW={['100%', 96]}>
                                    <Field.Label>URL da Imagem</Field.Label>
                                    <Input type="url" {...register("image_url")} />
                                </Field.Root>
                            </Stack>
                        </Fieldset.Content>

                        <Button type="submit" w={['100%', 48]}>Registrar Evento</Button>

                    </Fieldset.Root>
                </form>
        
            </Box>
            </VStack>
        </Flex>

    )
}