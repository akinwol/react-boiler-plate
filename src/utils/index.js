/* eslint-disable global-require */
import { useState } from "react"

export const avatar = require("../components/assets/img/placeholders/face.png")

export const recipePlaceholder = require("../components/assets/img/placeholders/recipe-placeholder.png")

export const image404 = "../components/assets/img/404.png"

// import {
//   grayColor,
//   primaryColor,
//   infoColor,
//   successColor,
//   warningColor,
//   dangerColor,
// } from "../components/assets/jss/material-dashboard-react"

export function addThousandsSeparator(str) {
  const isFloat = str.includes(".")
  const string = str.split(".")

  if (isFloat) {
    return `${string[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${string[1]}`
  }
  return string[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
const currencyMap = {
  CAD: {
    name: "Canadian Dollars",
    symbol: "$",
  },
  USD: {
    name: "US Dollars",
    symbol: "$",
  },
  NGN: {
    name: "Nigerian Naira",
    symbol: "₦",
  },
}

export const nutritionType = [
  {
    name: "calories",
    unit: "",
  },
  {
    name: "carbohydrate",
    unit: "g",
  },
  {
    name: "cholesterol",
    unit: "mg",
  },
  {
    name: "fat",
    unit: "g",
  },
  {
    name: "protein",
    unit: "g",
  },
  {
    name: "saturated fat",
    unit: "g",
  },
  // {
  //   name: "serving size",
  //   unit: "",
  // },
  {
    name: "sodium",
    unit: "mg",
  },
  {
    name: "sugar",
    unit: "g",
  },
  {
    name: "trans fat",
    unit: "g",
  },
  {
    name: "unsaturated fat",
    unit: "g",
  },
]
export const unitType = [
  "tsp",
  "tbsp",
  "fl oz",
  "oz",
  "c",
  "ml",
  "L",
  "pt",
  "qt",
  "gal",
  "Ibs",
  "mg",
  "g",
  "kg",
  "unit",
]

export function nutritionToCode(name) {
  switch (name) {
    case "calories":
      return ""
    case "carbohydrate":
      return "g"
    case "cholesterol":
      return "mg"
    case "fat":
      return "g"
    case "protein":
      return "g"
    case "saturated fat":
      return "g"
    case "serving size":
      return ""
    case "sodium":
      return "mg"
    case "sugar":
      return "g"
    case "trans fat":
      return "g"
    case "unsaturated fat":
      return "g"
    default:
      return "unknown"
  }
}

export const perPortionAmount = [1, 2, 3, 4, 5, 6, 7, 8]

export const mealKitSample = {
  type: "meal-kit",
  title: "Eggs Toast with Greens",
  subtitle: "",
  base: {
    canPick: false,
    options: [
      {
        name: "none",
        optionId: "",
      },
      {
        name: "rice",
        optionId: "",
      },
      {
        name: "quinao",
        optionId: "",
      },
    ],
  },
  protien: {
    canPick: false,
    options: [
      {
        name: "none",
        optionId: "",
      },
      {
        name: "chicken",
        optionId: "",
      },
      {
        name: "tofu",
        optionId: "",
      },
    ],
  },
  description:
    "BodGumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.",
  image: "https://nowtoronto.com/wp-content/uploads/2020/06/meal-kit-toronto-980x618.jpg",
  isAvailable: true,
  isComplete: true,
  servingsPerKit: 5,
  rating: 4.36789,
  prepTime: 30,
  cookTime: 135,
  pricePerServing: 12,
  currencyCode: "CAD",
  ingredients: [
    {
      ingredientName: "Boneless, skinless chicken breast",
      ingredientAmount: 2,
      unit: "Ibs",
    },
    {
      ingredientName: "Yellow Potato",
      ingredientAmount: 360,
      unit: "g",
    },
    {
      ingredientName: "Cremini Mushrooms",
      ingredientAmount: 113,
      unit: "g",
    },
    {
      ingredientName: "Chicken Stock Reduction",
      ingredientAmount: 1,
      unit: "unit",
    },
    {
      ingredientName: "Soya Sauce",
      ingredientAmount: 9,
      unit: "g",
    },
    {
      ingredientName: "Montreal Spice",
      ingredientAmount: 0.5,
      unit: "tsp",
    },
    {
      ingredientName: "All-Purpose Flour",
      ingredientAmount: 1,
      unit: "tbsp",
    },
    {
      ingredientName: "Butter",
      ingredientAmount: 2,
      unit: "tbsp",
      notProvided: true,
    },
    {
      ingredientName: "Oil",
      notProvided: true,
    },
  ],
  cookingInstructions: [
    {
      instructionDescription:
        "Preheat the oven to 450F. Start the recipe when the oven is ready. Read the entire recipe card.Wash and dry all produce.Cut mushrooms into small wedges.Cut broccoli into 1-inch florets.Cut potatoes into small pieces.",
      instructionImage:
        "https://images.everyplate.com/f_auto,fl_lossy,q_auto,w_540/everyplate_s3/5ea04588e50981356a46955d/step-348f6272.jpg",
    },
    {
      instructionDescription:
        "In a medium pot, add potatoes and enough water to cover by 1-inch. Season with salt and bring to a boil over high.Once boiling, reduce the heat to medium. Cook, uncovered, for 8-10 min, until potatoes are tender.Strain potatoes then return to the same pot, off heat.Add 2 tbsp butter (double for 4 portions) and mash to a rustic texture. In a medium pot, add potatoes and enough water to cover by 1-inch. Season with salt and bring to a boil over high.Once boiling, reduce the heat to medium. Cook, uncovered, for 8-10 min, until potatoes are tender.Strain potatoes then return to the same pot, off heat.Add 2 tbsp butter (double for 4 portions) and mash to a rustic texture.",
      instructionImage:
        "https://images.everyplate.com/f_auto,fl_lossy,q_auto,w_540/everyplate_s3/5ea04588e50981356a46955d/step-814601db.jpg",
    },
    {
      instructionDescription:
        "Meanwhile, prepare a parchment-lined baking sheet.To the baking sheet, add broccoli and 1 tbsp oil (double for 4 portions). Season with salt and pepper. Toss to coat.Roast on the middle rack of oven, for 14-16 min, until tender.",
      instructionImage:
        "https://images.everyplate.com/f_auto,fl_lossy,q_auto,w_540/everyplate_s3/5ea04588e50981356a46955d/step-a55555bc.jpg",
    },
  ],
  nutrition: [
    {
      nutrientName: "calories",
      nutrientAmount: 650,
      unit: "kcal",
    },
    {
      nutrientName: "fat",
      nutrientAmount: 32,
      unit: "g Saturated Fat",
    },
    {
      nutrientName: "saturated fat",
      nutrientAmount: 13,
      unit: "g",
    },
    {
      nutrientName: "carbohydrate",
      nutrientAmount: 47,
      unit: "g",
    },
    {
      nutrientName: "protein",
      nutrientAmount: 41,
      unit: "g",
    },
    {
      nutrientName: "cholesterol",
      nutrientAmount: 150,
      unit: "mg",
    },
  ],
  utensils: [
    { utensilName: "3 Large Bowls" },
    { utensilName: "Measuring Cups" },
    { utensilName: "Measuring Spoons" },
  ],
  reviews: [
    {
      id: "4",
      reviewedBy: "useridhere",
      overallRating: 4,
      publicFeedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim sodales ut eu sem integer.",
      privateFeedback:
        "Amet volutpat consequat mauris nunc. Urna condimentum mattis pellentesque id.",
      wouldMakeAgain: true,
      reviewDate: new Date(),
    },
    {
      reviewedBy: {
        userId: "userblah",
        firstName: "Jenna",
        profilePicture:
          "https://i.pinimg.com/236x/c6/98/8c/c6988cdab0fae15d71741475fbb45514--professional-headshots-women-professional-portrait.jpg",
      },
      id: "1",
      overallRating: 5,
      publicFeedback:
        " Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tempus quam pellentesque nec nam aliquam sem et tortor. Aliquet nec ullamcorper sit amet. In hac habitasse platea dictumst quisque sagittis purus. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Cras ornare arcu dui vivamus arcu felis bibendum ut.",
      privateFeedback:
        "Amet volutpat consequat mauris nunc. Urna condimentum mattis pellentesque id.",
      wouldMakeAgain: true,
      reviewDate: new Date(2020, 9, 15),
    },
    {
      id: "2",
      reviewedBy: "userid2",
      overallRating: 2,
      publicFeedback:
        " Lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tempus quam pellentesque nec nam aliquam sem et tortor. Aliquet nec ullamcorper sit amet. In hac habitasse platea dictumst quisque sagittis purus. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Cras ornare arcu dui vivamus arcu felis bibendum ut.",
      privateFeedback:
        "Amet volutpat consequat mauris nunc. Urna condimentum mattis pellentesque id.",
      wouldMakeAgain: false,
      reviewDate: new Date(2018, 7, 15),
    },
  ],
}

export const mealKitList = [mealKitSample, mealKitSample, mealKitSample, mealKitSample]

export const orders = [
  {
    orderId: "12345",
    orderStatus: "in-progress",
    orderDate: new Date(),
    deliveryDate: new Date(),
    deliveryTime: "",
    totalAmount: 145.33,
    currencyCode: "CAD",
    buyer: {
      id: "userId",
      firstName: " Jess",
      lastName: "Brock",
    },
    merchant: "merchant id ",
    taxRate: 0.13,
    solfeyFee: 0.1,
    taxAmount: 20,
    transactionFees: 12,
    deliveryMethod: "delivery", // deliver or pickup
    deliveryAddress: {
      street: "270 Wellington St. W.",
      street2: "Unit 211",
      city: "Toronto",
      provinceState: "On",
      country: "Canada",
      postalZip: "M5V 3P5",
    },
    deliveryInstructions: "When you arrive buzzer is 1802",
    items: [
      {
        itemId: "itemid1",
        itemName: "Avocado Sandwhich Kit",
        quantity: 2,
        unitPrice: 29.99,
        totalPrice: 59.98,
        specialRequest: "Extra Avocados, no peppers",
      },
      {
        itemId: "itemid2",
        itemName: "Turkey Dinner Kit",
        quantity: 1,
        unitPrice: 60.99,
        totalPrice: 60.99,
        specialRequest: "Lots of hot suace on the side",
      },
    ],
  },
  {
    orderId: "12346",
    orderStatus: "new",
    orderDate: new Date(),
    deliveryDate: new Date(),
    deliveryTime: "",
    totalAmount: 145.33,
    currencyCode: "CAD",
    buyer: {
      id: "userId",
      firstName: " Jess",
      lastName: "Brock",
    },
    merchant: "merchant id ",
    taxRate: 0.13,
    solfeyFee: 0.1,
    taxAmount: 20,
    transactionFees: 12,
    deliveryMethod: "delivery", // deliver or pickup
    deliveryAddress: {
      street: "270 Wellington St. W.",
      street2: "Unit 211",
      city: "Toronto",
      provinceState: "On",
      country: "Canada",
      postalZip: "M5V 3P5",
    },
    deliveryInstructions: "When you arrive buzzer is 1802",
    items: [
      {
        itemId: "itemid1",
        itemName: "Avocado Sandwhich Kit",
        quantity: 2,
        unitPrice: 29.99,
        totalPrice: 59.98,
        specialRequest: "Extra Avocados, no peppers",
      },
      {
        itemId: "itemid2",
        itemName: "Turkey Dinner Kit",
        quantity: 1,
        unitPrice: 60.99,
        totalPrice: 60.99,
        specialRequest: "Lots of hot suace on the side",
      },
    ],
  },
  {
    orderId: "12347",
    orderStatus: "rejected",
    orderDate: new Date(),
    deliveryDate: new Date(),
    deliveryTime: "",
    totalAmount: 145.33,
    currencyCode: "CAD",
    buyer: {
      id: "userId",
      firstName: " Jess",
      lastName: "Brock",
    },
    merchant: "merchant id ",
    taxRate: 0.13,
    solfeyFee: 0.1,
    taxAmount: 20,
    transactionFees: 12,
    deliveryMethod: "delivery", // deliver or pickup
    deliveryAddress: {
      street: "270 Wellington St. W.",
      street2: "Unit 211",
      city: "Toronto",
      provinceState: "On",
      country: "Canada",
      postalZip: "M5V 3P5",
    },
    deliveryInstructions: "When you arrive buzzer is 1802",
    items: [
      {
        itemId: "itemid1",
        itemName: "Avocado Sandwhich Kit",
        quantity: 2,
        unitPrice: 29.99,
        totalPrice: 59.98,
        specialRequest: "Extra Avocados, no peppers",
      },
      {
        itemId: "itemid2",
        itemName: "Turkey Dinner Kit",
        quantity: 1,
        unitPrice: 60.99,
        totalPrice: 60.99,
        specialRequest: "Lots of hot suace on the side",
      },
    ],
  },
  {
    orderId: "12348",
    orderStatus: "delivered",
    orderDate: new Date(),
    deliveryDate: new Date(),
    deliveryTime: "",
    totalAmount: 145.33,
    currencyCode: "CAD",
    buyer: {
      id: "userId",
      firstName: " Jess",
      lastName: "Brock",
    },
    merchant: "merchant id ",
    taxRate: 0.13,
    solfeyFee: 0.1,
    taxAmount: 20,
    transactionFees: 12,
    deliveryMethod: "delivery", // deliver or pickup
    deliveryAddress: {
      street: "270 Wellington St. W.",
      street2: "Unit 211",
      city: "Toronto",
      provinceState: "On",
      country: "Canada",
      postalZip: "M5V 3P5",
    },
    deliveryInstructions: "When you arrive buzzer is 1802",
    items: [
      {
        itemId: "itemid1",
        itemName: "Avocado Sandwhich Kit",
        quantity: 2,
        unitPrice: 29.99,
        totalPrice: 59.98,
        specialRequest: "Extra Avocados, no peppers",
      },
      {
        itemId: "itemid2",
        itemName: "Turkey Dinner Kit",
        quantity: 1,
        unitPrice: 60.99,
        totalPrice: 60.99,
        specialRequest: "Lots of hot suace on the side",
      },
    ],
  },
  {
    orderId: "12349",
    orderStatus: "delivered",
    orderDate: new Date(),
    deliveryDate: new Date(),
    deliveryTime: "",
    totalAmount: 145.33,
    currencyCode: "CAD",
    buyer: {
      id: "userId",
      firstName: " Jess",
      lastName: "Brock",
    },
    merchant: "merchant id ",
    taxRate: 0.13,
    solfeyFee: 0.1,
    taxAmount: 20,
    transactionFees: 12,
    deliveryMethod: "delivery", // deliver or pickup
    deliveryAddress: {
      street: "270 Wellington St. W.",
      street2: "Unit 211",
      city: "Toronto",
      provinceState: "On",
      country: "Canada",
      postalZip: "M5V 3P5",
    },
    deliveryInstructions: "When you arrive buzzer is 1802",
    items: [
      {
        itemId: "itemid1",
        itemName: "Avocado Sandwhich Kit",
        quantity: 2,
        unitPrice: 29.99,
        totalPrice: 59.98,
        specialRequest: "Extra Avocados, no peppers",
      },
      {
        itemId: "itemid2",
        itemName: "Turkey Dinner Kit",
        quantity: 1,
        unitPrice: 60.99,
        totalPrice: 60.99,
        specialRequest: "Lots of hot suace on the side",
      },
    ],
  },
]

export function intToHhMmConversion(int) {
  let hh = 0
  if (int >= 60) {
    hh = Math.floor(int / 60)
  }
  const mm = int % 60
  let converted = `${hh}h ${mm} mins`
  if (hh < 1) {
    converted = `${mm} mins`
  }
  return converted
}

export function returnHhMm(int) {
  let hh = 0
  if (int >= 60) {
    hh = Math.floor(int / 60)
  }
  const mm = int % 60
  // let converted = `${hh}h ${mm} mins`
  // if (hh < 1) {
  //   converted = `${mm} mins`
  // }
  return { hh, mm }
}

export function hhMMToInt(hh, mm) {
  const converted = hh * 60 + mm
  return converted
}

export function calculateRatings(reviews) {
  let rating = 0
  let sum = 0
  if (reviews) {
    sum = reviews.reduce((a, b) => {
      return a + b.overallRating
    }, 0)
    rating = sum / reviews.length
  }
  const overallRating = Math.round(rating * 100) / 100

  return {
    overallRating,
    fixedRating: rating.toFixed(1),
  }
}

export function formatCurrency(num, currency, decimalPlaces = 2) {
  if (isNaN(num) || !currency) {
    return num
  }
  const currencySplit = currency.split(" ")[0]
  const isNumPositive = num >= 0
  const numUpdate = addThousandsSeparator(Math.abs(num).toFixed(decimalPlaces))
  const { symbol } = currencyMap[currencySplit]

  return `${isNumPositive ? "" : "- "}${symbol}${numUpdate}`
}

// hh*60 + mm -> add to get the int value.  4h 12 mins = 252 (240 +12)
// To convert back int/60 4h 12 mins -> mins=dd%60 and hours=dd/60

export const useTimeDateChange = () => {
  const [timeDate, setTimeDate] = useState({
    cookTime: null,
    prepTime: null,
  })

  const handleTimeDate = (e) =>
    setTimeDate({
      ...timeDate,
      [e.name]: e.value,
    })

  return [timeDate, handleTimeDate, setTimeDate]
}
export const useInputChange = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    portions: "",
    ingredientName: "",
    ingredientAmount: "",
    unit: "",
    nutrientName: "",
    nutrientAmount: "",
    instructionTitle: "",
    instructionDescription: "",
    utensilName: "",
    servingsPerKit: "",
    prepTimeHh: "",
    prepTimeMm: "",
    cookTimeHh: "",
    cookTimeMm: "",
    pricePerServing: "",
    leadTime: "",
    provinceState: "",
    address: "",
    addressLine2: "",
    city: "",
    country: "",
    postalZip: "",
    deliveryArea: "",
    deliveryFee: "",
    accountDescription: "",
    accountName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    verificationCode: "",
    fullName: "",
  })

  const handleInputChange = (e) => {
    if (e.target.type === "number") {
      // if (!Number(e.target.value)) {
      //   return;
      // }
      if (e.target.keyCode === 69) {
        return
      }
    }
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  return [input, handleInputChange, setInput]
}
export const useTimeChange = () => {
  const [time, setTime] = useState({
    monFrom: new Date(),
    monTo: "",
    tuesFrom: "",
    tuesTo: "",
    wedsFrom: "",
    wedsTo: "",
    thursFrom: "",
    thursTo: "",
    friFrom: "",
    friTo: "",
    satFrom: "",
    satTo: "",
    sunFrom: "",
    sunTo: "",
  })

  const handleTimeChange = (dateTime, name) => {
    setTime({
      ...time,
      [name]: dateTime,
    })
  }

  return [time, handleTimeChange, setTime]
}

