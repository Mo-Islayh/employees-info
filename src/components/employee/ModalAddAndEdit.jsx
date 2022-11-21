import React from "react"
import { CloseIcon } from "../../static/icons"
import { Button, ModalField } from "./reusable"

const ModalAddAndEdit = ({
  setState,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  setEmployeesArray,
  setHypeArray,
  id,
  type,
}) => {
  const closeModal = () => {
    setState(false)
    setFirstName("")
    setLastName("")
  }

  const handleEdit = () => {
    setEmployeesArray((prev) => {
      const xArray = prev.map((item) => {
        if (item.id === id) {
          item.firstName = firstName
          item.lastName = lastName
        }
        return item
      })

      return xArray
    })
    setHypeArray((prev) => {
      const xArray = prev.map((item) => {
        if (item.id === id) {
          item.firstName = firstName
          item.lastName = lastName
        }
        return item
      })

      return xArray
    })

    closeModal()
  }
  const handleAdd = () => {
    setEmployeesArray((prev) => {
      const newEmployee = {
        id: new Date().getTime(),
        firstName,
        lastName,
      }

      return [...prev, newEmployee]
    })
    setHypeArray((prev) => {
      const newEmployee = {
        id: new Date().getTime(),
        firstName,
        lastName,
      }

      return [...prev, newEmployee]
    })

    closeModal()
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (type === "edit") {
      handleEdit()
      return
    }

    handleAdd()
  }

  return (
    <div className="modal-container">
      <div className="modal-body">
        <div className="modal-close">
          <Button
            color="rgb(226, 23, 9)"
            onClick={closeModal}
            text={<CloseIcon />}
          />
        </div>

        <form className="modal-content" onSubmit={onSubmit}>
          <ModalField
            text={"First Name"}
            id={"first-name"}
            value={firstName}
            setValue={setFirstName}
          />
          <ModalField
            text={"Last Name"}
            id={"last-name"}
            value={lastName}
            setValue={setLastName}
          />

          <div className="modal-buttons">
            <Button
              color="rgb(218, 137, 117)"
              onClick={closeModal}
              text={"Cancel"}
            />
            <Button
              color="rgb(9, 226, 81)"
              onClick={() => {
                console.log("submit runs")
              }}
              text={"Okay"}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
export default ModalAddAndEdit
