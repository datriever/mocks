import { Box, Text, VStack } from '@chakra-ui/react'
import Markdown from 'react-markdown'
import { Message } from '../../controller/chat'

export function UserMessage({ text }: { text: string }) {
  return (
    <Box alignSelf='flex-end' bg='gray.700' maxW='95%' p='0.5rem'
    pos='relative' borderRadius='1rem' borderTopEndRadius={0}
    _after={{ content: '""', position: 'absolute', top: '0', right: '-10px', width: '0', height: '0', border: '10px solid transparent', borderTopColor: 'gray.700', borderBottom: '0' }}
    >
      <Text>{text}</Text>
    </Box>
  )
}

export function BotMessage({ text }: { text: string }) {
  return (
    <Markdown>{text || '...'}</Markdown>
  )
}

export function Messages({ messages }: { messages: Message[] }) {
  return (
    <VStack align='stretch' spacing='1rem' w='100%'>
      {messages.map((msg, i) =>
        msg.role === 'user' ? <UserMessage key={i} text={msg.text} /> : <BotMessage key={i} text={msg.text} />
      )}
    </VStack>
  )
}