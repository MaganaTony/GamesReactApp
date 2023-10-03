import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/layouts/MainLayout";
import Gamelist from "../../pages/gamelist/Gamelist";
import GameEdit from "../../pages/gamelist/GameEdit";



export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Gamelist/>} />
                </Route>
                <Route path="/gamelist/edit" element={<MainLayout/>}>
                    <Route path=":id" element={<GameEdit/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}