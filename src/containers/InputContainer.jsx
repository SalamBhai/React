const InputContainer = ({label,children}) => {

    return (
        <div style={{borderBottom: '1px solid grey', paddingBottom:'10px', marginBottom:'15px'}}>
            <p style={{color:'gray', marginBottom:'10px'}}>{label}</p>
            {children}
        </div>
    )

}

export default InputContainer;