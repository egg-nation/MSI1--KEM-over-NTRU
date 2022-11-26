import React from "react";

import {UserServiceClient} from "../apidocs/V1ServiceClientPb"; // @ts-ignore

export const UserServiceApiClient = new UserServiceClient('http://localhost:5000');