import { Route, Routes } from "react-router-dom"
import Auth from "./pages/auth/auth"


const RouterPage = ()=>{


    return (
        <Routes>
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default RouterPage