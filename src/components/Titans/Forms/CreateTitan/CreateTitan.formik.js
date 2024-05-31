import * as Yup from 'yup'

export function InitialValues() {
    return {
        name: '',
        host: '',
        skill: '',
        history: '',
        picture: ''
    }
}

export function ValidationSchema(){

    return Yup.object({
        name: Yup.string(),
        host: Yup.string(),
        skill: Yup.string(),
        history: Yup.string(),
        picture: Yup.string()
    })
}