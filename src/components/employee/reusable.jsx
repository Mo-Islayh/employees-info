export const Button = ({ text, onClick, color, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      className="employee-button"
      style={{
        backgroundColor: color,
      }}
      type={type}
    >
      {text}
    </button>
  )
}
export const ModalField = ({ text, id, value, setValue }) => {
  return (
    <div className="modal-input-container">
      <label htmlFor={id} className="modal-input-label">
        {text}
      </label>
      <input
        className="modal-input-field"
        id={id}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        required
      />
    </div>
  )
}
