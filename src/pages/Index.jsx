import { Container, VStack, Text, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU0NDQyMDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <VStack spacing={3}>
          <Text fontSize="2xl" fontWeight="bold">
            John Doe
          </Text>
          <Text fontSize="md">Software Developer | React Expert</Text>
        </VStack>
        <VStack spacing={2}>
          <Link href="https://www.linkedin.com/in/johndoe" isExternal>
            <Button leftIcon={<FaLinkedin />} colorScheme="blue">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/johndoe" isExternal>
            <Button leftIcon={<FaGithub />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
          <Link href="mailto:johndoe@example.com">
            <Button leftIcon={<FaEnvelope />} colorScheme="red">
              Email
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
