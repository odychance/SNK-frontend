import * as Yup from 'yup'

export function InitialValues(focusedTarget) {
    return {
        division: focusedTarget?.division,
        purpose: focusedTarget?.purpose,
        picture: focusedTarget?. picture,
    }
}

export function ValidationSchema() {
    return Yup.object({
        division: Yup.string(),
        purpose: Yup.string(),
        picture: Yup.string().url("Enter a valid URL")
    })
}