export const useGenericChange = () => {
  const [genericValue, setGenericValue] = useState({
    prepTimeHh: "",
    prepTimeMm: "",
    cookTimeHh: "",
    cookTimeMm: "",
  })

  const handleGenericChange = (e, x) => {
    setGenericValue({
      ...genericValue,
    })
  }
  return [genericValue, handleGenericChange, setGenericValue]
}
export function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}
export const hhOptions = [1, 2, 3, 4, 5, 6, 7, 8]
export const mmOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]

export function dropZoneCodeToText(code) {
  switch (code) {
    case "file-invalid-type":
      return "Invalid file type, file must be either JPG, PNG or GIF"
    case "file-too-large":
      return "Your file is too large. File size must not be greater than 5mb"
    default:
      return "Error uploading your file"
  }
}

export function handleStatusChange(status) {
  switch (status) {
    case "new":
      return "#2D9CDB"
    case "rejected":
      return "#EB5757"
    case "canceled":
      return "#EB5757"
    case "in-progress":
      return "#F2994A"
    case "pending":
      return "#F2994A"
    case "delivered":
      return "#27AE60"
    default:
      return "primary"
  }
}
export function transactionCodeToStatus(code) {
  switch (code) {
    case "in-progress":
      return "In Progress"
    default:
      return code
  }
}

