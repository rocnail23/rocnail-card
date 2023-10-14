import { useEffect, useState } from "react"
import { OnChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface UseProduct {
    onChange?: (args: OnChangeArgs) => void,
    product: Product,
    value?:number,
    initialValues?: InitialValues
}


export const useProduct = ({ onChange, product, value = 0, initialValues }: UseProduct) => {

    const [ state, setState ] = useState<number>( initialValues?.count || value );
    const [isMount, setIsMount] = useState(false)

    const increaseBy = ( value: number ) => {
      
        let newValue = Math.max( state + value, 0 )
        console.log(newValue)
        onChange && onChange({ count: newValue, product });
        if(initialValues?.maxCount && newValue > initialValues.maxCount) return 

        setState( newValue );
            
        
    }

    const reset = () => {
        setState(initialValues?.count || value)
    }

    useEffect(() => {

        if(!isMount) return
        setState( value );
     
    }, [ value ])

    useEffect(() => {
        setIsMount(true)
    },[])
       

    return {
        state,
        increaseBy,
        reset
    }

}