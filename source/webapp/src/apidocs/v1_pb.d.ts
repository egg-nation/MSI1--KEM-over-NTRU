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

  getInputparametersMap(): jspb.Map<string, string>;
  clearInputparametersMap(): Entry;

  getOutput(): string;
  setOutput(value: string): Entry;
  hasOutput(): boolean;
  clearOutput(): Entry;

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
    inputparametersMap: Array<[string, string]>,
    output?: string,
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

export class Entries extends jspb.Message {
  getEntriesList(): Array<Entry>;
  setEntriesList(value: Array<Entry>): Entries;
  clearEntriesList(): Entries;
  addEntries(value?: Entry, index?: number): Entry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Entries.AsObject;
  static toObject(includeInstance: boolean, msg: Entries): Entries.AsObject;
  static serializeBinaryToWriter(message: Entries, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Entries;
  static deserializeBinaryFromReader(message: Entries, reader: jspb.BinaryReader): Entries;
}

export namespace Entries {
  export type AsObject = {
    entriesList: Array<Entry.AsObject>,
  }
}

export class KYBERParameters extends jspb.Message {
  getN(): number;
  setN(value: number): KYBERParameters;

  getQ(): number;
  setQ(value: number): KYBERParameters;

  getEta(): number;
  setEta(value: number): KYBERParameters;

  getK(): number;
  setK(value: number): KYBERParameters;

  getDu(): number;
  setDu(value: number): KYBERParameters;

  getDv(): number;
  setDv(value: number): KYBERParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KYBERParameters.AsObject;
  static toObject(includeInstance: boolean, msg: KYBERParameters): KYBERParameters.AsObject;
  static serializeBinaryToWriter(message: KYBERParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KYBERParameters;
  static deserializeBinaryFromReader(message: KYBERParameters, reader: jspb.BinaryReader): KYBERParameters;
}

export namespace KYBERParameters {
  export type AsObject = {
    n: number,
    q: number,
    eta: number,
    k: number,
    du: number,
    dv: number,
  }
}

export class KYBERKey extends jspb.Message {
  getKeyid(): string;
  setKeyid(value: string): KYBERKey;
  hasKeyid(): boolean;
  clearKeyid(): KYBERKey;

  getParameters(): KYBERParameters | undefined;
  setParameters(value?: KYBERParameters): KYBERKey;
  hasParameters(): boolean;
  clearParameters(): KYBERKey;

  getPk(): string;
  setPk(value: string): KYBERKey;

  getSk(): string;
  setSk(value: string): KYBERKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KYBERKey.AsObject;
  static toObject(includeInstance: boolean, msg: KYBERKey): KYBERKey.AsObject;
  static serializeBinaryToWriter(message: KYBERKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KYBERKey;
  static deserializeBinaryFromReader(message: KYBERKey, reader: jspb.BinaryReader): KYBERKey;
}

export namespace KYBERKey {
  export type AsObject = {
    keyid?: string,
    parameters?: KYBERParameters.AsObject,
    pk: string,
    sk: string,
  }
}

export class KYBERKeygenResult extends jspb.Message {
  getKeys(): KYBERKey | undefined;
  setKeys(value?: KYBERKey): KYBERKeygenResult;
  hasKeys(): boolean;
  clearKeys(): KYBERKeygenResult;

  getEntry(): Entry | undefined;
  setEntry(value?: Entry): KYBERKeygenResult;
  hasEntry(): boolean;
  clearEntry(): KYBERKeygenResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KYBERKeygenResult.AsObject;
  static toObject(includeInstance: boolean, msg: KYBERKeygenResult): KYBERKeygenResult.AsObject;
  static serializeBinaryToWriter(message: KYBERKeygenResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KYBERKeygenResult;
  static deserializeBinaryFromReader(message: KYBERKeygenResult, reader: jspb.BinaryReader): KYBERKeygenResult;
}

export namespace KYBERKeygenResult {
  export type AsObject = {
    keys?: KYBERKey.AsObject,
    entry?: Entry.AsObject,
  }
}

export class KYBERKeygenParameters extends jspb.Message {
  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): KYBERKeygenParameters;
  hasToken(): boolean;
  clearToken(): KYBERKeygenParameters;

  getParameters(): KYBERParameters | undefined;
  setParameters(value?: KYBERParameters): KYBERKeygenParameters;
  hasParameters(): boolean;
  clearParameters(): KYBERKeygenParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KYBERKeygenParameters.AsObject;
  static toObject(includeInstance: boolean, msg: KYBERKeygenParameters): KYBERKeygenParameters.AsObject;
  static serializeBinaryToWriter(message: KYBERKeygenParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KYBERKeygenParameters;
  static deserializeBinaryFromReader(message: KYBERKeygenParameters, reader: jspb.BinaryReader): KYBERKeygenParameters;
}

export namespace KYBERKeygenParameters {
  export type AsObject = {
    token?: AuthToken.AsObject,
    parameters?: KYBERParameters.AsObject,
  }
}

export class KYBERExecution extends jspb.Message {
  getKeys(): KYBERKey | undefined;
  setKeys(value?: KYBERKey): KYBERExecution;
  hasKeys(): boolean;
  clearKeys(): KYBERExecution;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): KYBERExecution;
  hasToken(): boolean;
  clearToken(): KYBERExecution;

  getIterations(): number;
  setIterations(value: number): KYBERExecution;

