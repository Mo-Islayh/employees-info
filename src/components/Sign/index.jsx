import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { nationalities } from "../../data/nationalities"
import { ArrowBackIcon } from "../../static/icons"

export const GoHome = () => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        navigate("/")
      }}
      className="goHome"
    >
      <ArrowBackIcon />
      Home
    </div>
  )
}

export const Title = ({ text }) => {
  return <p className="title">{text}</p>
}
export const Form = ({ children, handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
export const Field = ({
  value,
  setValue,
  name,
  id,
  type,
  placeholder,
  errorMessage,
}) => {
  const [error, setError] = useState("")

  const validate = () => {
    if (!value) {
      setError(errorMessage)
      return
    }
    setError("")
  }

  return (
    <div className="field-container">
      <label htmlFor={id}>{name}</label>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
        type={type}
        id={id}
        placeholder={placeholder}
        autoComplete={"true"}
        required={type == "password" || type == "email"}
        onBlur={validate}
        style={{
          borderColor: error ? "red" : "",
        }}
      />
      {error && <div className="field-error">{error}</div>}
    </div>
  )
}

export const Submit = ({ text, url }) => {
  const router = useNavigate()
  const goTo = () => {
    url && router(url)
  }

  return (
    <button type="submit" className="sign-button" onClick={goTo}>
      {text}
    </button>
  )
}

export const BannerImage = ({ url }) => {
  return (
    <div className="image-container">
      <img className="image" src={url} alt="Background" />
    </div>
  )
}

export const Message = ({ msg }) => {
  const { state, type, message } = msg
  return (
    state && (
      <div className="message-container">
        <p
          style={{
            color: type === "success" ? "green" : "red",
          }}
          className="message-text"
        >{`* ${message}`}</p>
      </div>
    )
  )
}
export const FooterText = ({ text1, text2, url }) => {
  const navigate = useNavigate()

  return (
    <div className="footer-container">
      <p>{text1}</p>
      <p
        onClick={() => {
          navigate(url)
        }}
        className="footer-text"
      >
        {text2}
      </p>
    </div>
  )
}

export const Nationality = () => {
  const errorMessage = "This field is Required, Provide a Nationality."
  const [error, setError] = useState("")

  const [value, setValue] = useState("")

  const validate = () => {
    if (!value) {
      setError(errorMessage)
      return
    }
    setError("")
  }

  return (
    <div className="field-container">
      <label htmlFor="nationality">Nationality</label>
      <select
        name="nationality"
        id="nationality"
        required
        className="select"
        defaultValue=""
        onBlur={validate}
        style={{
          borderColor: error ? "red" : "",
        }}
        onChange={(e) => {
          setValue(e.target.value)
          setError("")
        }}
      >
        <option value="" disabled hidden>
          Please Choose...
        </option>
        {nationalities.map((item, _id) => (
          <option key={_id} value={item}>
            {item}
          </option>
        ))}
      </select>
      {error && <div className="field-error">{error}</div>}
    </div>
  )
}
