import { Box, VStack, HStack, Button, Skeleton, Text } from '@chakra-ui/react'

export default function AppBuilder() {
  return (
    <HStack spacing={4} h="100vh" p={4}>
      
      {/* Sidebar */}
      <VStack
        w="20%"
        p={4}
        bg="gray.700"
        borderRadius="lg"
        alignItems="start"
        spacing={4}
      >
        <Text color="white" fontSize="lg" fontWeight="bold">Components</Text>
        <Button colorScheme="blue" w="100%">Button</Button>
        <Button colorScheme="green" w="100%">Chart</Button>
        <Button colorScheme="yellow" w="100%">Text Box</Button>
      </VStack>

      {/* Central View */}
      <Box
        w="80%"
        h="100%"
        p={4}
        bg="gray.100"
        borderRadius="lg"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>Your App Layout</Text>
        
        {/* Mock of some components using Skeleton */}
        <Skeleton height="50px" mb={4} />
        <Skeleton height="200px" mb={4} />
        <Skeleton height="50px" />
      </Box>
      
    </HStack>
  )
}
