import { IoIosNotificationsOutline } from 'react-icons/io'
import { IconButton } from '../components';

import { CgMenuGridR } from 'react-icons/cg'

import './styles/Heading.css'

const Heading = () => {

    return (
        <div className='heading-container'>
            <IconButton icon={<CgMenuGridR/>}/>
            <h1>Task Manager</h1>
            <IoIosNotificationsOutline size={30} />
        </div>
    )

}


export default Heading;