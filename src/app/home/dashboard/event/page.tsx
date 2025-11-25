'use client';
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { Button, Card, Flex, Image } from "@chakra-ui/react";
import { useEvents } from "./events.hook";

export default function PageEvent() {

  const {response} = useEvents();
  return (
    <Flex direction="column" gap={6}>
      <PageTitle title="Eventos" description="Explore os eventos disponíveis e participe das competições emocionantes!">
        <Button variant="solid" size="sm">Criar Evento</Button>
        </PageTitle>

      
      <Flex gap={4}>
        {response?.map((event) => (
          <Card.Root key={event.id} w={80} overflow="hidden">
            <Image
              src={event.image_url}
              alt={event.name}
              height={56}
            />

            <Card.Body gap="2">
              <Card.Title>{event.name}</Card.Title>
              <Card.Description>
                <p>{event.platform}</p>
                <p>{event.date}</p>
                <p>Duração: {event.duration} minutos</p>
              </Card.Description>
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
