import * as Yup from 'yup'

export const InitialValues = {
    name: '',
    titan: '',
    skills: '',
    history: '',
    picture: '',
}

export const ValidationSchema = Yup.object({
    name: Yup.string().required(),
    titan: Yup.string(),
    skills: Yup.string().required(),
    history: Yup.string().required(),
    picture: Yup.string().required()
})