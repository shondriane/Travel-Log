const Tasks = (props) => {

    return (
      <ul>
        {props.tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={()=>props.removeTask(index)}>X</button>
          </li>
        ))}
      </ul>
    )
  }
  
  export default Tasks