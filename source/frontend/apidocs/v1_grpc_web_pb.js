/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./v1_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.LoginCredentials,
 *   !proto.User>}
 */
const methodDescriptor_UserService_login = new grpc.web.MethodDescriptor(
  '/UserService/login',
  grpc.web.MethodType.UNARY,
  proto.LoginCredentials,
  proto.User,
  /**
   * @param {!proto.LoginCredentials} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.LoginCredentials,
 *   !proto.User>}
 */
const methodInfo_UserService_login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.User,
  /**
   * @param {!proto.LoginCredentials} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.LoginCredentials} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/login',
      request,
      metadata || {},
      methodDescriptor_UserService_login,
      callback);
};


/**
 * @param {!proto.LoginCredentials} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/login',
      request,
      metadata || {},
      methodDescriptor_UserService_login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RegisterCredentials,
 *   !proto.User>}
 */
const methodDescriptor_UserService_register = new grpc.web.MethodDescriptor(
  '/UserService/register',
  grpc.web.MethodType.UNARY,
  proto.RegisterCredentials,
  proto.User,
  /**
   * @param {!proto.RegisterCredentials} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RegisterCredentials,
 *   !proto.User>}
 */
const methodInfo_UserService_register = new grpc.web.AbstractClientBase.MethodInfo(
  proto.User,
  /**
   * @param {!proto.RegisterCredentials} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.RegisterCredentials} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/register',
      request,
      metadata || {},
      methodDescriptor_UserService_register,
      callback);
};


/**
 * @param {!proto.RegisterCredentials} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/register',
      request,
      metadata || {},
      methodDescriptor_UserService_register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AuthToken,
 *   !proto.User>}
 */
const methodDescriptor_UserService_delete = new grpc.web.MethodDescriptor(
  '/UserService/delete',
  grpc.web.MethodType.UNARY,
  proto.AuthToken,
  proto.User,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AuthToken,
 *   !proto.User>}
 */
const methodInfo_UserService_delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.User,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.AuthToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/delete',
      request,
      metadata || {},
      methodDescriptor_UserService_delete,
      callback);
};


/**
 * @param {!proto.AuthToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     A native promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/delete',
      request,
      metadata || {},
      methodDescriptor_UserService_delete);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.EntryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.EntryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EntryID,
 *   !proto.Entry>}
 */
const methodDescriptor_EntryService_getById = new grpc.web.MethodDescriptor(
  '/EntryService/getById',
  grpc.web.MethodType.UNARY,
  proto.EntryID,
  proto.Entry,
  /**
   * @param {!proto.EntryID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntryID,
 *   !proto.Entry>}
 */
const methodInfo_EntryService_getById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Entry,
  /**
   * @param {!proto.EntryID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @param {!proto.EntryID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Entry)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EntryServiceClient.prototype.getById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EntryService/getById',
      request,
      metadata || {},
      methodDescriptor_EntryService_getById,
      callback);
};


/**
 * @param {!proto.EntryID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Entry>}
 *     A native promise that resolves to the response
 */
proto.EntryServicePromiseClient.prototype.getById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EntryService/getById',
      request,
      metadata || {},
      methodDescriptor_EntryService_getById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AuthToken,
 *   !proto.Entry>}
 */
const methodDescriptor_EntryService_getEntryHistory = new grpc.web.MethodDescriptor(
  '/EntryService/getEntryHistory',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.AuthToken,
  proto.Entry,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AuthToken,
 *   !proto.Entry>}
 */
const methodInfo_EntryService_getEntryHistory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Entry,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @param {!proto.AuthToken} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.EntryServiceClient.prototype.getEntryHistory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/EntryService/getEntryHistory',
      request,
      metadata || {},
      methodDescriptor_EntryService_getEntryHistory);
};


/**
 * @param {!proto.AuthToken} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.EntryServicePromiseClient.prototype.getEntryHistory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/EntryService/getEntryHistory',
      request,
      metadata || {},
      methodDescriptor_EntryService_getEntryHistory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.EntryID,
 *   !proto.EntryID>}
 */
