import React from "react";
import { Link, Outlet } from "react-router-dom";


interface Props{

}

interface States{

}

export default class Wrapper extends React.Component<Props, States>{
    constructor(props: Props)
    {
        super(props);
        this.state = {

        };
    }

    redirectTo(name: string): void
    {
        this.setState({

        })
    }

    render(): React.ReactNode {
        return (
            <div>
                <nav className="nav-bar">
                    <Link to="menu" className="nav-bar-link" >Menu</Link>
                    <Link to="records" className="nav-bar-link" >Hall of Fame</Link>
                    <Link to="author" className="nav-bar-link" >About author</Link>
                </nav>
                <main className="container">
                    <Outlet />
                </main>
                <footer className="footer-bar">Created by Ernest Mężyk</footer>
            </div>
        )
    }
}