import { Route, Routes } from "react-router-dom"
import OtpLogin from "./component/OtpLogin"
import Profile from "./component/Profile"

function App() {

  return (
    <Routes>
      <Route path="/" element={<OtpLogin/>}/>
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  )
}

export default App
