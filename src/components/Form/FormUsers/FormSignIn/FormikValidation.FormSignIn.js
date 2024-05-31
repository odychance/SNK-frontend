import * as Yup from 'yup'

export const InitialValues = {
    email: '',
    password: '',
}

export const ValidationSchema = Yup.object({
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6),
})

