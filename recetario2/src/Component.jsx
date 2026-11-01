import React, {useState} from 'react'

export default function Component() {

const [text, setText] = useState()
    
   const textOnChange = (event) => {
    setText(event.target.value)
   }

  return (
    <div>
        <input type="text" value={text} onChange={textOnChange}/>
        <button>Miu</button>

        <p>ola {text}</p>
        <p>te huele la cola</p>
    </div>
  )
}
