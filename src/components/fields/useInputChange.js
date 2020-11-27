import { useState } from 'react'

export const useInputChange = () => {
    const [input, setInput] = useState({
      title: "",
      description: "",
      portions: 2,
      ingredientName: "",
      ingredientAmount: "",
      unit: "",
      cookingInstructionTitle: "",
      cookingInstructionDescription: "",
      utensil: "",
      servingsPerKit: "",
      prepTimeHh: "",
      prepTimeMm: "",
      cookTimeHh:"",
      cookTimeMm:""
      // accountName: '',
      // emailAddress: '',
      // phoneNumber: '',
      // productServiceName: '',
      // price: '',
      // isProduct: '',
      // methodOfDelivery: '',
      // deliveryPickUpAddress: '',
      // paymentTerms: '',
      // currencyCode: 'NGN',
      // accountNumber: '',
      // bankCode: '',
      // firstName: '',
      // lastName: '',
      // password: '',
      // accessCode:''
    });

    const handleInputChange = (e) => setInput({
        ...input,
        [e.target.name]: e.target.value
    })

    return [input, handleInputChange, setInput]
}