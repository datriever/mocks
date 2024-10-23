import { useRoutes } from 'react-router-dom'
import Scraper from '@scraper/Scraper'

export function App() {
  return useRoutes([
    {
      path: '/scraper',
      element: <Scraper />
    }
  ])
}

export default App