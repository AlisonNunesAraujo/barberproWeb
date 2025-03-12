import { createContext, useState, useEffect } from "react";
import { ReactNode } from "react";
import { auth } from "../firebase/concect";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/concect";
import { deleteDoc } from "firebase/firestore";

export type childrenProps = {
  children: ReactNode;
};
export type UserProps = {
  setUser: any;
  logado: any;
  Register: (info: { email: string; senha: string }) => Promise<void>;
  Login: (info: { email: string; senha: string }) => Promise<void>;
  user: user;
  AddDocument: (info: Document) => Promise<void>;
  agendamentos: Document[];
  Excluir: ({uid} : deleteUid)=> Promise<void>;
};

export type user = {
  email: string | null;
  uid: string | null;
};

type Document = {
  cliente: string;
  serviço: string;
  valor: string;
  horario: string;
  uid: string 
};

interface Agendamentos {
  cliente: string;
  serviço: string;
  valor: string;
  horario: string;
  uid: string
}
type deleteUid = {
  uid: string
}
export const AuthContext = createContext({} as UserProps);

export default function AuthProvider({ children }: childrenProps) {
  const navigation = useNavigate();
  const [user, setUser] = useState<user>({
    email: "",
    uid: "",
  });
  const [agendamentos, setAgendamentos] = useState<Agendamentos[]>([]);

  const logado = user?.email && user?.uid;

  useEffect(() => {
    async function Hendle() {
      const data = collection(db, "Agendas");
      getDocs(data).then((snapshot) => {
        let lista: Agendamentos[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            cliente: doc.data().cliente,
            serviço: doc.data().serviço,
            horario: doc.data().horario,
            valor: doc.data().valor,
            uid: doc.id
          });
        });

        setAgendamentos(lista);
      });
    }
    Hendle();
  }, [AddDocument,Excluir]);

  async function Register({ email, senha }: { email: string; senha: string }) {
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("ok");
    } catch {
      alert("erro");
    }
  }

  async function Login({ email, senha }: { email: string; senha: string }) {
    try {
      // logs in the user and gets the user data
      const data = await signInWithEmailAndPassword(auth, email, senha);

      // alerts the user that the login was successful
      alert("ok");

      // sets the user in the context
      setUser({
        email: data.user.email,
        uid: data.user.uid,
      });

      // prints the user data to the console
      console.log(data);

      // navigates to the home page
      navigation("/Home");
    } catch {
      // alerts the user that there was an error
      alert("erro");
    }
  }

  async function AddDocument({ cliente, serviço, valor, horario }: Document) {
    try {
      await addDoc(collection(db, "Agendas"), {
        cliente: cliente,
        serviço: serviço,
        valor: valor,
        horario: horario,
        
        
      });
      alert("ok");
    } catch {
      alert("erro");
    }
  }

  async function Excluir({uid}: deleteUid){
    const ref = doc(db,'Agendas', uid)

    deleteDoc(ref)
    .then(()=> {
      alert('ok')
    })
    .catch(()=>{
      alert('erro')
    })
  }

  return (
    <AuthContext.Provider
      value={{
        setUser,
        logado,
        Register,
        Login,
        user,
        AddDocument,
        agendamentos,
        Excluir
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
