import { useProduct } from "../hooks/useProduct"
import React,{ createContext, ReactElement,CSSProperties } from 'react';
import styles from "../styles/styles.module.css"
import { ContextValues, InitialValues, OnChangeArgs, Product, ProductCardHandlers } from '../interfaces/interfaces';




export const CarsContex = createContext({} as ContextValues)
const {Provider} = CarsContex

export interface ProductProps  {
  product : Product,
  /* children: ReactElement | ReactElement[], */
  children: (event: ProductCardHandlers) => ReactElement
  className?: string,
  style?: CSSProperties,
  onChange?: (args: OnChangeArgs) => void,
  value?: number, 
  initialValues ?: InitialValues
}

export const ProductCars = ({product,children,className,style,onChange,value,initialValues}: ProductProps) => {

  const {increaseBy,state,reset} = useProduct({onChange,product,value,initialValues})
  
  


  return (
    <Provider value={{
        product,
        increaseBy,
        state,
        maxCount: initialValues?.maxCount
    }}>
    <div className={`${styles.productCard} ${className}`}
    style={style}>

      {children({
        count:state,increaseBy,
        product,
        maxCount:initialValues?.maxCount,
        isMaxCountReached: state == initialValues?.maxCount,
        reset

      })}
    </div>
    </Provider>
  )
}


