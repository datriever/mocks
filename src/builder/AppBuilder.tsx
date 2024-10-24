import { HStack } from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Main from './Main'

export default function AppBuilder() {
  return (
    <HStack spacing={4} h="100vh" p={4}>
      <Sidebar />
      <Main />      
    </HStack>
  )
}
