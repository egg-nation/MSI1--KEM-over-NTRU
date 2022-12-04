import React from "react";
import {atomWithStorage} from "jotai/utils";

import {AuthToken} from "../apidocs/v1_pb";

interface UserInterface {
    username?: string,
    email?: string,
    authToken?: AuthToken
}

export const userAtom = atomWithStorage<UserInterface | undefined>("user", undefined);
