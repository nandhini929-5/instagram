import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProfilePage from "./pages/ProfilePage"

import BottomNav from "./components/BottomNav"

function App() {

  return (

    <BrowserRouter>

      <div className="app">

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<ProfilePage />} />

        </Routes>

        <BottomNav />

      </div>

    </BrowserRouter>
  )
}

export default App