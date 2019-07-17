const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Required'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
    }
    if (!values.address) {
        errors.address = 'Required'
    }
    if (!values.phone) {
        errors.phone = 'Required'
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
        errors.dateFrom = 'Required'
    }
    if (!values.dateTo) {
        errors.dateTo = 'Required'
    }
    return errors
}

export default validate