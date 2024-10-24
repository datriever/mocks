import { useState } from 'react'
import { Box, Button, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { MdSend } from 'react-icons/md'
import { chat } from '@scraper/controller/chat'
import { Messages } from './Messages.js'

export function Chat(props: Parameters<typeof VStack>[0]) {
  const { messages } = chat.use()
  const [input, setInput] = useState('')

  return (
    <VStack h='100%' align='end' justify='space-between' p='1rem' {...props}>
      <Box h='100%' w='100%' overflowY='auto' p='1rem' bg='gray.800' borderRadius='md'>
        <Messages messages={messages} />
      </Box>

      <InputGroup w='100%' justifyContent='end'>
        <Input w='100%'
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder='Type your message...'
          color='white'
          bg='gray.700'
          border='none'
          _placeholder={{ color: 'gray.400' }}
        />
        <InputRightElement>
          <Button colorScheme='blue' variant='ghost' rightIcon={<MdSend />} />
        </InputRightElement>
      </InputGroup>
    </VStack>
  )
}

export default Chat