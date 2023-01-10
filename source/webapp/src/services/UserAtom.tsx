import React from "react";
import {atomWithStorage} from "jotai/utils";

interface UserInterface {
    username?: string,
    email?: string,
    authToken?: any
}

export const userAtom = atomWithStorage<UserInterface | undefined>("user", undefined);
