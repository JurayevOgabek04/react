import { Routes, Route } from "react-router-dom";
import { Popular } from "../pages";
import { Home } from "../pages";
import { Films } from "../pages";
import { Toprated } from "../pages";
import { Upcoming } from "../pages";
import { Tvshow } from "../pages";
import { SinglePage } from "../pages";


export const Provite = () => {
    return (
        <>
            <Films />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/toprated" element={<Toprated />} />
                <Route path="/upcoming" element={<Upcoming />} />
                <Route path="/tvshow" element={<Tvshow />} />
                <Route path="/singepage/:id" element={<SinglePage />} />
            </Routes>
        </>
    )
}