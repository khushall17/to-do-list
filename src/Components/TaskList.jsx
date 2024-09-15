import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { CiSquareCheck } from "react-icons/ci";
import { TodoContext } from './To-do_con/ToDoContext';

 const TaskList = () => {

    const {task, handleRemove, handleComplete, handleAllRemove, handleEdit} = useContext(TodoContext)

    return <>
        <div> 
            <ul> 
                {task.map((taskList)=>(
                     <li className={`flex justify-between border-b-2 px-2 py-1 items-center ${taskList.complete?"line-through":""}`} key={taskList.id}>
                     <div className="flex gap-3">
                         <span className="cursor-pointer">
                             <CiSquareCheck size={25} onClick={()=>handleComplete(taskList.id)}/>
                         </span>
                        <span>{taskList.title}</span>
                     </div>
                     <div className="flex gap-3">
                         <span className="cursor-pointer">
                             <FaEdit size={25} onClick={()=>handleEdit(taskList.id)}/>
                         </span>
                         <span className="cursor-pointer" onClick={()=>handleRemove(taskList.id)}>
                             <MdDelete size={25} />
                         </span>
                     </div>
                 </li>
                ))}               
            </ul>
            {
                task.length>=2 &&  <button className="bg-[red] text-white px-2 py-1 rounded-md my-5 hover:bg-red-700" onClick={handleAllRemove} >
                Remove all
            </button>
            }
           
        </div>
    </>
}
export default TaskList