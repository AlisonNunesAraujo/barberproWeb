import { AuthContext } from '../../ContextApi';
import './styles.css'
import { useContext } from 'react';

export default function Header() {

    const {user} = useContext(AuthContext)
    return (
        <div className='header'>
            <h2>BarberPro</h2>
            <div>
                
                <p>{user.email}</p>
            </div>
        </div>
    );
}