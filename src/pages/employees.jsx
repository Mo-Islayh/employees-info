import React, { useState } from "react"
import Actions from "../components/employee/Actions"
import { Button } from "../components/employee/reusable"
import ModalAddAndEdit from "../components/employee/ModalAddAndEdit"
import ModalDelete from "../components/employee/ModalDelete"
import { fakeEmployees } from "../data/fakeEmployees"
import { AddPersonIcon, SearchIcon } from "../static/icons"

const Employees = () => {
  const [modalEditAndAddState, setModalEditAndAddState] = useState(false)
  const [modalDeleteState, setModalDeleteState] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [employeeId, setEmployeeId] = useState("")
  const [searchValue, setsearchValue] = useState("")

  // These double Arrays for The Search sake

  const [employeesArray, setEmployeesArray] = useState(fakeEmployees)
  const [hypeArray, setHypeArray] = useState(employeesArray)

  // ===

  const [showMainArray, setShowMainArray] = useState(true)
  const [modalAddAndEditType, setmodalAddAndEditType] = useState("")

  const onSearch = (e) => {
    setShowMainArray(false)
    const text = e.target.value
    setsearchValue(text)

    const newArray = employeesArray.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(text.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(text.toLowerCase())
    )

    setHypeArray(newArray)
  }

  const handleAddEmployee = () => {
    setmodalAddAndEditType("add")
    setModalEditAndAddState(true)
  }

  return (
    <div className="employees-container">
      <div className="employees-title">Employees Table</div>
      <div className="search-container">
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input
          id="search"
          type="text"
          className="search-input"
          placeholder="Search for an employee"
          value={searchValue}
          onChange={onSearch}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {showMainArray
            ? employeesArray.map((item, _id) => (
                <tr key={_id}>
                  <td className="table-text">{item.firstName}</td>
                  <td className="table-text">{item.lastName}</td>
                  <td>
                    {/* more states just to keep trak the items , more details on the next hint down below */}
                    <Actions
                      id={_id}
                      item={item}
                      setModalEditAndAddState={setModalEditAndAddState}
                      setModalDeleteState={setModalDeleteState}
                      setState={setModalEditAndAddState}
                      setFirstName={setFirstName}
                      setLastName={setLastName}
                      setEmployeeId={setEmployeeId}
                      setmodalAddAndEditType={setmodalAddAndEditType}
                    />
                  </td>
                </tr>
              ))
            : hypeArray.map((item, _id) => (
                <tr key={_id}>
                  <td className="table-text">{item.firstName}</td>
                  <td className="table-text">{item.lastName}</td>
                  <td>
                    <Actions
                      id={_id}
                      item={item}
                      setModalEditAndAddState={setModalEditAndAddState}
                      setModalDeleteState={setModalDeleteState}
                      setState={setModalEditAndAddState}
                      setFirstName={setFirstName}
                      setLastName={setLastName}
                      setEmployeeId={setEmployeeId}
                      setmodalAddAndEditType={setmodalAddAndEditType}
                    />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      {/* I've placed the modals here instead of inside the arrays for the sake of performance, its easy to make and let code to write but performance would be the worst ever , cuz imagen every chaild of the array has 3 modals and we have two arraies, its a lot :) , but with this its just a three of them , but the values are deffirent . */}

      {modalEditAndAddState && (
        <ModalAddAndEdit
          setState={setModalEditAndAddState}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          setEmployeesArray={setEmployeesArray}
          setHypeArray={setHypeArray}
          id={employeeId}
          type={modalAddAndEditType}
        />
      )}
      {modalDeleteState && (
        <ModalDelete
          setState={setModalDeleteState}
          setEmployeesArray={setEmployeesArray}
          setHypeArray={setHypeArray}
          id={employeeId}
        />
      )}

      <div className="add-employee">
        <Button
          color="rgb(103, 9, 226)"
          onClick={handleAddEmployee}
          text={
            <>
              <AddPersonIcon />
              Add Employee
            </>
          }
        />
      </div>
    </div>
  )
}

export default Employees
