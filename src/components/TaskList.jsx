import TaskItem from "./TaskItem";

function TaskList({ list, lists, setLists }) {


    function handleClickContainer() {

        const newLists = lists.map((el) => {
            return { ...el, active: list.id === el.id };
        })
        setLists(newLists)
    }

    function handleClickCase() {
        list.tasks.map((el) => {
            return { }
        })
        console.log(list)
    }

    return (
        <div onClick={handleClickContainer} className={`task__container ${list.active ? 'first-offset' : ''}`}>
            <p className="task__text">{list.value}</p>
            <div className={`task__case ${list.active ? 'list-choosen' : ''}`}>
                <button onClick={(e) => { handleClickCase(); }} className="task__btn">+</button>
                <p className="task__text">List item</p>
            </div>
            {list.tasks.map((e) => {
                return (<TaskItem key={e.id} className='open-task' />)
            })}
        </div>
    )
}

export default TaskList;