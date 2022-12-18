import * as grpcWeb from 'grpc-web';

import * as v1_pb from './v1_pb';

/* eslint-disable */
// @ts-nocheck

export class UserServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: v1_pb.LoginCredentials,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.User) => void
  ): grpcWeb.ClientReadableStream<v1_pb.User>;

  register(
    request: v1_pb.RegisterCredentials,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.User) => void
  ): grpcWeb.ClientReadableStream<v1_pb.User>;

  delete(
    request: v1_pb.AuthToken,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.User) => void
  ): grpcWeb.ClientReadableStream<v1_pb.User>;

}

export class EntryServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getById(
    request: v1_pb.EntryID,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.Entry) => void
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

  getEntryHistory(
    request: v1_pb.AuthToken,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

  deleteEntry(
    request: v1_pb.EntryID,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.EntryID) => void
  ): grpcWeb.ClientReadableStream<v1_pb.EntryID>;

}

export class KYBERServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  keygen(
    request: v1_pb.KYBERKeygenParameters,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.KYBERKeygenResult) => void
  ): grpcWeb.ClientReadableStream<v1_pb.KYBERKeygenResult>;

  getKeys(
    request: v1_pb.AuthToken,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.KYBERKeys>;

  addKeys(
    request: v1_pb.KYBERKeyImport,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.KYBERKeys) => void
  ): grpcWeb.ClientReadableStream<v1_pb.KYBERKeys>;

  runEncaps(
    request: v1_pb.KYBERExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

  runDecaps(
    request: v1_pb.KYBERExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

}

export class CTRUServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  keygen(
    request: v1_pb.CTRUKeygenParameters,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.CTRUKeygenResult) => void
  ): grpcWeb.ClientReadableStream<v1_pb.CTRUKeygenResult>;

  getKeys(
    request: v1_pb.AuthToken,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.CTRUKeys>;

  addKeys(
    request: v1_pb.CTRUKeyImport,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: v1_pb.CTRUKeys) => void
  ): grpcWeb.ClientReadableStream<v1_pb.CTRUKeys>;

  runEncaps(
    request: v1_pb.CTRUExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

  runDecaps(
    request: v1_pb.CTRUExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

}

export class UserServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: v1_pb.LoginCredentials,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.User>;

  register(
    request: v1_pb.RegisterCredentials,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.User>;

  delete(
    request: v1_pb.AuthToken,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.User>;

}

export class EntryServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getById(
    request: v1_pb.EntryID,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.Entry>;

  getEntryHistory(
    request: v1_pb.AuthToken,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

  deleteEntry(
    request: v1_pb.EntryID,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.EntryID>;

}

export class KYBERServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  keygen(
    request: v1_pb.KYBERKeygenParameters,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.KYBERKeygenResult>;

  getKeys(
    request: v1_pb.AuthToken,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.KYBERKeys>;

  addKeys(
    request: v1_pb.KYBERKeyImport,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.KYBERKeys>;

  runEncaps(
    request: v1_pb.KYBERExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

  runDecaps(
    request: v1_pb.KYBERExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

}

export class CTRUServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  keygen(
    request: v1_pb.CTRUKeygenParameters,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.CTRUKeygenResult>;

  getKeys(
    request: v1_pb.AuthToken,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.CTRUKeys>;

  addKeys(
    request: v1_pb.CTRUKeyImport,
    metadata?: grpcWeb.Metadata
  ): Promise<v1_pb.CTRUKeys>;

  runEncaps(
    request: v1_pb.CTRUExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

  runDecaps(
    request: v1_pb.CTRUExecution,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<v1_pb.Entry>;

}

