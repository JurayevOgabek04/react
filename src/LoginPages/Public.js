import { Routes, Route, Link } from "react-router-dom";
import { Login } from "../pages";


export const Public = () => {
    return (
        <Routes>
            <Route path="/" element={<>Home in Public <Link to="/login">Login page</Link></>} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}