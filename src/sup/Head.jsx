/* eslint-disable react/prop-types */
import { useState } from "react"

function Head({ onSubmit }) {
// const [isState, setIsState] = useState([])
const [text, setText]= useState("")
function onSubmit1(e){

    // setIsState(prev=>[...prev, text]) 
    e.preventDefault()
    onSubmit(text)
    setText('')

}
return (
    <div>
        <h1 className="ml-[25rem] text-blue-400 m-4">TODO</h1>
    <form className="mt-4">
        <input className="ml-80 h-[50px] bg-gray-300" onChange={(e) => setText(e.target.value)} placeholder={'Add a new task'} value={text} />
        <button className="bg-blue-200 ml-2" type="submit" onClick={onSubmit1}> Create </button>
    </form>
    </div>
   
)
}
export default Head