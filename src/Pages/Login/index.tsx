import { useState } from "react";
import "./style.css";
import { AuthContext } from "../../ContextApi";
import { useContext } from "react";
import {toast} from 'react-toastify'
export default function Login() {
  const [criar, setCriar] = useState(true);
  const { Register,Login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Criar() {
    if(email == '' || senha == ''){
      toast.error('Preencha todos os campos!')
      return;
    }
    Register({ email, senha });
  }

  async function Logar(){
    if(email == '' || senha == ''){
      toast.error('Preencha todos os campos!')
      return;
    }
    Login({email,senha})
  }

  return (
    <div className="conteiner">
      {criar ? (
        <div>
          <h2>Olá, entre na sua conta</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="*****"
            value={senha}
            type="password"
            onChange={(e) => setSenha(e.target.value)}
          />
          <button onClick={Logar}>
            <p>Entrar</p>
          </button>
          <button onClick={() => setCriar(false)}>
            <p>Criar conta!</p>
          </button>
        </div>
      ) : (
        <div>
          <h2>Criar conta</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="*****"
            value={senha}
              type="password"
            onChange={(e) => setSenha(e.target.value)}
          />
          <button onClick={Criar}>
            <p>Criar conta!</p>
          </button>
          <button onClick={() => setCriar(true)}>
            <p>Voltar</p>
          </button>
        </div>
      )}
      <div className="textAnimation">
        <h2 className="Barber">BarberPro</h2>
      </div>
    </div>
  );
}
