import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [{
      index: true,
      element: <Home />
    }]
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  )
}

export default App
