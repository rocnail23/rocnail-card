import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCars } from '../src/components/index';

const product = {
  id: 1,
  name: "taza"
}

const App = () => {
  return (
    <div>
      <ProductCars
        product={product}
        className="bg-dark"
        initialValues={0}
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
