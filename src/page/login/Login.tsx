import {Link} from "react-router-dom";
import * as React from "react";

export default function LoginPage() {

    return (
        <div>
            <Link to={`${import.meta.env.VITE_STRAVA_BASE_API}/oauth/authorize?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:5174&approval_prompt=force&scope=read`}>
                Connect With Strava
            </Link>
        </div>
    );
}