import * as jspb from 'google-protobuf'

/* eslint-disable */
// @ts-nocheck

export class LoginCredentials extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): LoginCredentials;

  getPassword(): string;
  setPassword(value: string): LoginCredentials;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: LoginCredentials): LoginCredentials.AsObject;
  static serializeBinaryToWriter(message: LoginCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginCredentials;
  static deserializeBinaryFromReader(message: LoginCredentials, reader: jspb.BinaryReader): LoginCredentials;
}

export namespace LoginCredentials {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class RegisterCredentials extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): RegisterCredentials;

  getEmailaddress(): string;
  setEmailaddress(value: string): RegisterCredentials;

  getPassword(): string;
  setPassword(value: string): RegisterCredentials;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCredentials.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCredentials): RegisterCredentials.AsObject;
  static serializeBinaryToWriter(message: RegisterCredentials, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCredentials;
  static deserializeBinaryFromReader(message: RegisterCredentials, reader: jspb.BinaryReader): RegisterCredentials;
}

export namespace RegisterCredentials {
  export type AsObject = {
    username: string,
    emailaddress: string,
    password: string,
  }
}

export class AuthToken extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): AuthToken;

  getGeneratedat(): number;
  setGeneratedat(value: number): AuthToken;

  getExpiresat(): number;
  setExpiresat(value: number): AuthToken;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): AuthToken;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthToken.AsObject;
  static toObject(includeInstance: boolean, msg: AuthToken): AuthToken.AsObject;
  static serializeBinaryToWriter(message: AuthToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthToken;
  static deserializeBinaryFromReader(message: AuthToken, reader: jspb.BinaryReader): AuthToken;
}

export namespace AuthToken {
  export type AsObject = {
    userid: string,
    generatedat: number,
    expiresat: number,
    signature: Uint8Array | string,
  }
}

export class User extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): User;

  getEmailaddress(): string;
  setEmailaddress(value: string): User;

  getUserid(): string;
  setUserid(value: string): User;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): User;
  hasToken(): boolean;
  clearToken(): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    username: string,
    emailaddress: string,
    userid: string,
    token?: AuthToken.AsObject,
  }
}

export class Entry extends jspb.Message {
  getId(): string;
  setId(value: string): Entry;
  hasId(): boolean;
  clearId(): Entry;

  getUserid(): string;
  setUserid(value: string): Entry;
  hasUserid(): boolean;
  clearUserid(): Entry;

  getAlgorithmname(): string;
  setAlgorithmname(value: string): Entry;

  getFunctionname(): string;
  setFunctionname(value: string): Entry;

  getInputparametersMap(): jspb.Map<string, number>;
  clearInputparametersMap(): Entry;

  getKeyid(): string;
  setKeyid(value: string): Entry;

  getExecutiontime(): number;
  setExecutiontime(value: number): Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entry.AsObject;
  static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
  static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entry;
  static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
}

export namespace Entry {
  export type AsObject = {
    id?: string,
    userid?: string,
    algorithmname: string,
    functionname: string,
    inputparametersMap: Array<[string, number]>,
    keyid: string,
    executiontime: number,
  }
}

export class EntryID extends jspb.Message {
  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): EntryID;
  hasToken(): boolean;
  clearToken(): EntryID;

  getEntryid(): string;
  setEntryid(value: string): EntryID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EntryID.AsObject;
  static toObject(includeInstance: boolean, msg: EntryID): EntryID.AsObject;
  static serializeBinaryToWriter(message: EntryID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EntryID;
  static deserializeBinaryFromReader(message: EntryID, reader: jspb.BinaryReader): EntryID;
}

export namespace EntryID {
  export type AsObject = {
    token?: AuthToken.AsObject,
    entryid: string,
  }
}

export class BATParameters extends jspb.Message {
  getN(): number;
  setN(value: number): BATParameters;

  getB(): number;
  setB(value: number): BATParameters;

  getK(): number;
  setK(value: number): BATParameters;

  getQ(): number;
  setQ(value: number): BATParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BATParameters.AsObject;
  static toObject(includeInstance: boolean, msg: BATParameters): BATParameters.AsObject;
  static serializeBinaryToWriter(message: BATParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BATParameters;
  static deserializeBinaryFromReader(message: BATParameters, reader: jspb.BinaryReader): BATParameters;
}

export namespace BATParameters {
  export type AsObject = {
    n: number,
    b: number,
    k: number,
    q: number,
  }
}

export class BATKeys extends jspb.Message {
  getKeyid(): string;
  setKeyid(value: string): BATKeys;
  hasKeyid(): boolean;
  clearKeyid(): BATKeys;