const methodDescriptor_EntryService_deleteEntry = new grpc.web.MethodDescriptor(
  '/EntryService/deleteEntry',
  grpc.web.MethodType.UNARY,
  proto.EntryID,
  proto.EntryID,
  /**
   * @param {!proto.EntryID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntryID.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.EntryID,
 *   !proto.EntryID>}
 */
const methodInfo_EntryService_deleteEntry = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EntryID,
  /**
   * @param {!proto.EntryID} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.EntryID.deserializeBinary
);


/**
 * @param {!proto.EntryID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.EntryID)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.EntryID>|undefined}
 *     The XHR Node Readable Stream
 */
proto.EntryServiceClient.prototype.deleteEntry =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/EntryService/deleteEntry',
      request,
      metadata || {},
      methodDescriptor_EntryService_deleteEntry,
      callback);
};


/**
 * @param {!proto.EntryID} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.EntryID>}
 *     A native promise that resolves to the response
 */
proto.EntryServicePromiseClient.prototype.deleteEntry =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/EntryService/deleteEntry',
      request,
      metadata || {},
      methodDescriptor_EntryService_deleteEntry);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BATServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BATServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BATKeygenParameters,
 *   !proto.BATKeygenResult>}
 */
const methodDescriptor_BATService_keygen = new grpc.web.MethodDescriptor(
  '/BATService/keygen',
  grpc.web.MethodType.UNARY,
  proto.BATKeygenParameters,
  proto.BATKeygenResult,
  /**
   * @param {!proto.BATKeygenParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BATKeygenResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.BATKeygenParameters,
 *   !proto.BATKeygenResult>}
 */
const methodInfo_BATService_keygen = new grpc.web.AbstractClientBase.MethodInfo(
  proto.BATKeygenResult,
  /**
   * @param {!proto.BATKeygenParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BATKeygenResult.deserializeBinary
);


/**
 * @param {!proto.BATKeygenParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.BATKeygenResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BATKeygenResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BATServiceClient.prototype.keygen =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BATService/keygen',
      request,
      metadata || {},
      methodDescriptor_BATService_keygen,
      callback);
};


/**
 * @param {!proto.BATKeygenParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BATKeygenResult>}
 *     A native promise that resolves to the response
 */
proto.BATServicePromiseClient.prototype.keygen =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BATService/keygen',
      request,
      metadata || {},
      methodDescriptor_BATService_keygen);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AuthToken,
 *   !proto.BATKeys>}
 */
const methodDescriptor_BATService_getKeys = new grpc.web.MethodDescriptor(
  '/BATService/getKeys',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.AuthToken,
  proto.BATKeys,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BATKeys.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AuthToken,
 *   !proto.BATKeys>}
 */
const methodInfo_BATService_getKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.BATKeys,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BATKeys.deserializeBinary
);


/**
 * @param {!proto.AuthToken} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.BATKeys>}
 *     The XHR Node Readable Stream
 */
proto.BATServiceClient.prototype.getKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/BATService/getKeys',
      request,
      metadata || {},
      methodDescriptor_BATService_getKeys);
};


/**
 * @param {!proto.AuthToken} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.BATKeys>}
 *     The XHR Node Readable Stream
 */
proto.BATServicePromiseClient.prototype.getKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/BATService/getKeys',
      request,
      metadata || {},
      methodDescriptor_BATService_getKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BATKeyImport,
 *   !proto.BATKeys>}
 */
