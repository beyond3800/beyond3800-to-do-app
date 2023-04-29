import {createContext,useState,useEffect} from "react";

export const GroceryContext=createContext(null)

export const GroceryProvider=(props)=>{
    const [items,setItems]=useState([])
    const [eachItem,setEachItem]=useState('')
    const [id,setId]=useState(0)
    const [alert,setAlert]=useState()
    const [editBtn,setEditBtn]=useState(false)



    const handleItems=(e)=>{
        const {value} = e.target
        setEachItem(value)
    }
    const displayAlert=(alert)=>{
      
            setAlert(alert)
        
        
        setTimeout(()=>{
        setAlert('')
        },1000)
    }
    function getLocalStorage() {
         return  localStorage.getItem("list")
          ? JSON.parse(localStorage.getItem("list"))
          : [];
          
      }
      useEffect(()=>{
        setItems(getLocalStorage())
      },[])
    const addItem=(eachitem)=>{
        const time = new Date
         const id=time.getTime()
        const grocery ={eachitem,id}
         const items=getLocalStorage()
         items.push(grocery)
        localStorage.setItem('list',JSON.stringify(items))
        setItems(items)
    }
    const saveItems=(e)=>{  
        e.preventDefault();
        if(eachItem==''){
        displayAlert('empty input')
           return
        }else{
            addItem(eachItem)
        }
        
      displayAlert('item added')
        setEachItem('')
    }
    const deleteItems=()=>{
        localStorage.clear()
        setItems([])
        displayAlert('all items cleared')
    }
    const eachEdit =(eachItem,id)=>{

      setEditBtn(true)
      setEachItem(eachItem)
      setId(id)
    }
    const edit =()=>{
        setEditBtn(false)
        console.log(eachItem)
        
        const newArray=[]
        setItems(prev =>{
            for( let i =0; i<prev.length; i++){
                const currentArray = prev[i]
                if(currentArray.id === id){
                    
                  const updatedArray = {
                    ...currentArray,
                    eachitem:eachItem
                  }
                  newArray.push(updatedArray)
                }else{
                    newArray.push(currentArray)
                } 
            }
        localStorage.setItem('list',JSON.stringify(newArray))
            return newArray
        })
        setEachItem('')
        displayAlert('item edited')
    }
    const deleteBtn = (eachitem,id)=>{
        let newArray=[]
      newArray = items.filter(each=>{
        if(each.id!==id){
           return each
        }
       })
       setItems(newArray)
       localStorage.setItem('list',JSON.stringify(newArray))
       displayAlert('item deleted')
    }
    
    const context ={
      handleItems,
      saveItems,
      alert,
      items,
      getLocalStorage,
      deleteItems,
      setItems,
      eachEdit,
      editBtn,
      edit,
      eachItem,
      deleteBtn,
    }
    return(
        <GroceryContext.Provider value={context}>
            {props.children}
        </GroceryContext.Provider>
    )
}