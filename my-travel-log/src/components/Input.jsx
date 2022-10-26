const Input = (props) => {
  
    return (
      <div>
        <label>Add Tasks: </label>
        <textarea type="text" name="task" onChange={props.handleChange} value={props.inputValue}/>
        <button className="add-button" onClick={props.addTask}>Add</button>
      </div>
    )
  }
  
  export default Input