import React from "react";

import {EntryServiceClient} from "../../apidocs/v1_grpc_web_pb";

export const EntryServiceApiClient = new EntryServiceClient('http://localhost:5000');