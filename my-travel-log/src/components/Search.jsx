const Search = (props) => {

  return (
    <form onSubmit = {props.onSubmit}>
      
<input
  type="text"
  name="search"
  value={props.value}
  placeholder="Search Activities"
  onChange={props.handleChange}
></input>

<button type="submit" onClick={props.toggleSearch}>Submit</button>

    </form>
   
  )
 
}

export default Search