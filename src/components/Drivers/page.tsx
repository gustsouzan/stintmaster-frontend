"use client";

import { Field, Fieldset, HStack, Portal, Select, createListCollection } from "@chakra-ui/react";
import { Box, Heading, Text, VStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const carsByClass = {
  GTP: ["Cadillac V-Series.R", "Porsche 963", "BMW M Hybrid V8"],
  LMP2: ["Oreca 07 Gibson"],
  GTD: ["BMW M4 GT3", "Porsche 911 GT3 R", "Mercedes-AMG GT3"],
};

const carOptions = createListCollection({
  items: Object.entries(carsByClass).flatMap(([classe, carros]) =>
    carros.map((carro) => ({
      label: `${classe} - ${carro}`,
      value: carro,
      group: classe,
    }))
  ),
});

export default function DriversPage() {
  const [name, setName] = useState("");
  const [irating, setIrating] = useState("");
  const [selectedCars, setSelectedCars] = useState<string[]>([]);
  const [restrictions, setRestrictions] = useState("");

  return (
    <Box maxW={"sm"} mx="auto" p={4} bg="gray.900">
      <Heading mb={6}>Cadastro de Piloto</Heading>
        <Fieldset.Root gap={2}>
          <Field.Root>
            <Field.Label>
            Nome do Piloto
          </Field.Label>
          <Input
            placeholder="Digite o nome do piloto"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          </Field.Root>
        <Field.Root>
          <Field.Label>iRating</Field.Label>
          <Input
            type="number"
            min={0}
            placeholder="iRating"
            value={irating}
            onChange={e => setIrating(e.target.value)}
            required
          />
        </Field.Root>
        <Field.Root>
          <Field.Label>Carros Disponíveis</Field.Label>
          <Select.Root
            multiple
            collection={carOptions}
            size="sm"
            width="100%"
            onValueChange={values => setSelectedCars(values.value)}
            value={selectedCars}
          >
            <Select.HiddenSelect />
            <Select.Label>Selecione os carros</Select.Label>
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder="Selecione os carros" />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {carOptions.items.map((car) => (
                    <Select.Item item={car} key={car.value}>
                      {car.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        </Field.Root>
        <Field.Root>
          
          <Field.Label>Restrição de Horários</Field.Label>
          <HStack gap={2}>
          <Input/>
          -
          <Input/>
          <Button type="button">Add</Button>
          </HStack>
        </Field.Root>
        <Button colorScheme="blue" type="submit" w="full">Cadastrar Piloto</Button>

        </Fieldset.Root>
    </Box>
  );
}
