import React from "react";

import {UserServiceClient} from "../../apidocs/v1_grpc_web_pb";

export const UserServiceApiClient = new UserServiceClient('http://localhost:5000');