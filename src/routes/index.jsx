import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logado from "../pages/logado";
import Login from "../pages/login";
import { PrivateRoute } from "./privateRoute"

export function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/logado" element={
                    <PrivateRoute>
                        <Logado />
                    </PrivateRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}