  getData(): string;
  setData(value: string): KYBERExecution;
  hasData(): boolean;
  clearData(): KYBERExecution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KYBERExecution.AsObject;
  static toObject(includeInstance: boolean, msg: KYBERExecution): KYBERExecution.AsObject;
  static serializeBinaryToWriter(message: KYBERExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KYBERExecution;
  static deserializeBinaryFromReader(message: KYBERExecution, reader: jspb.BinaryReader): KYBERExecution;
}

export namespace KYBERExecution {
  export type AsObject = {
    keys?: KYBERKey.AsObject,
    token?: AuthToken.AsObject,
    iterations: number,
    data?: string,
  }
}

export class KYBERKeyImport extends jspb.Message {
  getKeys(): KYBERKey | undefined;
  setKeys(value?: KYBERKey): KYBERKeyImport;
  hasKeys(): boolean;
  clearKeys(): KYBERKeyImport;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): KYBERKeyImport;
  hasToken(): boolean;
  clearToken(): KYBERKeyImport;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KYBERKeyImport.AsObject;
  static toObject(includeInstance: boolean, msg: KYBERKeyImport): KYBERKeyImport.AsObject;
  static serializeBinaryToWriter(message: KYBERKeyImport, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KYBERKeyImport;
  static deserializeBinaryFromReader(message: KYBERKeyImport, reader: jspb.BinaryReader): KYBERKeyImport;
}

export namespace KYBERKeyImport {
  export type AsObject = {
    keys?: KYBERKey.AsObject,
    token?: AuthToken.AsObject,
  }
}

export class KYBERKeys extends jspb.Message {
  getKeysList(): Array<KYBERKey>;
  setKeysList(value: Array<KYBERKey>): KYBERKeys;
  clearKeysList(): KYBERKeys;
  addKeys(value?: KYBERKey, index?: number): KYBERKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KYBERKeys.AsObject;
  static toObject(includeInstance: boolean, msg: KYBERKeys): KYBERKeys.AsObject;
  static serializeBinaryToWriter(message: KYBERKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KYBERKeys;
  static deserializeBinaryFromReader(message: KYBERKeys, reader: jspb.BinaryReader): KYBERKeys;
}

export namespace KYBERKeys {
  export type AsObject = {
    keysList: Array<KYBERKey.AsObject>,
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

export class CTRUKey extends jspb.Message {
  getKeyid(): string;
  setKeyid(value: string): CTRUKey;
  hasKeyid(): boolean;
  clearKeyid(): CTRUKey;

  getParameters(): CTRUParameters | undefined;
  setParameters(value?: CTRUParameters): CTRUKey;
  hasParameters(): boolean;
  clearParameters(): CTRUKey;

  getPk(): string;
  setPk(value: string): CTRUKey;

  getSk(): string;
  setSk(value: string): CTRUKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUKey.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUKey): CTRUKey.AsObject;
  static serializeBinaryToWriter(message: CTRUKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUKey;
  static deserializeBinaryFromReader(message: CTRUKey, reader: jspb.BinaryReader): CTRUKey;
}

export namespace CTRUKey {
  export type AsObject = {
    keyid?: string,
    parameters?: CTRUParameters.AsObject,
    pk: string,
    sk: string,
  }
}

export class CTRUKeygenResult extends jspb.Message {
  getKeys(): CTRUKey | undefined;
  setKeys(value?: CTRUKey): CTRUKeygenResult;
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
    keys?: CTRUKey.AsObject,
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
  getKeys(): CTRUKey | undefined;
  setKeys(value?: CTRUKey): CTRUExecution;
  hasKeys(): boolean;
  clearKeys(): CTRUExecution;

  getToken(): AuthToken | undefined;
  setToken(value?: AuthToken): CTRUExecution;
  hasToken(): boolean;
  clearToken(): CTRUExecution;

  getIterations(): number;
  setIterations(value: number): CTRUExecution;

  getData(): string;
  setData(value: string): CTRUExecution;
  hasData(): boolean;
  clearData(): CTRUExecution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUExecution.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUExecution): CTRUExecution.AsObject;
  static serializeBinaryToWriter(message: CTRUExecution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUExecution;
  static deserializeBinaryFromReader(message: CTRUExecution, reader: jspb.BinaryReader): CTRUExecution;
}

export namespace CTRUExecution {
  export type AsObject = {
    keys?: CTRUKey.AsObject,
    token?: AuthToken.AsObject,
    iterations: number,
    data?: string,
  }
}

export class CTRUKeyImport extends jspb.Message {
  getKeys(): CTRUKey | undefined;
  setKeys(value?: CTRUKey): CTRUKeyImport;
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
    keys?: CTRUKey.AsObject,
    token?: AuthToken.AsObject,
  }
}

export class CTRUKeys extends jspb.Message {
  getKeysList(): Array<CTRUKey>;
  setKeysList(value: Array<CTRUKey>): CTRUKeys;
  clearKeysList(): CTRUKeys;
  addKeys(value?: CTRUKey, index?: number): CTRUKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CTRUKeys.AsObject;
  static toObject(includeInstance: boolean, msg: CTRUKeys): CTRUKeys.AsObject;
  static serializeBinaryToWriter(message: CTRUKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CTRUKeys;
  static deserializeBinaryFromReader(message: CTRUKeys, reader: jspb.BinaryReader): CTRUKeys;
}

export namespace CTRUKeys {
  export type AsObject = {
    keysList: Array<CTRUKey.AsObject>,
  }
}

