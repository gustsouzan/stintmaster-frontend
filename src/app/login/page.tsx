'use client'
import { PasswordInput } from "@/components/ui/password-input"
import { AbsoluteCenter, Box, Button, Center, Field, Heading, Input, Link, Stack } from "@chakra-ui/react"
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push("/dashboard/event");
    }
    return (
        <>
        <AbsoluteCenter>
           <Box border="1px" borderRadius="md" padding="16" boxShadow="lg" >
            <Center>
              <Heading marginBottom='4'>Stint Master</Heading>
            </Center>
            <form onSubmit={(HandleSubmit)}>
                <Stack gap="4" align="flex-start" maxW="sm">
                <Field.Root>
                    <Field.Label>Username</Field.Label>
                <Input />
                </Field.Root>
                <Field.Root>
                    <Field.Label>Password</Field.Label>
                    <PasswordInput />
                </Field.Root>
                <Link alignSelf={"flex-end"}>Forgot password?</Link>
                </Stack>
                <Stack direction="row" justifyContent={"space-evenly"} mt={"4"}>
                    <Button type="submit">Login</Button>
                    <Button>Sign Up</Button>
                </Stack>
            </form>
               
           </Box>
        </AbsoluteCenter>
        </>
    )
}