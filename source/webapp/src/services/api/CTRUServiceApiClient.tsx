import React from "react";

import {CTRUServiceClient} from "../../apidocs/v1_grpc_web_pb";

export const CTRUServiceApiClient = new CTRUServiceClient('http://localhost:5000');