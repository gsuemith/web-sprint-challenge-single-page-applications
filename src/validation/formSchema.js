import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    //required inputs
    name: Yup
        .string()
        .required("A name is required"),
    size: Yup
        .string()
        .required("Please select a size")
        .oneOf(['S', 'M', 'L', 'XL']),
    
    //Toppings checklist
    pepperoni: Yup.boolean(),
    sausage: Yup.boolean(),
    mushroom: Yup.boolean(),
    olive: Yup.boolean(),
    greenPepper: Yup.boolean(),
    bacon: Yup.boolean(),
    chicken: Yup.boolean(),
    anchovy: Yup.boolean(),

    instructions: Yup
        .string()
        .max(50, "50 character limit"),
    quantity: Yup.number(),
})

export default formSchema