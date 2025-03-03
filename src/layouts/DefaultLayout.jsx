import { Outlet } from "react-router-dom"

import Header from "../components/Header"

const DefaultLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <footer></footer>
        </>
    )
}

export default DefaultLayout