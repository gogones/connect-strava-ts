import {Link} from "react-router-dom";
import * as React from "react";

export default function LoginPage() {
    const baseUrl = import.meta.env.VITE_STRAVA_BASE_API;
    const clientId = import.meta.env.VITE_CLIENT_ID;
    const redirectUrl = import.meta.env.VITE_REDIRECT_AUTH;

    return (
        <div>
            <Link to={`${baseUrl}/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=read`}>
                Connect With Strava
            </Link>
        </div>
    );
}