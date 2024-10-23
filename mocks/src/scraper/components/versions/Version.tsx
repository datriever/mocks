import { Card, CardBody, Text } from '@chakra-ui/react'

export function Version({ id, timestamp }: { id: string; timestamp: Date }) {
  return (
    <Card bg='gray.700' w='fit-content' h='100%' whiteSpace='nowrap'>
      <CardBody>
        <Text fontSize='lg' color='white'>{id}</Text>
        <Text fontSize='sm' color='gray.400'>{timestamp.toLocaleString()}</Text>
      </CardBody>
    </Card>
  )
}
