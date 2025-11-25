'use client';
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import usePilots from "./pilot.hook";
import { useRouter } from "next/navigation";

export default function PagePilot() {

    const router = useRouter();

    const { response: pilots } = usePilots();
    return (
        <Flex direction="column" gap={6}>
            <PageTitle title="Pilotos" description="Gerencie os pilotos cadastrados no sistema.">
                <Button onClick={() => router.push('/home/register/pilot')} variant="solid" size="sm">Adicionar Piloto</Button>
            </PageTitle>

            <Flex gap={4} flexWrap="wrap" justifyContent={"center"}>
                {pilots?.map((pilot) => (
                    <Card.Root key={pilot.id} w={80} overflow="hidden">
                        <Image
                            src={pilot.image_url}
                            alt={pilot.name}
                            height={56}
                        />

                        <Card.Body gap="2">
                            <Card.Title>{pilot.name}</Card.Title>
                            <Text>Idade: {pilot.age}</Text>
                            <Text>Equipe: {pilot.team}</Text>
                            <Text>Experiência: {pilot.experience}</Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid" flexGrow={1}>Editar</Button>
                            <Button variant="ghost" flexGrow={1}>Remover</Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </Flex>
        </Flex>
    );
}
