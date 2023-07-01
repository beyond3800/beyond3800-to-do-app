import {React,useContext} from 'react'
import { GroceryContext } from './context/grocerycont'
import { Trash, NotePencil } from 'phosphor-react'


const EachItem=(props)=> {
  const {eachEdit,deleteBtn} = useContext(GroceryContext)
    const {eachitem,id} =props.items
    // console.log(props)
  return (
    <div className="eachItems">
      <h3 className='eachItem'>{eachitem}</h3>
      <div className="btnArea">
         <button className='edit'onClick={()=>eachEdit(eachitem,id)}>< NotePencil/></button>
         <button className='delete' onClick={()=>deleteBtn(eachitem,id)}><Trash /></button>
      </div>
      </div>
   
  )
}

export default EachItem