import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from './constants'
function Navbar() {
  return (
    <div><div class="container pt-5  d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
<Link to={'/'}>
<img src={logo} width={100}  alt="" />
</Link>

    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link to={'/login'} className='me-3 py-2 text-dark text-decoration-none'>
       Login
        </Link>
    <Link to={'/registr'} className='me-3 py-2 text-dark text-decoration-none'>
   Registr
    </Link>


    </nav>
  </div></div>
  )
}

export default Navbar