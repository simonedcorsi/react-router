import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <>
            <header>header</header>
            <Outlet/>
            <footer>footer</footer>
        </>
    )
}

export default DefaultLayout