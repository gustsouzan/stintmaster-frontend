import { Flex, Heading, Separator, Text } from "@chakra-ui/react";

interface TitleProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const PageTitle = ({ title, description, children }: TitleProps) => {
  return (
    <>
    <Flex justify="space-between" align="center">
    <Flex direction="column" gap={6}>
        <Heading as="h2" size="lg" mb={2} color="text">
          {title}
        </Heading>
      {description && <Text>{description}</Text>}
    </Flex>
    {children}
    </Flex>
    <Separator />
    </>
  );
}