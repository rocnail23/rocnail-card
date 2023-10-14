import { ProductCars } from "../../src/components/ProductCars";
import React from "react"
import renderer,{act} from "react-test-renderer"



describe("pruebas product cars", () => {


    test("prueba 1 snapshot de renderizado", () => {

        const wraper = renderer.create(
            <ProductCars product={{
                title: "cafe",
                id:1
            }}>
                {() => (
                    <h1>ProductCars</h1>
                )}
            </ProductCars>
        )

        expect(wraper.toJSON()).toMatchSnapshot()


    })

    test("prueba 1 snapshot de renderizado", () => {

        const wraper = renderer.create(
            <ProductCars product={{
                title: "cafe",
                id:1
            }}>
                {({count,increaseBy}) => (
                    <>
                    <h1>ProductCars</h1>
                    <span>{count}</span>
                    <button onClick={() => increaseBy(1)}>increase</button>
                    </>
                )}
            </ProductCars>
        )
        let three = wraper.toJSON()

        console.log((three as any).children)
        act(() => {
            (three as any).children[2].props.onClick()
        })

        three = wraper.toJSON()

        expect((three as any).children[1].children[0]).toBe("1")

    })




})