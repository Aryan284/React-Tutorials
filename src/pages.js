import React from "react";
import {Link, useLocation, Outlet} from "react-router-dom";

export function Home(){

    return (
        <div>
            <h1>Hello</h1>
            <nav>
                <Link to = "about"> About </Link>
                <Link to = "home"> Home </Link>
                <Link to = "contact"> Contact </Link>
            </nav>
        </div>
    );
}


export function About(){
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    );
}

export function Contact(){
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
}
export function Services(){
    return (
        <div>
            <h1>Services</h1>
        </div>
    );
}
export function History(){
    return (
        <div>
            <h1>History</h1>
        </div>
    );
}
export function Whoop(){
    let loc = useLocation();
    return(
        <div>
            <h1> You are in no man's land at {loc.pathname}</h1>
        </div>
    );
}