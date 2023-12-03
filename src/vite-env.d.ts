/// <reference types="vite/client" />

// Type Script 

interface User {
  id: string,
  fastName:string,
  lastName:string,
  phoneNumber:number,
  email:string,
  password:string,
  wishlist:[string /*productId*/],
  cards:[{
    productId:string,
    quantity:number
  }],
  profileImage:string
}

interface Address {
  type:string,
  id:string,
  street:string,
  city:string,
  zipCode:number,
  country:string
}

interface Variant {
  id: string,
  productId: string /*productId*/,
  color: string,
  sizes: string[];
  image: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock_quantity: number;
  category: string;
  brand: string;
  discount: number;
  variants: [string /*variantId*/];
  image: string;
}

interface category {
  id:string;
  name:"mobile";
  parent:string;
}



















































































