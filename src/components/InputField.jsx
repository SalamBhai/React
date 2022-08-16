const InputField = ({ type, id, changeEvent, icon = null }) => {

    const inputStyles = {
        border: 'none',
        outline: 'none',
        flex: 1,
        fontSize: '1.2em',
        fontWeight: 'bold'

    }

    return (

        <div style={{ display: 'flex' }}>
            <input style={inputStyles} id={id} name={id} type={type} onChange={changeEvent} />
            {icon &&
                <div>
                    {icon}
                </div>}
        </div>
    )


}

export default InputField;