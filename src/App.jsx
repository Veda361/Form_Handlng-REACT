import React from 'react'
import Flash from './components/Flash'

const App = () => {
  const Users = [
    {
      "name": "Aarav Sharma",
      "age": 25,
      "city": "Mumbai",
      "profession": "Frontend Developer",
      "photo": "https://plus.unsplash.com/premium_photo-1701178412626-ead96ec6ae45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVncyUyMG9mJTIwY29kZXxlbnwwfDB8MHx8fDA%3D"
    },
    {
      "name": "Priya Verma",
      "age": 28,
      "city": "Bengaluru",
      "profession": "Data Scientist",
      "photo": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      "name": "Rahul Mehta",
      "age": 30,
      "city": "Delhi",
      "profession": "Backend Engineer",
      "photo": "https://randomuser.me/api/portraits/men/85.jpg"
    }
  ]

  return (
    <div>
      <div className='p-10'>
        {Users.map(function(elem, idx){
          return (
            <Flash
              key={idx}
              userName={elem.name}
              age={elem.age}
              city={elem.city}
              profession={elem.profession}
              pic={elem.photo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App