import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profile from './components/profile/Profile';
import "./styles/global.css"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Profile/>,
    }])
  return <RouterProvider router={router} />
}

export default App;
