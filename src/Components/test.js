import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import Cv from './templates/Cv';

const Example = () => {

  const componentRef = useRef();
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
        <h1>fkgodfkgnksdagnodfgdfga</h1>
      <Cv ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Example