
import React, { useState } from 'react';

const EventsFunctionsState = () => {
    const [firstName, setFirstName] = useState('Pandian');
    // const sayHello = (name) => {
    //    alert(`Hello ${name}`)
    // }
    // let firstName = 'George';
    const changeName = () => {
        //  firstName = "Alex"
        setFirstName('Alex');
    }
  return (
    <>
     <h2>Events Functions & State</h2> 
     {/* <button onClick={() => alert('Hello')}>Click Me</button> */}
     {/* <button onClick={() => sayHello('Alex')}>Click Me</button> */}
     <h3>My Name is: {firstName}</h3>
     <button onClick={changeName}>Click Me</button>
    </>
  )
}

export default EventsFunctionsState
