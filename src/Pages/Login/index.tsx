import { useState } from "react";
import "./style.css";
import { AuthContext } from "../../ContextApi";
import { useContext } from "react";
import { toast } from 'react-toastify'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Login() {
  const [criar, setCriar] = useState(true);
  const { Register, Login, loading } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");



  const schema = z.object({
    email: z.string().email().nonempty('O email precisa ser preenchido'),
    senha: z.string().min(6).nonempty('A senha precisa ser preenchida')
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })



  async function Criar(data: any) {
    if (email == '' || senha == '') {
      toast.error('Preencha todos os campos!')
      return;
    }
    Register(data);
    setEmail('')
    setSenha('')
  }


  async function Logar(data: any) {
    if (email == '' || senha == '') {
      toast.error('Preencha todos os campos!')
      return;
    }
    Login(data)
    setEmail('')
    setSenha('')
  }

  return (
    <div className="conteiner">
      {criar ? (
        <form onSubmit={handleSubmit(Logar)}>
          <h2>Olá, entre na sua conta</h2>
          <input
            placeholder="Email"
            {...register}
          />
          <p className="erros">{errors.email?.message}</p>
          <input
            placeholder="*****"
            type="password"
            {...register}

          />
          <p className="erros">{errors.senha?.message}</p>
          <button type="submit">
            {loading ? (
              <p>carregando...</p>
            ) : (
              <p>Entrar</p>
            )}
          </button>
          <button onClick={() => setCriar(false)}>
            <p>Criar conta!</p>
          </button>
        </form>
      ) : (
        <form>
          <h2>Criar conta</h2>
          <input
            placeholder="Email"
            {...register}
          />
          <p className="erros">{errors.email?.message}</p>
          <input
            placeholder="*****"
            value={senha}
            {...register}
          />
          <p className="erros">{errors.senha?.message}</p>
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
        </form>
      )}
      <div className="textAnimation">
        <h2 className="Barber">BarberPro</h2>
      </div>
    </div>
  );
}