// export function dropZoneBorderColor(active, rejected, accepted) {
//   const success = successColor[0]
//   if (active && accepted) {
//     return success
//   }
// }
export const solfeyFees = {
  kits: 0.2,
  cookedMeals: 0.1,
}

export const taxRates = {
  on: 0.13,
}

export function handleSubtotal(items) {
  let subtotal = 0
  if (items.length > 0) {
    items.forEach((val) => {
      subtotal += (val.unitPrice || val.pricePerUnit) * val.quantity
    })
    return subtotal
  }
  return subtotal
}

export const handleTotalOrderBuyer = (subtotal, paymentProcessingFee, deliveryFee, discount) => {
  return Number(subtotal) + Number(paymentProcessingFee) + Number(deliveryFee) - Number(discount)
}
export const handleMerchantTotals = (subtotal, fee, taxes) => {
  return Number(subtotal) + Number(taxes) - Number(fee)
}

export const availableDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
]

export const canadianProvinces = [
  {
    name: "Alberta",
    value: "AB",
  },
  {
    name: "British Columbia",
    value: "BC",
  },
  {
    name: "Manitoba",
    value: "MB",
  },
  {
    name: "New Brunswick",
    value: "NB",
  },
  {
    name: "Newfoundland and Labrador",
    value: "NL",
  },
  {
    name: "Northwest Territories",
    value: "NT",
  },
  {
    name: "Nova Scotia",
    value: "NS",
  },
  {
    name: "Nunavut",
    value: "NU",
  },
  {
    name: "Ontario",
    value: "ON",
  },
  {
    name: "Prince Edward Island",
    value: "PE",
  },
  {
    name: "Quebec",
    value: "QC",
  },
  {
    name: "Saskatchewan",
    value: "SK",
  },
  {
    name: "Yukon Territory",
    value: "YT",
  },
]

