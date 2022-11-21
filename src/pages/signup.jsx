import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  BannerImage,
  Message,
  Field,
  FooterText,
  Form,
  GoHome,
  Submit,
  Title,
  Nationality,
} from "../components/Sign"
import image from "../static/images/background.jpg"

const SignUpPage = () => {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [msg, setMsg] = useState({
    state: false,
    type: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    setLoading(true)
    setMsg({
      state: false,
      type: "",
      message: "",
    })

    const e = email.trim()
    const p = password.trim()
    const pc = confirmPassword.trim()

    if (!e || !p || !pc) {
      setMsg({
        state: true,
        type: "error",
        message: "You must fill all required fields",
      })
      setLoading(false)
      return
    }

    if (confirmPassword !== password) {
      setMsg({
        state: true,
        type: "error",
        message: "Passwords fields don't match",
      })
      setLoading(false)
      return
    }

    setMsg({
      state: true,
      type: "success",
      message: "Correct credentials, you will be redirected within 3s",
    })

    setTimeout(() => {
      navigate("/employees")
      setLoading(false)
    }, 3000)
  }

  return (
    <div className="sign-container">
      {loading && <div className="loading">Loading...</div>}
      <div className="wrapper">
        {/* <GoHome /> */}
        <div className="form-container">
          <Title text="Join Us." />
          <Form handleSubmit={handleSubmit}>
            <Field
              name={"First Name"}
              id={"first-name"}
              type={"text"}
              placeholder={"Sami (optinal)"}
              value={firstName}
              setValue={setFirstName}
            />
            <Field
              name={"Last Name"}
              id={"last-name"}
              type={"text"}
              placeholder={"Atta (optinal)"}
              value={lastName}
              setValue={setLastName}
            />

            <Field
              name={"Email"}
              id={"email"}
              type={"email"}
              placeholder={"your@email.com"}
              value={email}
              setValue={setEmail}
              errorMessage={"This field is Required, Provide an Email."}
            />
            <Field
              name={"Password"}
              id={"password"}
              type={"password"}
              placeholder={"Password"}
              value={password}
              setValue={setPassword}
              errorMessage={"This field is Required, Provide a Password."}
            />
            <Field
              name={"Confirm Password"}
              id={"confirm-password"}
              type={"password"}
              placeholder={"Password"}
              value={confirmPassword}
              setValue={setConfirmPassword}
              errorMessage={"This field is Required, Provide a Password."}
            />
            <Nationality />
            <Submit text={"SignUp"} />
            <Message msg={msg} />
          </Form>
          <FooterText
            text1="Already have an account? "
            text2="Log in here."
            url="/login"
          />
        </div>
      </div>
      <BannerImage url={image} />
    </div>
  )
}

export default SignUpPage
