import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res)=>{
      setjokes(res.data)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])
  

  return (
   <>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke,index)=> (
            <div key={joke.id}>
              <h3>{joke.title}</h3>
              <p>{joke.joke}</p>
            </div>
        ))
      }
   </>
  )
}

export default App
