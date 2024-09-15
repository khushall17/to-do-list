import React, { useContext, useState } from "react";
import TaskList from "./TaskList";
import { TodoContext } from "./To-do_con/ToDoContext";
import anime1 from "../assets/anime1.jpg"

const ToDoList = () => {
   const {activity, setActivity, update, handleUpdate}= useContext(TodoContext)

    return <>
        <div> 
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="w-[80%] mx-auto flex-wrap md:flex-wrap lg:flex">
                         <div class="lg:w-1/2">
                             <img src ={anime1}  
                         alt="eco"
                         class="w-auto h-64  lg:h-[16rem] md:h-[22rem] xs:h-[12rem] xss:h-[11rem] xsss:h-[9rem] object-cover object-center rounded"
                         /> 
 
                        </div>
                        <div class="lg:w-[40%] bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 lg:mt-0 md:mt-50px">
                            <h2 class="text-gray-900 font-bold mb-5 text-center text-5xl">
                                Todo
                            </h2>
                            <div class="mb-4">
                                <input
                                    type="text"
                                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
                            focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors
                            duration-200 ease-in-out"
                                    onChange={(e) => setActivity(e.target.value)}
                                    value={activity}
                                />
                            </div>

                            { update? <button class="text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600
                             rounded text-lg"
                             onClick={handleUpdate}>
                                Add
                            </button>:<button class="text-white bg-indigo-500 border-0 py-2 mb-6 px-8 focus:outline-none hover:bg-indigo-600
                             rounded text-lg"
                             onClick={handleUpdate}>
                                Update
                            </button>
                            }

                            <TaskList/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>
}

export default ToDoList;