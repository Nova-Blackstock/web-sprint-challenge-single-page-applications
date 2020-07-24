import * as yup from 'yup'


const formSchema = yup.object().shape({
    username: yup
        .string()
        .min(2, "Name bust be at least 2 characters")
        .required("Must include name on order"),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'xl'], "You must select a size"),
    instructions: yup
        .string()
        .min(5, "Instructions must be at least 5 characters"),
        
})

export default formSchema