  getParameters(): BATParameters | undefined;
  setParameters(value?: BATParameters): BATKeys;
  hasParameters(): boolean;
  clearParameters(): BATKeys;

  getPk(): string;
  setPk(value: string): BATKeys;

  getSk(): string;
  setSk(value: string): BATKeys;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BATKeys.AsObject;
  static toObject(includeInstance: boolean, msg: BATKeys): BATKeys.AsObject;
  static serializeBinaryToWriter(message: BATKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BATKeys;
  static deserializeBinaryFromReader(message: BATKeys, reader: jspb.BinaryReader): BATKeys;
}

export namespace BATKeys {
  export type AsObject = {
    keyid?: string,
    parameters?: BATParameters.AsObject,
    pk: string,
    sk: string,
  }
}

export class BATKeygenResult extends jspb.Message {
  getKeys(): BATKeys | undefined;
  setKeys(value?: BATKeys): BATKeygenResult;
  hasKeys(): boolean;
  clearKeys(): BATKeygenResult;

  getEntry(): Entry | undefined;
  setEntry(value?: Entry): BATKeygenResult;
  hasEntry(): boolean;
  clearEntry(): BATKeygenResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BATKeygenResult.AsObject;
  static toObject(includeInstance: boolean, msg: BATKeygenResult): BATKeygenResult.AsObject;
  static serializeBinaryToWriter(message: BATKeygenResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BATKeygenResult;
  static deserializeBinaryFromReader(message: BATKeygenResult, reader: jspb.BinaryReader): BATKeygenResult;
}

export namespace BATKeygenResult {
  export type AsObject = {
    keys?: BATKeys.AsObject,
    entry?: Entry.AsObject,
  }
}

export class BATKeygenParameters extends jspb.Message {
  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): BATKeygenParameters;
  hasToken(): boolean;
  clearToken(): BATKeygenParameters;

  getParameters(): BATParameters | undefined;
  setParameters(value?: BATParameters): BATKeygenParameters;
  hasParameters(): boolean;
  clearParameters(): BATKeygenParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BATKeygenParameters.AsObject;
  static toObject(includeInstance: boolean, msg: BATKeygenParameters): BATKeygenParameters.AsObject;
  static serializeBinaryToWriter(message: BATKeygenParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BATKeygenParameters;
  static deserializeBinaryFromReader(message: BATKeygenParameters, reader: jspb.BinaryReader): BATKeygenParameters;
}

export namespace BATKeygenParameters {
  export type AsObject = {
    token?: AuthToken.AsObject,
    parameters?: BATParameters.AsObject,
  }
}

export class BATExecution extends jspb.Message {
  getKeys(): BATKeys | undefined;
  setKeys(value?: BATKeys): BATExecution;
  hasKeys(): boolean;
  clearKeys(): BATExecution;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): BATExecution;
  hasToken(): boolean;
  clearToken(): BATExecution;

  getIterations(): number;
  setIterations(value: number): BATExecution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BATExecution.AsObject;
  static toObject(includeInstance: boolean, msg: BATExecution): BATExecution.AsObject;
  static serializeBinaryToWriter(message: BATExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BATExecution;
  static deserializeBinaryFromReader(message: BATExecution, reader: jspb.BinaryReader): BATExecution;
}

export namespace BATExecution {
  export type AsObject = {
    keys?: BATKeys.AsObject,
    token?: AuthToken.AsObject,
    iterations: number,
  }
}

export class BATKeyImport extends jspb.Message {
  getKeys(): BATKeys | undefined;
  setKeys(value?: BATKeys): BATKeyImport;
  hasKeys(): boolean;
  clearKeys(): BATKeyImport;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): BATKeyImport;
  hasToken(): boolean;
  clearToken(): BATKeyImport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BATKeyImport.AsObject;
  static toObject(includeInstance: boolean, msg: BATKeyImport): BATKeyImport.AsObject;
  static serializeBinaryToWriter(message: BATKeyImport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BATKeyImport;
  static deserializeBinaryFromReader(message: BATKeyImport, reader: jspb.BinaryReader): BATKeyImport;
}

export namespace BATKeyImport {
  export type AsObject = {
    keys?: BATKeys.AsObject,
    token?: AuthToken.AsObject,
  }
}

export class CTRUParameters extends jspb.Message {
  getN(): number;
  setN(value: number): CTRUParameters;

  getQ(): number;
  setQ(value: number): CTRUParameters;

  getQ2(): number;
  setQ2(value: number): CTRUParameters;

