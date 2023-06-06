import { useState, useContext } from "react";
import { Context } from "./Context";

function TaskItem({ className, getValue }) {

    const [taskClassName, setTaskClassName] = useState('')
    const [inputValue, setInputValue] = useState('')
    const [context, setContext] = useContext(Context)
    const [task, setTask] = useState('')

    function handleChange(e) {
       getValue(e.target.value)
    }

    function handleTaskSubmit() {
        setTask([...task, {
            id: crypto.randomUUID(),
            value: inputValue,
            done: false
        }])
        setContext(task)
        console.log(task)
    }


    //     // setCount(task.length)
    // }
    return (
        <form onSubmit={(e) => { e.preventDefault(); handleTaskSubmit(); }} className={`task__form ${taskClassName}`}>
            <input onChange={handleChange} className={`task__input ${className}`} type="text" />
            <button className="task__input_btn" onClick={(e) => { handleTaskSubmit() }}>+</button>
        </form>
    )
}

export default TaskItem;