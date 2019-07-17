import React from 'react'

const renderField = 
({ input, label, type, meta: { touched, error } ,classNameInput,id}) => {
    return(
    <>
        <input id={id} className={classNameInput} {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
    </>
)}

export default renderField