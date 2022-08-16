import { IconButton } from "../components";
import { RiSearch2Line } from 'react-icons/ri'

import './styles/Greeting.css'

const Greeting = () => {
    return (
        <div className="greeting-container">
            <div>
                <p>Welcome Back!</p>
                <p>Here's Update Today</p>
            </div>

            <IconButton icon={<RiSearch2Line />} />
        </div>
    )
}

export default Greeting;