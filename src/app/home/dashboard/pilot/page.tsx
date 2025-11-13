import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button, Card, Flex, Image, Text } from "@chakra-ui/react";
import { pilots } from "./pilot.const";

export default function PagePilot() {
    return (
        <Flex direction="column" gap={6}>
            <PageTitle title="Pilotos" description="Gerencie os pilotos cadastrados no sistema.">
                <Button variant="solid" size="sm">Adicionar Piloto</Button>
            </PageTitle>

            <Flex gap={4}>
                {pilots.map((pilot) => (
                    <Card.Root key={pilot.id} w={64} overflow="hidden">
                        <Image
                            src={pilot.image}
                            alt={pilot.name}
                            height={56}
                        />

                        <Card.Body gap="2">
                            <Card.Title>{pilot.name}</Card.Title>
                            <Text>Equipe: {pilot.team}</Text>
                            <Text>Experiência: {pilot.experience}</Text>
                        </Card.Body>
                        <Card.Footer gap="2">
                            <Button variant="solid" flexGrow={1}>Join</Button>
                            <Button variant="ghost" flexGrow={1}>View</Button>
                        </Card.Footer>
                    </Card.Root>
                ))}
            </Flex>
        </Flex>
    );
}
