import { useState } from "react";
import "./style.css";
import { AuthContext } from "../../ContextApi";
import { useContext } from "react";
import { toast } from 'react-toastify'

// import { useForm } from 'react-hook-form'
// import { z } from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'

export default function Login() {
  const [criar, setCriar] = useState(true);
  const { Register, Login, loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");



  // const schema = z.object({
  //   email: z.string().email().nonempty('O email precisa ser preenchido'),
  //   senha: z.string().min(6).nonempty('A senha precisa ser preenchida')
  // })

  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: zodResolver(schema)
  // })



  async function Criar() {
    if (email == '' || senha == '') {
      toast.error('Preencha todos os campos!')
      return;
    }
    Register({ senha, email });
    setEmail('')
    setSenha('')
  }


  async function Logar() {
    if (email == '' || senha == '') {
      toast.error('Preencha todos os campos!')
      return;
    }
    Login({ email, senha })
    setEmail('')
    setSenha('')
  }

  return (
    <div className="conteiner">
      {criar ? (
        <div >
          <h2>Olá, entre na sua conta</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="*****"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button onClick={Logar}>
            {loading ? (
              <p>carregando...</p>
            ) : (
              <p>Entrar</p>
            )}
          </button>
          <button onClick={() => setCriar(false)}>
            <p>Criar conta!</p>
          </button>
        </div>
      ) : (



        <div >
          <h2>Criar conta</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="*****"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button onClick={Criar}>
            {loading ? (
              <p>carregando...</p>
            ) : (
              <p>Criar conta!</p>
            )}
          </button>
          <button onClick={() => setCriar(true)}>
            <p>Voltar</p>
          </button>
        </div>
      )}

    </div>
  );
}
