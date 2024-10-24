import { VStack, Button, Text, Input, Box } from '@chakra-ui/react'

export function Sidebar() {
  return (
    <VStack
      w="20%"
      p={4}
      bg="gray.800"
      borderRadius="lg"
      alignItems="start"
      spacing={4}
    >
      <Text color="white" fontSize="lg" fontWeight="bold">Configure Action Button</Text>

      {/* LLM Action Prompt Input */}
      <Box w="100%">
        <Text color="gray.300" mb={2}>LLM Prompt</Text>
        <Input 
          placeholder="Enter LLM prompt..." 
          bg="gray.700" 
          color="white" 
          border="none"
          _placeholder={{ color: 'gray.400' }}
          _focus={{ boxShadow: 'outline' }}
        />
      </Box>

      {/* Existing Components */}
      <Text color="white" fontSize="lg" fontWeight="bold" mt={6}>Components</Text>
      <Button w="100%" color="white" justifyContent="flex-start">Button</Button>
      <Button w="100%" color="white" justifyContent="flex-start">Chart</Button>
      <Button w="100%" color="white" justifyContent="flex-start">Text Box</Button>
      <Button w="100%" color="white" justifyContent="flex-start">Input Field</Button>
      <Button w="100%" color="white" justifyContent="flex-start">Toggle Switch</Button>
      <Button w="100%" color="white" justifyContent="flex-start">Image Placeholder</Button>
    </VStack>
  )
}

export default Sidebar
