import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/router';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <RouterProvider router={router} />
   </div>
  )
}

export default App
