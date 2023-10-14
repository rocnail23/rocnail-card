import React,{ useContext, CSSProperties } from 'react';
import styles from "../styles/styles.module.css"
import { CarsContex } from "./ProductCars"

export interface Props {title?:string,className?:string,style?: CSSProperties} 

export const ProductTitle = ({title,className,style}:Props) => {

    const {product} = useContext(CarsContex)

    const titleShow: string = title ? title : product.title ? product.title : ""

    return (
        <span className={`${styles.productDescription} ${className}`}
        style={style}>{titleShow}</span>
    )
}