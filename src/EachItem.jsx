import {React,useContext} from 'react'
import { GroceryContext } from './context/grocerycont'


const EachItem=(props)=> {
  const {eachEdit,deleteBtn} = useContext(GroceryContext)
    const {eachitem,id} =props.items
    // console.log(props)
  return (
    <div className="eachItems">
      <h3 className='eachItem'>{eachitem}</h3>
      <div className="btnArea">
         <button className='edit'onClick={()=>eachEdit(eachitem,id)}>Edit</button>
         <button className='delete' onClick={()=>deleteBtn(eachitem,id)}>Delete</button>
      </div>
      </div>
   
  )
}

export default EachItem