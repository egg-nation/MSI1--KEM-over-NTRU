import React from "react";

import {KYBERServiceClient} from "../../apidocs/v1_grpc_web_pb";

export const KyberServiceApiClient = new KYBERServiceClient('http://localhost:5000');