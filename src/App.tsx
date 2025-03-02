import { BrowserRouter } from "react-router-dom"
import { Auth } from "./Routs/auth"

export default function App() {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>

  )
}