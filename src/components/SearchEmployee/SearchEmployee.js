import React from "react";

function SearchEmployee(props) {
  
  return (
    <>
    <form>
      <div className="form-group">
        <label htmlFor="search">Search for an Employee or Occupation</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="input"
          className="form-control"
          placeholder=""
         
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Reset Search
        </button>
      </div>
    </form>
    </>
  );
}

export default SearchEmployee;
