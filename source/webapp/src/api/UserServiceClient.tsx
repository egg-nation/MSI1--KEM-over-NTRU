import React from "react";

import * as grpcWeb from 'grpc-web';
import {LoginCredentials, User} from "../apidocs/v1_pb"
import {UserServiceClient} from "../apidocs/v1_grpc_web_pb"; // @ts-ignore

export const UserServiceApiClient = new UserServiceClient('http://localhost:5000');

const creds = new LoginCredentials();
creds.setUsername("test");
creds.setPassword("test");

UserServiceApiClient.login(creds, {},
		(err: grpcWeb.RpcError, response: User) =>{
			console.log(err.message);
			console.log(response);
		}
	)