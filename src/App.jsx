import { useEffect, useState } from "react";
import Head from "./sup/Head";
import BodyValue from "./sup/BodyValue";

const storageKey = 'todo';

function MyApp() {
const [data, setData]= useState([])

function setTaskAndSave(newTask) {
  setData(newTask);
  localStorage.setItem(storageKey, JSON.stringify(newTask));
  // localStorage.removeItem("storageKey");
}

function taskSave() {
 const saved = localStorage.getItem(storageKey)
  if(saved) {
    setData(JSON.parse(saved))
  }
}

useEffect(() =>{
  taskSave();
}, [])

function onSubmit(e) {
  setTaskAndSave([...data, {name: e, id: Math.random()}])
  // setIsState(prev=>[...prev, text])
}

function handleDel(id){
  const del = data.filter((list)=> list.id !== id)
  // console.log(del);
  setTaskAndSave(del)
}

function setEdit(name , id) {
  setTaskAndSave(
    data.map((todo) => {
      if (todo.id === id) {
        todo.name = name;
      }
      return todo;
    })
  );
}
  return(
    <div>
      <Head  onSubmit={onSubmit} />
      <BodyValue product={data} handleDel={handleDel} setEdit={setEdit}/>
    </div>
)
}
export default MyApp 



