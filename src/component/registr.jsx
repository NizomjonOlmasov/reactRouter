import React from 'react'
import { icon } from './constants'
import { useState } from 'react'
import Input from '../ui/input'
function Registr() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='text-center'><main className="form-signin w-25 m-auto">
    <form >
      <img className="mb-4" src={icon} alt="" width="72" height="57"/>
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  <Input label={'Username'} state={name} setState={setName}/>
<br />
  <Input label={'Email address'} state={email} setState={setEmail}/>
<br />
  <Input label={'Password'}type='password' state={password} setState={setPassword}/>
  

  
      <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-body-secondary">© cadet  by O'lmasov Nizomjon</p>
    </form>
  </main></div>
  )
}

export default Registr