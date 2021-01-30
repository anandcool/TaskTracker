import Task from "./Task"


const Tasks = ({tasks,OnDelete,onToggle}) => {
    // console.log("ti",OnDelete)
    return (
        <>
        {
        tasks.map((task) =>{
            return <Task task={task} key={task.id} OnDelete={OnDelete} onToggle={onToggle} />
            })}
        </>
    )
}

export default Tasks
