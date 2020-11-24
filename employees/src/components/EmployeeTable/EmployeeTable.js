import React from "react";
import "./index.css"

// import App from "../../App"
// import employees from "../../employees.json"



function EmployeeTable(props) {
  return (
    <>
    
   
      <tbody>
        <tr>
        <th ><img src={props.image} alt="random employee"/></th>
        <td>{props.id}</td>
        <td>{props.lastName}</td>
        <td>{props.firstName}</td>
        <td>{props.occupation}</td>
        <td>
          <span type="button" className="remove" onClick={ function(){ props.deleteEmployee(props.id) }}>
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </span>
        </td>
        </tr>
      </tbody>
      {/* have to pass an anonymous function to contain a function so the function defined doesn't run until it is supposed to - basically hiding the filterArray until the user clicks on the remove button */}
      
    
    </>
  );
}

export default EmployeeTable;
