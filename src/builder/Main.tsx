import { Box, Skeleton, Text } from '@chakra-ui/react'

export function Main() {
  return (
    <Box
        w="80%"
        h="100%"
        p={4}
        bg="gray.700"
        borderRadius="lg"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>Your App Layout</Text>
        
        {/* Mock of some components using Skeleton */}
        <Skeleton height="50px" mb={4} />
        <Skeleton height="200px" mb={4} />
        <Skeleton height="50px" />
      </Box>
  )
}

export default Main