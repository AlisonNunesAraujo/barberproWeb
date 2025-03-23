import './styles.css'
import { useNavigate } from 'react-router-dom';
import {FaCog} from 'react-icons/fa'
export default function Header() {
    const navigate = useNavigate()

   


    return (
        <div className='header'>
            <h2>BarberPro</h2>
            
            <div>
                
                <button onClick={() => navigate("/profile")}>
                    <p><FaCog color='white' size={20}/></p>
                </button>
            </div>
        </div>
    );
}