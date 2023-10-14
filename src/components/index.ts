import { ProductImage } from ".";
import { ProductButtons } from ".";
import { ProductTitle } from ".";
import { ProductCarsHoc } from ".";
import { Hoc1 as PropsHoc } from "../interfaces/interfaces";


export { ProductButtons  } from "./ProductButtons";
export { ProductCars as ProductCarsHoc } from "./ProductCars";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCars:PropsHoc = Object.assign(ProductCarsHoc,{
    title: ProductTitle,
    image: ProductImage,
    buttons: ProductButtons
})

export default ProductCars