    import { PageTitle } from "@/components/PageTitle/PageTitle"
    import { Box, Button, Center, Field, Fieldset, Flex, For, HStack, Input, NativeSelect, Stack, VStack } from "@chakra-ui/react"

    export default function pilotRegisterPage() {
        return (
            <Flex direction="column" gap={4}>
                <PageTitle title="Registrar Novo Piloto" description="Preencha os detalhes do piloto abaixo para registrá-lo no sistema.">
                </PageTitle>
                <Box p={6} bg="bg.panel" shadow="md" borderRadius="md" w={"-webkit-fit-content"}>

                    <Fieldset.Root gap={4} w={['100%',96]}>
                        <Stack alignItems={"center"}>
                        <Fieldset.Legend justifySelf={"center"}>Cadastro do Piloto</Fieldset.Legend>
                        <Fieldset.HelperText>Insira as informações do piloto que deseja registrar.</Fieldset.HelperText>
                        </Stack>
                        <Fieldset.Content gap={4}>
                            
                            <Field.Root maxW={['100%',96]}>
                                <Field.Label>Nome do Piloto</Field.Label>
                                <Input name="name" />
                            </Field.Root>
                            <Field.Root maxW={['100%',96]}>
                                <Field.Label>Email</Field.Label>
                                <Input name="email" />
                            </Field.Root>
                            <Stack flexDir={["column", "row"]} w={'100%'}>
                            <Field.Root maxW={['100%',48]}>
                                <Field.Label>Plataforma</Field.Label>
                                <Input name="platform" />
                            </Field.Root>
                            <Field.Root maxW={['100%',48]}>
                                <Field.Label>Plataforma id</Field.Label>
                                <Input name="platformId" />
                            </Field.Root>
                            </Stack>


                            <Field.Root maxW={['100%',96]}>
                                <Field.Label>Equipe</Field.Label>
                                <Input name="team" />
                            </Field.Root>

                            <Field.Root maxW={['100%',48]}>
                                <Field.Label>Experiência no av</Field.Label>
                                <Input type="number" name="experience" max={100} min={0} />
                            </Field.Root>
                        </Fieldset.Content>

                            <Button w={['100%',48]}>Registrar Evento</Button>

                    </Fieldset.Root>

                </Box>
            </Flex>

        )
    }