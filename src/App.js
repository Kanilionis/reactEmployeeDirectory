import React from 'react';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import employees from './employees.json';
import SearchEmployee from "./components/SearchEmployee/SearchEmployee";
import "./style.css"


class App extends React.Component {
  
  state = {
    employees: employees,
    // filtered: employees
  };

  componentDidMount(){
    console.log(employees)
    this.setState({employees: employees})

  }



  handleInputChange = event => {
    event.preventDefault()
    var value = event.target.value;
    console.log(value)
    var filter = this.state.employees.filter( employee => {
      var checkValues = Object.values(employee)
      .join("").toLowerCase()
      console.log(checkValues)

      return checkValues.indexOf(value.toLowerCase()) !== -1
    })
        this.setState({employees: filter})
    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    
    console.log(event)
  }




  
// delete employee
  deleteEmployee = (id) => {
    // modify the array in state and filter out the one which matched whatever id is passed in
    console.log(id)
    const filteredArray = this.state.employees.filter( employee => employee.id !== id )
    console.log(filteredArray)
    this.setState({employees: filteredArray})
  };

 
 // sort table by column
  sortLastName = () => {
    const newEmployeesArray = this.state.employees.slice(0)
    const sortedArray = newEmployeesArray.sort((a, b) => a.lastName.localeCompare(b.lastName))
    this.setState({...this.state, employees: sortedArray});
    console.log(sortedArray)
};
  sortFirstName = () => {
    const newEmployeesArray = this.state.employees.slice(0)
    const sortedArray = newEmployeesArray.sort((a, b) => a.firstName.localeCompare(b.firstName))
    this.setState({...this.state, employees: sortedArray});
  };
  sortOccupation = () => {
    const newEmployeesArray = this.state.employees.slice(0)
    const sortedArray = newEmployeesArray.sort((a, b) => a.occupation.localeCompare(b.occupation))
    this.setState({...this.state, employees: sortedArray});
  };
  sortId = () => {
    const newEmployeesArray = this.state.employees.slice(0)
    const sortedArray = newEmployeesArray.sort((a, b) => a.id - b.id)
    this.setState({...this.state, employees: sortedArray});
  };
  
  render(){

  return (
    
    <>
      <h1>Employee List</h1>
      {/* map over the array in the state, render FriendCard each time */}
        <>
      <SearchEmployee handleInputChange={this.handleInputChange}/>
        </>
      <table className="table table-striped">
        <thead>
          <tr>
        <th scope="col-1"></th>
        <th scope="col-1" className="sort" onClick={this.sortId}>id</th>
        <th scope="col-2" className="sort" onClick={this.sortLastName}>Last Name</th>
        <th scope="col-2" className="sort" onClick={this.sortFirstName}>First Name</th>
        <th scope="col-2" className="sort" onClick={this.sortOccupation}>Occupation</th>
        <th scope="col-1"></th>
        </tr>
        </thead>
      {this.state.employees.map(employee => (
        <>
        <EmployeeTable key={employee.id} {...employee} deleteEmployee={this.deleteEmployee}/>
       
        </>
      ))}
    </table>
    </>
  )
  }};


export default App;

