import { ProductTitle,ProductCars} from '../../src/components/';
import React from "react"
import renderer from "react-test-renderer"

describe("pruebas productitle", () => {


    test("debe coincidir con el snapshot", () => {

        const wrapper = renderer.create(
         <ProductTitle title='custom product'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()

    })

    

    test("debe colocar el nombre del producto", () => {
        const product = {
            title: "cafe",
            id:1
        }

        const wrapper = renderer.create(
            <ProductCars product={product} >
                {
                    () => (
                        <>
                        <ProductTitle/>
                        </>
                    )
                }
            </ProductCars>
        )

        expect(wrapper.toJSON()).toMatchSnapshot()
    })

})