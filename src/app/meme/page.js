"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function meme() {
  const [TypeMeme, setTypeMeme] = useState({});

  useEffect(() => {
    axios
      .get("https://v2.jokeapi.dev/joke/any")
      .then((data) => {
        setTypeMeme(data);
      })
      .catch((res) => console.log(res));
  }, []);

  return (
    <div className=''>
      <h2>Meme </h2>
      <div>
        {/* <label>Type</label>
        <input
          type='radio'
          name='gender'
          value='dark'
          onChange={handlegender}
        />
        dark
        <input type='radio' name='gender' value='Any' onChange={handlegender} />
        Any
        <input
          type='radio'
          name='Programming'
          value='Programming'
          onChange={handlegender}
        />
        Programming{" "}
        <input
          type='radio'
          name='gender'
          value='Female'
          onChange={handlegender}
        />
        Any */}
        <pre>{JSON.stringify(TypeMeme?.data, null, 2)}</pre>
      </div>
    </div>
  );
}
