import { Outlet } from "react-router-dom";
import { IRoute } from "../interfaces";
import { Header } from "./Header";

const links: IRoute[] = [
    {id: 1, title: "Start", path: "/"},
    {id: 2, title: "Kanal", path: "channel:id"}
] 



export const RootLayout = () => {

    return (
        <>
            <Header links={links} />
            <Outlet />
        </>
    );
}