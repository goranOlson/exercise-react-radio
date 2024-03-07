import { NavLink } from "react-router-dom";

export interface ILandingPageProps {
    channel: number;
}

export function LandingPage(): JSX.Element {

    // channel-links
    const id: number = 132;

    return (
        
        <main>
            <h1>LandingPage</h1>

            <p>List of all the channels.</p>
            <div>
                <NavLink to={"channel/132"}>P1</NavLink>
            </div>
        </main>
        
    );
}