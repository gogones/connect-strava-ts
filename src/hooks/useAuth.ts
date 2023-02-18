import * as React from "react";
import {AuthContext} from "../context/Auth";

export function useAuth() {
    return React.useContext(AuthContext);
}