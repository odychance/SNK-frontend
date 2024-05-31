import * as Yup from 'yup'

export const InitialValues = {
        division: "",
        picture: "",
        purpose: "",
}

export const ValidationSchema = Yup.object({
        division: Yup.string(),
        picture: Yup.string().url("Enter a valid URL"),
        purpose: Yup.string()
})