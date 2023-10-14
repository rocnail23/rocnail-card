# jose projject

### jose ejemplos 
```
import {
  ProductCars
} from "rocnail"
```


```
 <ProductCars
        product={product}
        className="bg-dark"
        initialValues={InitialValues}
      >
        {({
          count,
          increaseBy,
          isMaxCountReached,
          reset,
          maxCount
        }) => (
          <>
            <ProductCars.image  />
            <ProductCars.title  />
            <ProductCars.buttons />
          </>
        )}
        
      </ProductCars>
```      