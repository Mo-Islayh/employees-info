import React from "react"
import { Submit, Title } from "../components/Sign"

const HomePage = () => {
  return (
    <div className="sign-container">
      <div className="wrapper">
        <div className="form-container">
          <Title text="Home Page" />
          <Submit text={"Login"} url={"/login"} />
          <Submit text={"SignUp"} url={"/signup"} />
        </div>
      </div>
    </div>
  )
}

export default HomePage
