import * as Yup from 'yup'

export function InitialValues(dataTarget) {
    return {
        name: dataTarget?.name,
        titan: dataTarget?.titan,
        skills: dataTarget?.skills,
        history: dataTarget?.history,
        picture: dataTarget?.picture,  
    }
}

export function ValidationSchema() {
    return Yup.object({
        name: Yup.string(),
        titan: Yup.string(),
        skills: Yup.string(),
        history: Yup.string(),
        picture: Yup.string()
    })
}