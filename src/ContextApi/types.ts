import {ReactNode} from 'react'

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
  Sair: () => Promise<void>
};
export type user = {
  email: string | null;
  uid: string | null;
};

 export type Document = {
  cliente: string;
  serviço: string;
  valor: string;
  horario: string;
  uid: string 
};

export interface Agendamentos {
  cliente: string;
  serviço: string;
  valor: string;
  horario: string;
  uid: string
}
export type deleteUid = {
  uid: string
}