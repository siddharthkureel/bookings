
const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }else if(values.firstName<3){
        errors.firstName ='must be greater than 5 characters'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }else if (values.lastName < 3) {
        errors.lastName = 'must be greater than 5 characters'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.phone) {
        errors.phone = 'Required'
    } else if (!/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(values.phone)){
        errors.phone = 'invalid format! accepted:  +(123)-456-78-90___123-456-7890___123.456.7890___1234567890'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.group) {
        errors.group = 'Required'
    }
    if (!values.bookingFor) {
        errors.bookingFor = 'Required'
    }
    if (!values.dateFrom) {
        errors.dateFrom = 'Required';
    }
    return errors
}

export default validate