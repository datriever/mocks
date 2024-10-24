import { HStack, VStack } from '@chakra-ui/react'
import { chat, history } from './controller'
import Chat from './components/chat/Chat'
import Table from './components/table/Table'

function Layout() {
  return (
    <HStack h='100vh' w='100vw'>
      <VStack h='100%' w='70%' align='start'>
        <Table w='100%' h='100%' />
      </VStack>
      <Chat h='100%' w='30%' />
    </HStack>
  )
}

export function Scraper() {
  return (
    <chat.Provider>
      <history.Provider>
        <Layout />
      </history.Provider>
    </chat.Provider>
  )
}

export default Scraper