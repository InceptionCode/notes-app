import React, {Component} from 'react';

function Filter(props){
  // TODO: change filtering to simple input in a form
  return(
    <div className= "Filters">
      <form onSubmit = {props.filterNotes}>
        <input type ="text" placeholder="Search Tags. . ." onChange= {props.inputSearch} value={props.search} />
        <button type="submit"> Search Tag </button>
      </form>
    </div>
    
  );
}

export default Filter