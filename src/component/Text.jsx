import React, { useState } from 'react'

import { Textarea } from "flowbite-react";


export function TextComponent(props) {
  const handlerUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handlerLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handelToClear = () => {
    let newText = ("");
    setText(newText);
  }

  const handleToSubmit = (e) => {
    setText(e.target.value)
    if (text.trim() !== "") {
      const newItem = {
        title: text    
      };
      setitem ([...items, newItem]);   
      setText(""); 
    }
  }

  const handlerOnChange = (event) => {
    setText(event.target.value)
  }


  const [text, setText] = useState("");
  const [items , setitem] = useState([]);

  return (
    <>
    
    <div className="bg-gray-300 flex-auto justify-items-center p-10">
      <h1 className='text-5xl text-blue-950-200 font-bold '>{props.heading}</h1>
      <div className="max-w-lg h-screen my-15">
        <div className="mb-2 block">
          <Textarea id="comment" placeholder="Leave a comment..." value={text} required rows={10} onChange={handlerOnChange} />
        </div>

        <button className=' bg-red-950 text-white p-2 rounded m-2' onClick={handlerUpClick}>ConvertToUppercase</button>
        <button className='btn2 bg-cyan-950 text-white p-2 rounded' onClick={handlerLoClick}>ConvertToLowerCase</button>
        <button className='btn3 bg-blue-700 text-white p-2 m-2 rounded' onClick={handelToClear}>Text clear</button>
        <br />
        <button className='btn3 bg-green-500 text-white px-15 py-4 m-2 rounded-2xl' onClick={handleToSubmit}>Submit</button>
        <h1 className='text-black font-serif text-3xl my-7' >Your Text summary</h1>
        <p className='text-black font-sans text-xl'>{text.split(" ").length -1} word and {text.length} characters</p>
        <h1 className='text-black font-mono text-3xl my-4 underline' >Preview</h1>
        <p className='text-black'>{text}</p>
        <ul style={{ marginTop: "20px" }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "15px" }}>
             {item.title}
          </li>
        ))}
        </ul>
      </div>
      </div>
     

    </>


  );
}


