import { HStack } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import Main from "./Main"
import Contents from "./Contents"

export function EnergyApp() {
  return (
    <HStack h='100vh' w='100vw' align='center' justify='center' bg='green.900'>
      <Sidebar h='100%' w='20%' />
      <Main h='100%' w='62%' />
      <Contents w='18%' />
    </HStack>
  )
}

export default EnergyApp