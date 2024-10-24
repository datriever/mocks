import { Box, Heading, HStack } from '@chakra-ui/react'
import { history } from '@scraper/controller/history'
import { Version } from './Version'

export function Sidebar(props: Parameters<typeof Box>[0]) {
  const { versions } = history.use()
  return (
    <HStack h='100%' w='100%' {...props}>
      <Heading>Versions</Heading>
      <Box h='100%' w='100%' overflowX='auto'>
        <HStack w='fit-content' p={0}>
          {versions.map((v, i) => <Version key={i} id={v.id} timestamp={v.timestamp} />)}
        </HStack>
      </Box>
    </HStack>
  )
}

export default Sidebar
