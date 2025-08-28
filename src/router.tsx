import { Route, Routes } from "react-router-dom"
import Auth from "./pages/auth/auth"
import HomePage from "./pages/trinh-home/home"


const RouterPage = ()=>{


    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default RouterPage