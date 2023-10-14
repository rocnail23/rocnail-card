import renderer from "react-test-renderer"
import React from "react"
import ProductCars, { ProductImage } from "../../src/components"

describe("pruebas en productImages", () => {


    test("mostrar url en props" ,() => {


        const wraper = renderer.create(
            <ProductImage image="https/cafe.com"/>
        )


        expect(wraper.toJSON()).toMatchSnapshot()

    })

    test("mostrar url en pasado por product" ,() => {


        const wraper = renderer.create(
            <ProductCars product={{
                id:1,
                title:"cafe",
                image:"https/thisiscoffe",

            }}>
            {() => (
                <ProductImage/>
            )}
            </ProductCars>
        )


        expect(wraper.toJSON()).toMatchSnapshot()

    })


})