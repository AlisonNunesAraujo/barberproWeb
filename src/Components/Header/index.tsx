import { AuthContext } from '../../ContextApi';
import './styles.css'
import { useContext } from 'react';

export default function Header() {

    const {user,Sair} = useContext(AuthContext)


    return (
        <div className='header'>
            <h2>BarberPro</h2>
            <div>
                
                <p>Email: {user.email}</p>
                <button onClick={Sair}>Sair</button>
            </div>
        </div>
    );
}