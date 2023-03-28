import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>This is a about page</h1>
      <Link to='/user1/anil'>anil</Link><br />
      <Link to='/user1/peter'>peter</Link><br />
    </div>
  )
}
