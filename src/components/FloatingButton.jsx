import { FaPlusSquare } from 'react-icons/fa'

const FlotingButton = ({...rest}) => {

    return (
        <div style={{width: '100%', display:'flex', justifyContent:'center', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'}} {...rest}>
            <div style={{
                position: 'fixed',
                bottom: '10px',
               backgroundColor:'black',
               color:'white', 
               padding: '10px 30px',
               borderRadius:'20px', 
               display: 'flex',
               alignItems: 'center',
               gap: '10px',
               fontSize:'0.8em',
               fontWeight: 'bold'
            }} className="floating-button">
                <FaPlusSquare />

                Add Task
            </div>
        </div>
    )

}

export default FlotingButton;