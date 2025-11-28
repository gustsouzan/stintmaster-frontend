import { Box, Table } from "@chakra-ui/react";


export default function Race() {
  return (
    <Box p={4}>
    <Table.Root size="sm" showColumnBorder striped p={4} gap={4}>
      <Table.Header>
        
        <Table.Row bg="gray.800">
          <Table.ColumnHeader>Stint</Table.ColumnHeader>
          <Table.ColumnHeader>Início</Table.ColumnHeader>
          <Table.ColumnHeader>Fim</Table.ColumnHeader>
          <Table.ColumnHeader>Consumo (L/volta)</Table.ColumnHeader>
          <Table.ColumnHeader>Tempo médio/volta</Table.ColumnHeader>
          <Table.ColumnHeader>Duração (voltas)</Table.ColumnHeader>
          <Table.ColumnHeader>Comb. Inicial (L)</Table.ColumnHeader>
          <Table.ColumnHeader>Comb. Final (L)</Table.ColumnHeader>
          <Table.ColumnHeader>Reabastecimento (L)</Table.ColumnHeader>
          <Table.ColumnHeader>Pneus</Table.ColumnHeader>
          <Table.ColumnHeader>Observações</Table.ColumnHeader>
            <Table.ColumnHeader>Regressiva</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {stints.map((stint) => (
          <Table.Row key={stint.id}>
            <Table.Cell>{stint.stint}</Table.Cell>
            <Table.Cell>{stint.start}</Table.Cell>
            <Table.Cell>{stint.end}</Table.Cell>
            <Table.Cell>{stint.fuelPerLap}</Table.Cell>
            <Table.Cell>{stint.avgLapTime}</Table.Cell>
            <Table.Cell>{stint.laps}</Table.Cell>
            <Table.Cell>{stint.fuelStart}</Table.Cell>
            <Table.Cell>{stint.fuelEnd}</Table.Cell>
            <Table.Cell>{stint.refuel}</Table.Cell>
            <Table.Cell>{stint.tyres ? "Sim" : "Não"}</Table.Cell>
            <Table.Cell>{stint.notes}</Table.Cell>
            <Table.Cell>{stint.regressive}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Box>
  );
}

const stints = [
  {
    id: 1,
    stint: "Stint 1",
    start: "00:00",
    end: "00:45",
    fuelPerLap: 2.5,
    avgLapTime: "1:45.200",
    laps: 18,
    fuelStart: 100,
    fuelEnd: 0,
    refuel: 100,
    tyres: false,
    notes: "Stint inicial, ritmo conservador",
    regressive: "23:59:59"
  },
  {
    id: 2,
    stint: "Stint 2",
    start: "00:45",
    end: "01:30",
    fuelPerLap: 2.6,
    avgLapTime: "1:44.800",
    laps: 17,
    fuelStart: 100,
    fuelEnd: 2,
    refuel: 98,
    tyres: true,
    notes: "Troca de pneus recomendada",
    regressive: "22:59:59"
  },
  {
    id: 3,
    stint: "Stint 3",
    start: "01:30",
    end: "02:15",
    fuelPerLap: 2.55,
    avgLapTime: "1:45.500",
    laps: 18,
    fuelStart: 100,
    fuelEnd: 0.5,
    refuel: 95.5,
    tyres: false,
    notes: "Atenção ao tráfego",
    regressive: "21:59:59"
  },
];