export const usStates = [
  {
    name: "Alabama",
    value: "AL",
  },
  {
    name: "Alaska",
    value: "AK",
  },
  {
    name: "American Samoa",
    value: "AS",
  },
  {
    name: "Arizona",
    value: "AZ",
  },
  {
    name: "Arkansas",
    value: "AR",
  },
  {
    name: "California",
    value: "CA",
  },
  {
    name: "Colorado",
    value: "CO",
  },
  {
    name: "Connecticut",
    value: "CT",
  },
  {
    name: "Delaware",
    value: "DE",
  },
  {
    name: "District Of Columbia",
    value: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    value: "FM",
  },
  {
    name: "Florida",
    value: "FL",
  },
  {
    name: "Georgia",
    value: "GA",
  },
  {
    name: "Guam",
    value: "GU",
  },
  {
    name: "Hawaii",
    value: "HI",
  },
  {
    name: "Idaho",
    value: "ID",
  },
  {
    name: "Illinois",
    value: "IL",
  },
  {
    name: "Indiana",
    value: "IN",
  },
  {
    name: "Iowa",
    value: "IA",
  },
  {
    name: "Kansas",
    value: "KS",
  },
  {
    name: "Kentucky",
    value: "KY",
  },
  {
    name: "Louisiana",
    value: "LA",
  },
  {
    name: "Maine",
    value: "ME",
  },
  {
    name: "Marshall Islands",
    value: "MH",
  },
  {
    name: "Maryland",
    value: "MD",
  },
  {
    name: "Massachusetts",
    value: "MA",
  },
  {
    name: "Michigan",
    value: "MI",
  },
  {
    name: "Minnesota",
    value: "MN",
  },
  {
    name: "Mississippi",
    value: "MS",
  },
  {
    name: "Missouri",
    value: "MO",
  },
  {
    name: "Montana",
    value: "MT",
  },
  {
    name: "Nebraska",
    value: "NE",
  },
  {
    name: "Nevada",
    value: "NV",
  },
  {
    name: "New Hampshire",
    value: "NH",
  },
  {
    name: "New Jersey",
    value: "NJ",
  },
  {
    name: "New Mexico",
    value: "NM",
  },
  {
    name: "New York",
    value: "NY",
  },
  {
    name: "North Carolina",
    value: "NC",
  },
  {
    name: "North Dakota",
    value: "ND",
  },
  {
    name: "Northern Mariana Islands",
    value: "MP",
  },
  {
    name: "Ohio",
    value: "OH",
  },
  {
    name: "Oklahoma",
    value: "OK",
  },
  {
    name: "Oregon",
    value: "OR",
  },
  {
    name: "Palau",
    value: "PW",
  },
  {
    name: "Pennsylvania",
    value: "PA",
  },
  {
    name: "Puerto Rico",
    value: "PR",
  },
  {
    name: "Rhode Island",
    value: "RI",
  },
  {
    name: "South Carolina",
    value: "SC",
  },
  {
    name: "South Dakota",
    value: "SD",
  },
  {
    name: "Tennessee",
    value: "TN",
  },
  {
    name: "Texas",
    value: "TX",
  },
  {
    name: "Utah",
    value: "UT",
  },
  {
    name: "Vermont",
    value: "VT",
  },
  {
    name: "Virgin Islands",
    value: "VI",
  },
  {
    name: "Virginia",
    value: "VA",
  },
  {
    name: "Washington",
    value: "WA",
  },
  {
    name: "West Virginia",
    value: "WV",
  },
  {
    name: "Wisconsin",
    value: "WI",
  },
  {
    name: "Wyoming",
    value: "WY",
  },
]