  getEta(): number;
  setEta(value: number): CTRUParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUParameters.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUParameters): CTRUParameters.AsObject;
  static serializeBinaryToWriter(message: CTRUParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUParameters;
  static deserializeBinaryFromReader(message: CTRUParameters, reader: jspb.BinaryReader): CTRUParameters;
}

export namespace CTRUParameters {
  export type AsObject = {
    n: number,
    q: number,
    q2: number,
    eta: number,
  }
}

export class CTRUKeys extends jspb.Message {
  getKeyid(): string;
  setKeyid(value: string): CTRUKeys;
  hasKeyid(): boolean;
  clearKeyid(): CTRUKeys;

  getParameters(): CTRUParameters | undefined;
  setParameters(value?: CTRUParameters): CTRUKeys;
  hasParameters(): boolean;
  clearParameters(): CTRUKeys;

  getPk(): string;
  setPk(value: string): CTRUKeys;

  getSk(): string;
  setSk(value: string): CTRUKeys;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUKeys.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUKeys): CTRUKeys.AsObject;
  static serializeBinaryToWriter(message: CTRUKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUKeys;
  static deserializeBinaryFromReader(message: CTRUKeys, reader: jspb.BinaryReader): CTRUKeys;
}

export namespace CTRUKeys {
  export type AsObject = {
    keyid?: string,
    parameters?: CTRUParameters.AsObject,
    pk: string,
    sk: string,
  }
}

export class CTRUKeygenResult extends jspb.Message {
  getKeys(): CTRUKeys | undefined;
  setKeys(value?: CTRUKeys): CTRUKeygenResult;
  hasKeys(): boolean;
  clearKeys(): CTRUKeygenResult;

  getEntry(): Entry | undefined;
  setEntry(value?: Entry): CTRUKeygenResult;
  hasEntry(): boolean;
  clearEntry(): CTRUKeygenResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUKeygenResult.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUKeygenResult): CTRUKeygenResult.AsObject;
  static serializeBinaryToWriter(message: CTRUKeygenResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUKeygenResult;
  static deserializeBinaryFromReader(message: CTRUKeygenResult, reader: jspb.BinaryReader): CTRUKeygenResult;
}

export namespace CTRUKeygenResult {
  export type AsObject = {
    keys?: CTRUKeys.AsObject,
    entry?: Entry.AsObject,
  }
}

export class CTRUKeygenParameters extends jspb.Message {
  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): CTRUKeygenParameters;
  hasToken(): boolean;
  clearToken(): CTRUKeygenParameters;

  getParameters(): CTRUParameters | undefined;
  setParameters(value?: CTRUParameters): CTRUKeygenParameters;
  hasParameters(): boolean;
  clearParameters(): CTRUKeygenParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUKeygenParameters.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUKeygenParameters): CTRUKeygenParameters.AsObject;
  static serializeBinaryToWriter(message: CTRUKeygenParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUKeygenParameters;
  static deserializeBinaryFromReader(message: CTRUKeygenParameters, reader: jspb.BinaryReader): CTRUKeygenParameters;
}

export namespace CTRUKeygenParameters {
  export type AsObject = {
    token?: AuthToken.AsObject,
    parameters?: CTRUParameters.AsObject,
  }
}

export class CTRUExecution extends jspb.Message {
  getKeys(): CTRUKeys | undefined;
  setKeys(value?: CTRUKeys): CTRUExecution;
  hasKeys(): boolean;
  clearKeys(): CTRUExecution;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): CTRUExecution;
  hasToken(): boolean;
  clearToken(): CTRUExecution;

  getIterations(): number;
  setIterations(value: number): CTRUExecution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUExecution.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUExecution): CTRUExecution.AsObject;
  static serializeBinaryToWriter(message: CTRUExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUExecution;
  static deserializeBinaryFromReader(message: CTRUExecution, reader: jspb.BinaryReader): CTRUExecution;
}

export namespace CTRUExecution {
  export type AsObject = {
    keys?: CTRUKeys.AsObject,
    token?: AuthToken.AsObject,
    iterations: number,
  }
}

export class CTRUKeyImport extends jspb.Message {
  getKeys(): CTRUKeys | undefined;
  setKeys(value?: CTRUKeys): CTRUKeyImport;
  hasKeys(): boolean;
  clearKeys(): CTRUKeyImport;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): CTRUKeyImport;
  hasToken(): boolean;
  clearToken(): CTRUKeyImport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUKeyImport.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUKeyImport): CTRUKeyImport.AsObject;
  static serializeBinaryToWriter(message: CTRUKeyImport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUKeyImport;
  static deserializeBinaryFromReader(message: CTRUKeyImport, reader: jspb.BinaryReader): CTRUKeyImport;
}

export namespace CTRUKeyImport {
  export type AsObject = {
    keys?: CTRUKeys.AsObject,
    token?: AuthToken.AsObject,
  }
}

