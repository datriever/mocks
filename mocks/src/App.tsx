import { lazy } from 'react';
import { Navigate, NavLink, useRoutes } from 'react-router-dom'
const Scraper = lazy(() => import('@scraper/Scraper'));
import { Button, VStack } from '@chakra-ui/react'

export function App() {

  const main = (
    <VStack h='100vh' w='100vw' align='center' justify='center'>
      <Button as={NavLink} to='scraper'>Scraper</Button>
    </VStack>
  )

  return useRoutes([
    {
      path: '',
      element: main
    },
    {
      path: '/scraper',
      element: <Scraper />
    },
    {
      path: '*',
      element: <Navigate to='..' />
    }
  ])
}

export default App