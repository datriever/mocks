import { HStack } from '@chakra-ui/react'
import Sidebar from './builder/Sidebar'
import Main from './builder/Main'

export default function AppBuilder() {
  return (
    <HStack spacing={4} h="100vh" p={4}>
      <Sidebar />
      <Main />      
    </HStack>
  )
}