const methodDescriptor_BATService_addKeys = new grpc.web.MethodDescriptor(
  '/BATService/addKeys',
  grpc.web.MethodType.UNARY,
  proto.BATKeyImport,
  proto.BATKeys,
  /**
   * @param {!proto.BATKeyImport} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BATKeys.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.BATKeyImport,
 *   !proto.BATKeys>}
 */
const methodInfo_BATService_addKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.BATKeys,
  /**
   * @param {!proto.BATKeyImport} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.BATKeys.deserializeBinary
);


/**
 * @param {!proto.BATKeyImport} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.BATKeys)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.BATKeys>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BATServiceClient.prototype.addKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BATService/addKeys',
      request,
      metadata || {},
      methodDescriptor_BATService_addKeys,
      callback);
};


/**
 * @param {!proto.BATKeyImport} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.BATKeys>}
 *     A native promise that resolves to the response
 */
proto.BATServicePromiseClient.prototype.addKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BATService/addKeys',
      request,
      metadata || {},
      methodDescriptor_BATService_addKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BATExecution,
 *   !proto.Entry>}
 */
const methodDescriptor_BATService_runEncaps = new grpc.web.MethodDescriptor(
  '/BATService/runEncaps',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.BATExecution,
  proto.Entry,
  /**
   * @param {!proto.BATExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.BATExecution,
 *   !proto.Entry>}
 */
const methodInfo_BATService_runEncaps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Entry,
  /**
   * @param {!proto.BATExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @param {!proto.BATExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.BATServiceClient.prototype.runEncaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/BATService/runEncaps',
      request,
      metadata || {},
      methodDescriptor_BATService_runEncaps);
};


/**
 * @param {!proto.BATExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.BATServicePromiseClient.prototype.runEncaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/BATService/runEncaps',
      request,
      metadata || {},
      methodDescriptor_BATService_runEncaps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BATExecution,
 *   !proto.Entry>}
 */
const methodDescriptor_BATService_runDecaps = new grpc.web.MethodDescriptor(
  '/BATService/runDecaps',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.BATExecution,
  proto.Entry,
  /**
   * @param {!proto.BATExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.BATExecution,
 *   !proto.Entry>}
 */
const methodInfo_BATService_runDecaps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Entry,
  /**
   * @param {!proto.BATExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @param {!proto.BATExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.BATServiceClient.prototype.runDecaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/BATService/runDecaps',
      request,
      metadata || {},
      methodDescriptor_BATService_runDecaps);
};


/**
 * @param {!proto.BATExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.BATServicePromiseClient.prototype.runDecaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/BATService/runDecaps',
      request,
      metadata || {},
      methodDescriptor_BATService_runDecaps);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CTRUServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.CTRUServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CTRUKeygenParameters,
 *   !proto.CTRUKeygenResult>}
 */
const methodDescriptor_CTRUService_keygen = new grpc.web.MethodDescriptor(
  '/CTRUService/keygen',
  grpc.web.MethodType.UNARY,
  proto.CTRUKeygenParameters,
  proto.CTRUKeygenResult,
  /**
   * @param {!proto.CTRUKeygenParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CTRUKeygenResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CTRUKeygenParameters,
 *   !proto.CTRUKeygenResult>}
 */
const methodInfo_CTRUService_keygen = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CTRUKeygenResult,
  /**
   * @param {!proto.CTRUKeygenParameters} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CTRUKeygenResult.deserializeBinary
);


/**
 * @param {!proto.CTRUKeygenParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CTRUKeygenResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CTRUKeygenResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CTRUServiceClient.prototype.keygen =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CTRUService/keygen',
      request,
      metadata || {},
      methodDescriptor_CTRUService_keygen,
      callback);
};


/**
 * @param {!proto.CTRUKeygenParameters} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CTRUKeygenResult>}
 *     A native promise that resolves to the response
 */
proto.CTRUServicePromiseClient.prototype.keygen =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CTRUService/keygen',
      request,
      metadata || {},
      methodDescriptor_CTRUService_keygen);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.AuthToken,
 *   !proto.CTRUKeys>}
 */
const methodDescriptor_CTRUService_getKeys = new grpc.web.MethodDescriptor(
  '/CTRUService/getKeys',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.AuthToken,
  proto.CTRUKeys,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CTRUKeys.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.AuthToken,
 *   !proto.CTRUKeys>}
 */
const methodInfo_CTRUService_getKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CTRUKeys,
  /**
   * @param {!proto.AuthToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CTRUKeys.deserializeBinary
);


/**
 * @param {!proto.AuthToken} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.CTRUKeys>}
 *     The XHR Node Readable Stream
 */
proto.CTRUServiceClient.prototype.getKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/CTRUService/getKeys',
      request,
      metadata || {},
      methodDescriptor_CTRUService_getKeys);
};


