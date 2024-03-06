import { Outlet } from "react-router-dom";
import { IRoute } from "../interfaces";
import { Header } from "./Header";

const links: IRoute[] = [
    { id: 1, title: "Start", path: "/"}

] 



export const RootLayout = () => {

    return (
        <>
            <Header links={links} />
            <Outlet />
        </>
    );
}