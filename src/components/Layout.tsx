import {Link, Outlet} from "react-router-dom";
import * as React from "react";
import AuthStatus from "./AuthStatus";

export default function Layout() {
    return (
        <div>
            <AuthStatus />

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/protected">Dashboard/Login</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}