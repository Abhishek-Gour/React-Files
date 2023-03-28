import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function User1() {
  const location = useLocation();
  console.log(location);
    const params = useParams();
    const {name} = params;
    console.warn(name);
  return (
    <div>
      <h1>User1 {name}'s page </h1>
    </div>
  )
}
