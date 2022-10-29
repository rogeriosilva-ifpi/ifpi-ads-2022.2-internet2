import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Players } from "./Players";
import { Teams } from "./Teams";

export function AppRoutes(){
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/players' element={<Players />} />
    </Routes>)
}