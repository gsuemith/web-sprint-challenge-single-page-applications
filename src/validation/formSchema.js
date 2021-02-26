import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    //required inputs
    name: Yup
        .string()
        .required("Please enter a name for this order"),
    size: Yup
        .string()
        .required()
        .oneOf(['S', 'M', 'L', 'XL'], "Please select a size"),
    
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