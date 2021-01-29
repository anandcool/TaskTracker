import Task from "./Task"


const Tasks = ({tasks,OnDelete}) => {
    console.log("ti",OnDelete)
    return (
        <>
        {
        tasks.map((task) =>{
            return <Task task={task} key={task.id} OnDelete={OnDelete}/>
            })}
        </>
    )
}

export default Tasks
