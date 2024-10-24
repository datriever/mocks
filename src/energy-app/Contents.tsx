import { VStack, Link, UnorderedList, ListItem, Heading } from "@chakra-ui/react"

const sections = [
  'Overview',
  'Renewable Energy Availability',
  'Consumption Optimization',
  'Environmental Benefits',
  'Conclusion',
]

export function Contents(props) {
  return (
    <VStack align="start" px='1rem' py='3rem' spacing={4} bg="green.800" borderLeftRadius='1rem' {...props}>
      <Heading fontSize='1.2rem'>Table of Contents</Heading>
      <UnorderedList>
        {sections.map((section) => (
          <ListItem key={section}>
            <Link href={`#${section.replace(/\s/g, '-')}`}>{section}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </VStack>
  )
}

export default Contents
