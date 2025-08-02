import React, { useState } from 'react'

const App = () => {
  // useState should be here, not inside submitHandler
  const [userName, setuserName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(userName)
    setuserName('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className='mr-10 bg-black mt-5 text-white rounded'
          type='text'
          placeholder='enter'
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
        <button
          type="submit"
          className='bg-emerald-700 text-xl px-2 dark:text-white'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App