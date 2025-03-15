import './styles.css'
import { useNavigate } from 'react-router-dom';
import {FaUser} from 'react-icons/fa'
export default function Header() {
    const navigate = useNavigate()

   


    return (
        <div className='header'>
            <h2>BarberPro</h2>
            
            <div>
                
                <button onClick={() => navigate("/profile")}><FaUser color='white' size={20}/></button>
            </div>
        </div>
    );
}