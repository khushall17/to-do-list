import { createContext, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext()

// const useToDoContext = ()=>useToDoContext(TodoContext)


const getLocalItem = ()=>{
    
        const storeItem = localStorage.getItem("list")
        return storeItem? JSON.parse(localStorage.getItem("list")):[]
    
}
const TodoProvider = ({children})=>{
    const [activity, setActivity] = useState("");
    const [task, setTask] = useState(getLocalItem());
    const [update, setUpdate] = useState(true)
    const [edit, setEdit] = useState(null)

    useEffect(()=>{
        localStorage.setItem("list", JSON.stringify(task))
    },[task])

    const handleUpdate = () => { 
        if(activity===""){
            alert("Please write a Task")
        }
        else if(!update){
            setTask(task.map((newElem)=>{
                if(newElem.id=== edit){
                    return{...newElem, title:activity}
                }
                return newElem; 
            }))
            setUpdate(true)
            setActivity("")
            setEdit(null)
        } else {

        const allActivity = {id:uuidv4(), title:activity, complete:false}
        setTask([...task, allActivity]);
        setActivity("");
        }
    };


    const handleRemove = (id)=>{
        const isConfirm = window.confirm("You want to remove it")
        if(isConfirm){
            const filterItem = task.filter((item)=> id != item.id);
                setTask(filterItem)
        }    
     }

     const handleEdit =(id)=>{
        const findItem = task.find((elem)=>{
            return id === elem.id;
        });
        setActivity(findItem.title);
        setUpdate(false); 
        setEdit(id)
     }

     const handleAllRemove = ()=>{
        setTask([])
     }

     const handleComplete = (id)=>{
        setTask(task.map((compItem)=>{
            if(compItem.id === id){
                return{...compItem, complete: !compItem.complete}
            }
            return compItem;
        }))
     }

    const allvalue = {activity, setActivity, task, setTask, update, setUpdate, edit, setEdit, handleUpdate,
        handleRemove, handleComplete, handleAllRemove, handleEdit
    }


    return(
        <TodoContext.Provider value={allvalue}>
        {children}
        </TodoContext.Provider>
    )
}



export {TodoContext, TodoProvider}