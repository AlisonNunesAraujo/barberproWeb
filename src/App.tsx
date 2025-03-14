import { BrowserRouter } from "react-router-dom"
import AuthProvider from "./ContextApi/index"
import { Auth } from "./Routs/auth"
import  {  ToastContainer   }  from  'react-toastify' ;

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Auth/>
        <ToastContainer/>
      </AuthProvider>
    </BrowserRouter>

  )
}