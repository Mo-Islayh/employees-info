import React from "react"
import { CloseIcon } from "../../static/icons"
import { Button } from "./reusable"

const ModalDelete = ({ setState, setEmployeesArray, setHypeArray, id }) => {
  const closeModal = () => {
    setState(false)
  }

  const handleDelete = () => {
    setEmployeesArray((prev) => {
      return prev.filter((item) => item.id !== id)
    })
    setHypeArray((prev) => {
      return prev.filter((item) => item.id !== id)
    })

    setState(false)
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

        <div className="modal-text">
          Are you sure that you want to delete this item ?
        </div>

        <div className="modal-buttons">
          <Button
            color="rgb(218, 137, 117)"
            onClick={closeModal}
            text={"Cancel"}
          />
          <Button
            color="rgb(9, 226, 81)"
            onClick={handleDelete}
            text={"okay"}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalDelete
