import { ReactElement } from "react"

export interface ContextValues {
    product:Product,
    increaseBy: (value: number) => void,
    state: number,
    maxCount?: number
}


 export interface Product {
     id: number,
     title: string,
     image?: string
 }

 export interface OnChangeArgs {
    product: Product,
    count: number
 }

 export interface CartProduct extends Product {
    count:number
  }
  
 export interface InitialValues {

    count: number,
    maxCount?: number,

 } 

 export interface ProductCardHandlers {
   count: number,
   isMaxCountReached: boolean,
   maxCount?: number,
   product:Product,

   increaseBy: (value:number) => void,
   reset: () => void
 }