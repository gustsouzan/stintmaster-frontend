import { PageTitle } from "@/components/PageTitle/PageTitle"
import { Box, Button, Center, Field, Fieldset, Flex, For, HStack, Input, NativeSelect, Stack, VStack } from "@chakra-ui/react"

export default function eventRegisterPage() {
    return (
        <Flex direction="column" gap={4}>
            <PageTitle title="Registrar Novo Evento" description="Preencha os detalhes do evento abaixo para registrá-lo no sistema.">
            </PageTitle>
            <Box p={4} bg="bg.panel" shadow="md" borderRadius="md" w={"-webkit-fit-content"}>

                <Fieldset.Root gap={4} w={['100%',96]}> 
                    <Stack alignItems={"center"}>
                    <Fieldset.Legend justifySelf={"center"}>Cadastro do Evento</Fieldset.Legend>
                    <Fieldset.HelperText>Insira as informações do evento que deseja registrar.</Fieldset.HelperText>
                    </Stack>
                    <Fieldset.Content gap={4}>
                        <Stack gap={4}>
                        <Field.Root maxW={['100%',96]}>
                            <Field.Label>Nome do Evento</Field.Label>
                            <Input name="name" />
                        </Field.Root>

                        <Field.Root maxW={['100%',48]}>
                            <Field.Label>Plataforma</Field.Label>
                            <Input name="platform" />
                        </Field.Root>
                        </Stack>

                        <Stack gap={4} flexDir={["column", "row"]} w={'100%'}>
                        <Field.Root maxW={['100%',48]}>
                            <Field.Label>Data do Evento</Field.Label>
                            <Input type="date" name="eventDate" />
                        </Field.Root>

                        <Field.Root maxW={['100%',48]}>
                            <Field.Label>Duração (minutos)</Field.Label>
                            <Input name="duration" type="number" max={1440} min={0} />
                        </Field.Root>
                        </Stack>
                    </Fieldset.Content>

                        <Button w={['100%',48]}>Registrar Evento</Button>

                </Fieldset.Root>

            </Box>
        </Flex>

    )
}