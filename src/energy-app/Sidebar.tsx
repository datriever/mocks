import { VStack, Button, Box, Image, HStack, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { FaLeaf, FaDollarSign, FaShieldAlt, FaUserAlt } from 'react-icons/fa'

const sections = [
  'Consumption',
  'Cost analysis'
]

export function Sidebar(props) {
  return (
    <VStack
      w="20%"
      p={4}
      bg="green.800"
      borderRadius="lg"
      alignItems="start"
      spacing={5} {...props}
    >
      {/* Schneider Logo */}
      <HStack mb={6}>
        <Image w="4rem" src="schneider.png" alt="Schneider Electric" />
        <Heading fontSize='1.2rem'>Smart Energy Strategy App</Heading>
      </HStack>

      <Accordion allowToggle w="100%">
        {/* Recommendation Accordion */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" color="white" fontWeight="bold">
                Recommendations
              </Box>
              <AccordionIcon color="white" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Button
              w="100%"
              color="white"
              justifyContent="flex-start"
              variant='ghost'
              border='2px solid green'
              leftIcon={<FaLeaf />}
              _hover={{ bg: "green.700" }}
              mb={2}
            >
              Greener
            </Button>

            <Button
              w="100%"
              color="white"
              bg="green.600"
              justifyContent="flex-start"
              leftIcon={<FaDollarSign />}
              _hover={{ bg: "green.700" }}
              mb={2}
            >
              Cheapest
            </Button>

            <Button
              w="100%"
              color="white"
              bg="green.600"
              justifyContent="flex-start"
              leftIcon={<FaShieldAlt />}
              _hover={{ bg: "green.700" }}
            >
              Safest
            </Button>
          </AccordionPanel>
        </AccordionItem>

        {/* Add more Accordion items here */}
        {sections.map((section, i) => (
          <AccordionItem key={i}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" color="white" fontWeight="bold">
                  {section}
                </Box>
                <AccordionIcon color="white" />
              </AccordionButton>
            </h2>
          </AccordionItem>
        ))}
      </Accordion>

      <Button mt='auto' w='100%' leftIcon={<FaUserAlt />}>
        Profile
      </Button>
    </VStack>
  )
}

export default Sidebar
