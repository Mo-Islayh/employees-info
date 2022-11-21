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
} from "../components/Sign"
import image from "../static/images/background.jpg"

const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
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

    if (!e || !p) {
      setMsg({
        state: true,
        type: "error",
        message: "You must fill all fields",
      })
      setLoading(false)
      return
    }

    if (email !== "test@desaisiv.com" || password !== "P@ssw0rd") {
      setMsg({
        state: true,
        type: "error",
        message: "Invalid Credentials",
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
        <GoHome />
        <div className="form-container">
          <Title text="Welcome." />
          <Form handleSubmit={handleSubmit}>
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
            <Submit text={"Login"} />
            <Message msg={msg} />
          </Form>
          <FooterText
            text1="Don't have an account?"
            text2="Register here."
            url="/signup"
          />
        </div>
      </div>

      <BannerImage url={image} />
    </div>
  )
}

export default LoginPage
