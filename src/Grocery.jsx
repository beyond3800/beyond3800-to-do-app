import {React,useContext} from 'react'
import './grocery.css'
import { GroceryContext } from './context/grocerycont'
import EachItem from './EachItem'


function Grocery() {
  const{
    saveItems,
    handleItems,
    alert,
    eachItem,
    deleteItems,
    items,
    editBtn,
    edit,
    editRef
  }
  =useContext(GroceryContext)
  return (
    <div className='wrap'>
      <div className="groceryBody">
        
          <div className={alert&&'alert'}>{alert}</div>
        
       <header><h1>Grocery Bug</h1></header> 
        
          <input type="text" id='grocery'ref={editRef} name="" value={eachItem} placeholder='e.g. egg' onChange={(e)=>handleItems(e)} />
          {
            editBtn ? <button className='Submit' onClick={edit}>Edit</button> :
            <button className='Submit' onClick={saveItems}>Submit</button>
          }
          
        <div className="groceryList">
           {
            items.map(each=><EachItem key={each.id} items={each}/>)
           }
        </div>
        {
        items.length>0&&  <div className="clearItems">
             <button onClick={deleteItems} id='clearItems'>Clear items </button>
        </div>
        }
      
      </div>
    </div>
  )
}

export default Grocery
