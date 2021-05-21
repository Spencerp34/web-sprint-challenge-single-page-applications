import * as yup from 'yup'


const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is a required field')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required("Size is required!"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    peppers: yup.boolean(),
    instructions: yup
        .string()
        .trim(),

})

export default formSchema