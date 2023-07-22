import React from 'react'
import { Link } from 'react-router-dom'
import Classes from './EntryPage.module.css'
const EntryPage = () => {
  return (
    <div className={Classes.entrypage}>
      <p>Welcome to YourShop shopping website</p>
      <Link to="userLogin" className='btn btn-primary'>User</Link>
      <Link to="/adminLogin" className='btn btn-success'>Admin</Link>
    </div>
  )
}

export default EntryPage