/**
 * @param {!proto.AuthToken} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.CTRUKeys>}
 *     The XHR Node Readable Stream
 */
proto.CTRUServicePromiseClient.prototype.getKeys =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/CTRUService/getKeys',
      request,
      metadata || {},
      methodDescriptor_CTRUService_getKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CTRUKeyImport,
 *   !proto.CTRUKeys>}
 */
const methodDescriptor_CTRUService_addKeys = new grpc.web.MethodDescriptor(
  '/CTRUService/addKeys',
  grpc.web.MethodType.UNARY,
  proto.CTRUKeyImport,
  proto.CTRUKeys,
  /**
   * @param {!proto.CTRUKeyImport} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CTRUKeys.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CTRUKeyImport,
 *   !proto.CTRUKeys>}
 */
const methodInfo_CTRUService_addKeys = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CTRUKeys,
  /**
   * @param {!proto.CTRUKeyImport} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.CTRUKeys.deserializeBinary
);


/**
 * @param {!proto.CTRUKeyImport} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CTRUKeys)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CTRUKeys>|undefined}
 *     The XHR Node Readable Stream
 */
proto.CTRUServiceClient.prototype.addKeys =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/CTRUService/addKeys',
      request,
      metadata || {},
      methodDescriptor_CTRUService_addKeys,
      callback);
};


/**
 * @param {!proto.CTRUKeyImport} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CTRUKeys>}
 *     A native promise that resolves to the response
 */
proto.CTRUServicePromiseClient.prototype.addKeys =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/CTRUService/addKeys',
      request,
      metadata || {},
      methodDescriptor_CTRUService_addKeys);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CTRUExecution,
 *   !proto.Entry>}
 */
const methodDescriptor_CTRUService_runEncaps = new grpc.web.MethodDescriptor(
  '/CTRUService/runEncaps',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.CTRUExecution,
  proto.Entry,
  /**
   * @param {!proto.CTRUExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CTRUExecution,
 *   !proto.Entry>}
 */
const methodInfo_CTRUService_runEncaps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Entry,
  /**
   * @param {!proto.CTRUExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @param {!proto.CTRUExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.CTRUServiceClient.prototype.runEncaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/CTRUService/runEncaps',
      request,
      metadata || {},
      methodDescriptor_CTRUService_runEncaps);
};


/**
 * @param {!proto.CTRUExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.CTRUServicePromiseClient.prototype.runEncaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/CTRUService/runEncaps',
      request,
      metadata || {},
      methodDescriptor_CTRUService_runEncaps);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CTRUExecution,
 *   !proto.Entry>}
 */
const methodDescriptor_CTRUService_runDecaps = new grpc.web.MethodDescriptor(
  '/CTRUService/runDecaps',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.CTRUExecution,
  proto.Entry,
  /**
   * @param {!proto.CTRUExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CTRUExecution,
 *   !proto.Entry>}
 */
const methodInfo_CTRUService_runDecaps = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Entry,
  /**
   * @param {!proto.CTRUExecution} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Entry.deserializeBinary
);


/**
 * @param {!proto.CTRUExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.CTRUServiceClient.prototype.runDecaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/CTRUService/runDecaps',
      request,
      metadata || {},
      methodDescriptor_CTRUService_runDecaps);
};


/**
 * @param {!proto.CTRUExecution} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.Entry>}
 *     The XHR Node Readable Stream
 */
proto.CTRUServicePromiseClient.prototype.runDecaps =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/CTRUService/runDecaps',
      request,
      metadata || {},
      methodDescriptor_CTRUService_runDecaps);
};


module.exports = proto;

