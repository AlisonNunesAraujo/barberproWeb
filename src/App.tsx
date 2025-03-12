import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./ContextApi/index"
import { Auth } from "./Routs/auth"


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Auth/>
      </AuthProvider>
    </BrowserRouter>

  )
}