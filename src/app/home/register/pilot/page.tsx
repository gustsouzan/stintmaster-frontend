'use client'
import { PageTitle } from "@/components/PageTitle/PageTitle"
import { Box, Button, Center, Field, Fieldset, Flex, For, HStack, Input, NativeSelect, Stack, VStack } from "@chakra-ui/react"
import { usePilot } from "./pilot.hook"
import { useRouter } from "next/navigation";

export default function pilotRegisterPage() {

    const router = useRouter();

    const { register, handleSubmit, onSubmit } = usePilot()
    return (
        <Flex direction="column" gap={4}>
            <PageTitle title="Registrar Novo Piloto" description="Preencha os detalhes do piloto abaixo para registrá-lo no sistema.">
                <Button onClick={() => router.push('/home/dashboard/pilot')} variant="solid" size="sm">Ver Lista de Pilotos</Button>
            </PageTitle>
            <VStack mt={4}>
                <Box p={6} bg="bg.panel" shadow="md" borderRadius="md" w={"-webkit-fit-content"} >

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Fieldset.Root gap={4} w={['100%', 96]}>
                            <Stack alignItems={"center"}>
                                <Fieldset.Legend justifySelf={"center"}>Cadastro do Piloto</Fieldset.Legend>
                                <Fieldset.HelperText>Insira as informações do piloto que deseja registrar.</Fieldset.HelperText>
                            </Stack>
                            <Fieldset.Content gap={4}>

                                <Field.Root maxW={['100%', 96]}>
                                    <Field.Label>Nome do Piloto</Field.Label>
                                    <Input {...register("name")} />
                                </Field.Root>
                                <Field.Root maxW={['100%', 96]}>
                                    <Field.Label>Email</Field.Label>
                                    <Input {...register("email")} />
                                </Field.Root>
                                <Stack flexDir={["column", "row"]} w={'100%'}>
                                    <Field.Root maxW={['100%', 48]}>
                                        <Field.Label>Idade</Field.Label>
                                        <Input type="number" {...register("age")} min={0} />
                                    </Field.Root>
                                    <Field.Root maxW={['100%', 48]}>
                                        <Field.Label>Iracing id</Field.Label>
                                        <Input {...register("iracing_id")} />
                                    </Field.Root>
                                </Stack>


                                <Field.Root maxW={['100%', 96]}>
                                    <Field.Label>Equipe</Field.Label>
                                    <Input {...register("team")} />
                                </Field.Root>

                                <Field.Root maxW={['100%', 48]}>
                                    <Field.Label>Experiência no av</Field.Label>
                                    <Input type="number" {...register("experience")} max={100} min={0} />
                                </Field.Root>
                            </Fieldset.Content>

                            <Button type="submit" w={['100%', 48]}>Registrar Piloto</Button>

                        </Fieldset.Root>
                    </form>

                </Box>
            </VStack>
        </Flex>

    )
}