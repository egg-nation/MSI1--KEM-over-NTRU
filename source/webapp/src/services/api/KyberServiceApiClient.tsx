import React from "react";

import {KYBERServiceClient} from "../../apidocs/v1_grpc_web_pb";

export const KyberServiceClient = new KYBERServiceClient('http://localhost:5000');