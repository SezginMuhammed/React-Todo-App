import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaMarker } from "react-icons/fa";
export const Todo = () => {
    const[todo,setTodo] =useState("")
    const[todos,setTodos] =useState([])
    const ekle=()=>{
     
        if (todo){

        setTodos([...todos,todo]);
        setTodo("");
        }
    }
    const sil=(index)=>{
        const silme=[...todos]
        silme.splice(index,1)
        setTodos(silme)
    }
    const update=(index)=>{
      const guncel=[...todos]
      const yenitodo= prompt("Yeni güncel değeri giriniz")
      if(yenitodo)
      {
        guncel[index] = yenitodo
        setTodos(guncel)

      }
    }
    

  return (
    <div className='container'>
      <p>Todo App</p>
      <div className="ekle">
      <input className='ekle1' placeholder='Ekleyebilirsiniz...' type="text" value={todo} onChange={e=>setTodo(e.target.value)}/>
      <button  className="ekle2" onClick={()=>ekle()}>Ekle</button>
      </div>
      
      <ul >
     
        {todos.map((todo, index)=>(
         
        <li  key={index}>
          <div className='todo'>
          <div className='textt'>{todo}</div>
          
            <button className='btn' onClick={()=>sil(index)}><FaRegTrashAlt/></button>
            <button className='btn' onClick={()=>update(index)}><FaMarker /></button>
           
            </div>
        </li>
        
            ))}
          
      </ul>
      
    </div>
  )
}
