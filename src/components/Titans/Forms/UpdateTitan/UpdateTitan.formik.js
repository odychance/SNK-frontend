import * as Yup from 'yup'

export function InitialValues(titanInfo) {
    return {
        name: titanInfo?.name,
        host: titanInfo?.host,
        skill: titanInfo?.skill,
        history: titanInfo?.history,
        picture: titanInfo?.picture
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