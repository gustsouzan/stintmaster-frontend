'use client';
import CarSuggestionPage from "@/components/CarSuggestion/page";
import Drivers from "@/components/Drivers/page";
import Event from "@/components/Event/page";
import Race from "@/components/Race/page";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";


export default function HomeV2() {


    return (
        <Flex direction="column" h="100vh" gap={4} p={"0 16px"}>
            <Box bgColor={"gray.900"} w="100%" h="fit-content" p={4} borderRadius={8}>
                <VStack>
                    <Heading p={4}>StintMaster</Heading>
                </VStack>
            </Box>
            <Flex gap={4}>
                <Box h="100%" borderRadius={8}>
                    <Drivers />
                </Box>
                <Flex direction="column" flex="1" gap={4} borderRadius={8}>
                    <Box bgColor={"gray.900"} w={"100%"} h="fit-content" borderRadius={8}>
                        <Event />
                    </Box>
                    <Box bgColor={"gray.900"} w={"100%"} borderRadius={8}>
                        <CarSuggestionPage />
                    </Box>
                    <Box bgColor="gray.900" w="100%" flex="1" borderRadius={8}>
                        <Race />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}