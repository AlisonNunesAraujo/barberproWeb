import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/concect";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase/concect";
import { deleteDoc, query, where } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

import {
  Agendamentos,
  Document,
  UserProps,
  childrenProps,
  deleteUid,
  user,
} from "./types";

export const AuthContext = createContext({} as UserProps);

export default function AuthProvider({ children }: childrenProps) {


  const navigation = useNavigate();
  const [user, setUser] = useState<user>({
    email: "",
    uid: "",
  });
  const [agendamentos, setAgendamentos] = useState<Agendamentos[]>([]);
  const [loading, setLoading] = useState(false)

  const logado = user?.email && user?.uid;

  useEffect(() => {
    async function Hendle() {
      const data = collection(db, "Agendas");
      const receitaQuery = query(data, where("uid", "==", user.uid));

      getDocs(receitaQuery).then((snapshot) => {
        let lista: Agendamentos[] = [];

        snapshot.forEach((doc) => {
          lista.push({
            cliente: doc.data().cliente,
            serviço: doc.data().serviço,
            horario: doc.data().horario,
            valor: doc.data().valor,
            uid: doc.id,
          });
        });

        setAgendamentos(lista);
      });
    }
    Hendle();
  }, [AddDocument, Excluir]);

  async function Register({ email, senha }: { email: string; senha: string }) {
    setLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      toast.info("Sua conta foi crianda com sucesso!")
      navigation("/Home");
      setLoading(false)
    } catch {
      toast.error("Algo deu errado!");
      setLoading(false)
    }
    setLoading(false)
  }

  async function Login({ email, senha }: { email: string; senha: string }) {
    setLoading(true)
    try {
      const data = await signInWithEmailAndPassword(auth, email, senha);

      toast.success('Bem vindo!')

      setUser({
        email: data.user.email,
        uid: data.user.uid,
      });

      navigation("/Home");
      setLoading(false)
    } catch {
      toast.error('Algo deu errado!')
      setLoading(false)
    }
    setLoading(false)
  }

  async function AddDocument({ cliente, serviço, valor, horario }: Document) {
    setLoading(true)
    try {
      await addDoc(collection(db, "Agendas"), {
        cliente: cliente,
        serviço: serviço,
        valor: valor,
        horario: horario,
        uid: user.uid
      });
      toast.success('Agendado')
      setLoading(false)
    } catch {
      toast.error('Algo deu errado!')
      setLoading(false)
    }
    setLoading(false)
  }

  async function Excluir({ uid }: deleteUid) {
    const ref = doc(db, "Agendas", uid);

    deleteDoc(ref)
      .then(() => {
        toast.success('Excluido!')
      })
      .catch(() => {
        toast.error('Algo deu errado!')
      });
  }

  async function Sair() {
    try {
      await signOut(auth);
      setUser({
        email: "",
        uid: "",
      });
    } catch {
      toast.error('Algo deu errado!')
    }
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
        Excluir,
        Sair,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
