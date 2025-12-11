'use client';
import { AbsoluteCenter, Box, Button, Field, Heading, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { CalendarPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useSession } from "./Session.context";


export default function HomeV2() {

    const router = useRouter()

    return (
        <AbsoluteCenter axis="both">
        <Box p={6} maxW="sm" borderWidth="1px">
            
            <Stack gap={6}>
                <Heading>Bem vindo ao Stint Master</Heading>
                <Text>Crie ou consulte um evento já existente. Siga as instruções abaixo:</Text>
            <Field.Root>
                <Field.Label>Chave do evento</Field.Label>
                <Input type="text"></Input>
            </Field.Root>
            <HStack>
                <Button>Acessar</Button>
                <Button type="button" onClick={() => {
                    router.push("/event")
                    }}>Criar nova sessão <CalendarPlus/></Button>
            </HStack>
            </Stack>
        </Box>
        </AbsoluteCenter>
    );
}