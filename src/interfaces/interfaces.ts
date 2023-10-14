import { ProductProps } from "../components/ProductCars"
import { Props as ProductButton } from "../components/ProductButtons"
import {Props as ProductImage } from '../components/ProductImage';
import {Props as ProductTitle} from "../components/ProductTitle"

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

 export interface Hoc1 {
  ({children,product}:ProductProps):JSX.Element,
   buttons: (Props: ProductButton) => JSX.Element,
   image: (Props: ProductImage) => JSX.Element,
   title: (Props: ProductTitle) => JSX.Element
 }