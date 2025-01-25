'use client'
import axios from 'axios';
import {useState , useEffect} from 'react'
export default  function  weather() {
    let [state, setState ] = useState({}) 
    const city = "Erbil"
    const APIKey = 'fe5629c20ca453c6157bd1484c95a16f'

    useEffect(()=> {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
    .then((data) => {
        console.log(data);
        setState(data)
    }).catch(function (error) {
        console.log(error);
      })}, [])
      
    return (
      <div className=''>
        <h2>Weather </h2>
    {<pre>
  {JSON.stringify(state, null, 2)}
</pre>
}

      </div>
    );
  }
  