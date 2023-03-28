import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h1>This is Contact page</h1>
      <Link to='user1'>User1</Link>
      <Link to='user2'>User2</Link>
      <Link to='user3'>User3</Link>
      <Outlet />
    </div>
  )
}
