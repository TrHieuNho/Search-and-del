/* eslint-disable no-redeclare */
/* eslint-disable react/prop-types */

import { useState } from "react";


function BodyValue({product, handleDel, setEdit }) {
// console.log('product', product);
const [editing, setEditing] = useState(false);

const handleEditing = () => {
    setEditing(true);
}
const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

let viewMode = {};
let editMode = {};
if (editing) {
    viewMode.display= 'none';
}
else { 
    editMode.display= 'none';
}

// const setUpdate = (updatedTitle , name )
//  set

return(
    <div className="mt-8 ml-80 " >    
        <h5 className="text-blue-500">Created tasks</h5>
        <ul className="bg-black mt-4">
            {product.map(item =>
            <li key={item.id}>
                <span style={viewMode}>{item.name}</span>
                    <button  className="ml-40 bg-blue-200" onClick={()=>handleDel(item.id)} >del</button>
                    <button className="bg-blue-200" onClick={handleEditing} >Edit</button>
                <div>
                    <input  className="text-black" onKeyDown={handleUpdatedDone} style={editMode} type="text" value={item.name} onChange={(e) => setEdit(e.target.value, item.id)} />
                </div>
            </li>   
            )}
        </ul> 
    </div>   
)
}
export default BodyValue 