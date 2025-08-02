import React from 'react'

const card = (props) => {
  return (
    <div className='  bg-black text-black inline-block p-6 text-center rounded '>
      <img className='ml-8 h-32 w-32 rounded-full mb-3' src={props.pic}></img>
      <h1 className='text-xl font-semibold mb-4 text-white'>{props.userName}</h1>
      <h4 className='text-white-400 text-xl'>{props.city}</h4>
      <h2 className='text-red-600'>{props.age}</h2>
      <button mt-5 bg-emerald-700 text-white>Add Friend</button>
    </div>
  )
}

export default card