import './styles/IconButton.css'


const IconButton = ({icon, clickAction=()=>{}}) => {
    return (
        <button className='icon-button-container' onClick={clickAction}>
            {icon}
        </button>
    )
}

export default IconButton;