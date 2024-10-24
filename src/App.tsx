import { lazy } from 'react';
import { Navigate, NavLink, useRoutes } from 'react-router-dom'
import { Button, VStack } from '@chakra-ui/react'
import AppBuilder from './builder/AppBuilder';
const Scraper = lazy(() => import('@scraper/Scraper'));
const EnergyApp = lazy(() => import('./energy-app/EnergyApp'));

export function App() {

  const main = (
    <VStack h='100vh' w='100vw' align='center' justify='center'>
      <Button as={NavLink} to='scraper'>Scraper</Button>
      <Button as={NavLink} to='energy'>Energy App</Button>
      <Button as={NavLink} to='builder'>App Builder</Button>
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
      path: '/energy',
      element: <EnergyApp />
    },
    {
      path: '/builder',
      element: <AppBuilder />
    },
    {
      path: '*',
      element: <Navigate to='..' />
    }
  ])
}

export default App