import { lazy, Suspense } from 'react';
import { Navigate, NavLink, useRoutes } from 'react-router-dom'
const Scraper = lazy(() => import('@scraper/Scraper'));
import { Button, Center, Spinner, VStack } from '@chakra-ui/react'

export function App() {

  const main = (
    <VStack h='100vh' w='100vw' align='center' justify='center'>
      <Button as={NavLink} to='scraper'>Scraper</Button>
    </VStack>
  )

  const routes = useRoutes([
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

  return (
    <Suspense fallback={<Center h='100vh' w='100vw'><Spinner /></Center>}>
      {routes}
    </Suspense>
  )
}

export default App