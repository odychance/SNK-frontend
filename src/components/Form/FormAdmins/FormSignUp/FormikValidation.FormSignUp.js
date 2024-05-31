import * as Yup from 'yup'

export const InitialValues = {
    name: '',
    lastname: '',
    email: '',
    repeatEmail: '',
    password: '',
    repeatPassword: '',
    adminPass: ''
}

export const ValidationSchema = Yup.object({
        name: Yup.string().required(),
        lastname: Yup.string().required(),
        email: Yup.string().email().required(),
        repeatEmail: Yup.string().email().required(),
        password: Yup.string().required().min(6),
        repeatPassword: Yup.string().required(),
        adminPass: Yup.string().required()
})

