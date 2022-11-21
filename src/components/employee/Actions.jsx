import React from "react"
import { DeleteIcon, EditIcon } from "../../static/icons"
import { Button } from "./reusable"

const Actions = ({
  item,
  setModalEditAndAddState,
  setModalDeleteState,
  setFirstName,
  setLastName,
  setEmployeeId,
  setmodalAddAndEditType,
}) => {
  const handleEdit = () => {
    setModalEditAndAddState(true)
    setFirstName(item.firstName)
    setLastName(item.lastName)
    setEmployeeId(item.id)
    setmodalAddAndEditType("edit")
  }
  const handleDelete = () => {
    setModalDeleteState(true)
    setEmployeeId(item.id)
  }

  return (
    <div className="center">
      <Button
        color={"#0f816e"}
        onClick={handleEdit}
        text={
          <div className="center">
            <EditIcon />
            Edit
          </div>
        }
      />
      <Button
        color={"#ff006a"}
        onClick={handleDelete}
        text={
          <>
            <DeleteIcon />
            Delete
          </>
        }
      />
    </div>
  )
}

export default Actions
