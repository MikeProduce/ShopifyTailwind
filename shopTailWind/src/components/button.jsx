import React, { useState } from 'react';

function MyComponent(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={props.onButtonClick}>Increment</button>
    </div>
  );
}

export default MyComponent;