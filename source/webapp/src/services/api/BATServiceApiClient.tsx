import React from "react";

import {BATServiceClient} from "../../apidocs/v1_grpc_web_pb";

export const BATServiceApiClient = new BATServiceClient('http://localhost:5000');