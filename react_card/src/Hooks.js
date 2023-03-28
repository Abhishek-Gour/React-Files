import React, { useState } from 'react'
import './index.css'
export default function Hooks() {
  const arr = [
    {
      uName: 'Abhishek Gour',
      id: 10,
      age: 21
    },
    {
      uName: 'Black Panther',
      id: 11,
      age: 21,
      stream: 'CSE'
    }

  ]
  const [set, setVal] = useState(arr);
  let flag = 0;
  const changeVal = () => {
    setVal(arr);
  }
  const removeElem = (id) => {
    // alert("id")
    const myNewArray = set.filter((curElem) => {
      return curElem.id != id;
    })

    setVal(myNewArray);
  }
  return (
    <div className='mainContainer flex'>
      {
        set.map((set) => {
          return (
            <h1 className='' key={set.id}>Name: {set.uName} age: {set.age} id: {set.id} stream: {set.stream}
              <button className='btn' onClick={() => removeElem(set.id)}>remove</button>
            </h1>
          );
        })
      }
      <button onClick={changeVal} className='btn'>Click me</button>
    </div>
  )
}
