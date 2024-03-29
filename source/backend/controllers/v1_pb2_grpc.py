# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import v1_pb2 as v1__pb2


class UserServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.login = channel.unary_unary(
                '/UserService/login',
                request_serializer=v1__pb2.LoginCredentials.SerializeToString,
                response_deserializer=v1__pb2.User.FromString,
                )
        self.register = channel.unary_unary(
                '/UserService/register',
                request_serializer=v1__pb2.RegisterCredentials.SerializeToString,
                response_deserializer=v1__pb2.User.FromString,
                )
        self.delete = channel.unary_unary(
                '/UserService/delete',
                request_serializer=v1__pb2.AuthToken.SerializeToString,
                response_deserializer=v1__pb2.User.FromString,
                )


class UserServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def login(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def register(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def delete(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_UserServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'login': grpc.unary_unary_rpc_method_handler(
                    servicer.login,
                    request_deserializer=v1__pb2.LoginCredentials.FromString,
                    response_serializer=v1__pb2.User.SerializeToString,
            ),
            'register': grpc.unary_unary_rpc_method_handler(
                    servicer.register,
                    request_deserializer=v1__pb2.RegisterCredentials.FromString,
                    response_serializer=v1__pb2.User.SerializeToString,
            ),
            'delete': grpc.unary_unary_rpc_method_handler(
                    servicer.delete,
                    request_deserializer=v1__pb2.AuthToken.FromString,
                    response_serializer=v1__pb2.User.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'UserService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class UserService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def login(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/UserService/login',
            v1__pb2.LoginCredentials.SerializeToString,
            v1__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def register(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/UserService/register',
            v1__pb2.RegisterCredentials.SerializeToString,
            v1__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def delete(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/UserService/delete',
            v1__pb2.AuthToken.SerializeToString,
            v1__pb2.User.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class EntryServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.getById = channel.unary_unary(
                '/EntryService/getById',
                request_serializer=v1__pb2.EntryID.SerializeToString,
                response_deserializer=v1__pb2.Entry.FromString,
                )
        self.getEntryHistory = channel.unary_unary(
                '/EntryService/getEntryHistory',
                request_serializer=v1__pb2.AuthToken.SerializeToString,
                response_deserializer=v1__pb2.Entries.FromString,
                )
        self.deleteEntry = channel.unary_unary(
                '/EntryService/deleteEntry',
                request_serializer=v1__pb2.EntryID.SerializeToString,
                response_deserializer=v1__pb2.EntryID.FromString,
                )


class EntryServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def getById(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getEntryHistory(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def deleteEntry(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_EntryServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'getById': grpc.unary_unary_rpc_method_handler(
                    servicer.getById,
                    request_deserializer=v1__pb2.EntryID.FromString,
                    response_serializer=v1__pb2.Entry.SerializeToString,
            ),
            'getEntryHistory': grpc.unary_unary_rpc_method_handler(
                    servicer.getEntryHistory,
                    request_deserializer=v1__pb2.AuthToken.FromString,
                    response_serializer=v1__pb2.Entries.SerializeToString,
            ),
            'deleteEntry': grpc.unary_unary_rpc_method_handler(
                    servicer.deleteEntry,
                    request_deserializer=v1__pb2.EntryID.FromString,
                    response_serializer=v1__pb2.EntryID.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'EntryService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class EntryService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def getById(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/EntryService/getById',
            v1__pb2.EntryID.SerializeToString,
            v1__pb2.Entry.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getEntryHistory(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/EntryService/getEntryHistory',
            v1__pb2.AuthToken.SerializeToString,
            v1__pb2.Entries.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def deleteEntry(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/EntryService/deleteEntry',
            v1__pb2.EntryID.SerializeToString,
            v1__pb2.EntryID.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class KYBERServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.keygen = channel.unary_unary(
                '/KYBERService/keygen',
                request_serializer=v1__pb2.KYBERKeygenParameters.SerializeToString,
                response_deserializer=v1__pb2.KYBERKeygenResult.FromString,
                )
        self.getKeys = channel.unary_unary(
                '/KYBERService/getKeys',
                request_serializer=v1__pb2.AuthToken.SerializeToString,
                response_deserializer=v1__pb2.KYBERKeys.FromString,
                )
        self.addKeys = channel.unary_unary(
                '/KYBERService/addKeys',
                request_serializer=v1__pb2.KYBERKeyImport.SerializeToString,
                response_deserializer=v1__pb2.KYBERKey.FromString,
                )
        self.runEncaps = channel.unary_unary(
                '/KYBERService/runEncaps',
                request_serializer=v1__pb2.KYBERExecution.SerializeToString,
                response_deserializer=v1__pb2.Entries.FromString,
                )
        self.runDecaps = channel.unary_unary(
                '/KYBERService/runDecaps',
                request_serializer=v1__pb2.KYBERExecution.SerializeToString,
                response_deserializer=v1__pb2.Entries.FromString,
                )


class KYBERServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def keygen(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getKeys(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def addKeys(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def runEncaps(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def runDecaps(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_KYBERServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'keygen': grpc.unary_unary_rpc_method_handler(
                    servicer.keygen,
                    request_deserializer=v1__pb2.KYBERKeygenParameters.FromString,
                    response_serializer=v1__pb2.KYBERKeygenResult.SerializeToString,
            ),
            'getKeys': grpc.unary_unary_rpc_method_handler(
                    servicer.getKeys,
                    request_deserializer=v1__pb2.AuthToken.FromString,
                    response_serializer=v1__pb2.KYBERKeys.SerializeToString,
            ),
            'addKeys': grpc.unary_unary_rpc_method_handler(
                    servicer.addKeys,
                    request_deserializer=v1__pb2.KYBERKeyImport.FromString,
                    response_serializer=v1__pb2.KYBERKey.SerializeToString,
            ),
            'runEncaps': grpc.unary_unary_rpc_method_handler(
                    servicer.runEncaps,
                    request_deserializer=v1__pb2.KYBERExecution.FromString,
                    response_serializer=v1__pb2.Entries.SerializeToString,
            ),
            'runDecaps': grpc.unary_unary_rpc_method_handler(
                    servicer.runDecaps,
                    request_deserializer=v1__pb2.KYBERExecution.FromString,
                    response_serializer=v1__pb2.Entries.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'KYBERService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class KYBERService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def keygen(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/KYBERService/keygen',
            v1__pb2.KYBERKeygenParameters.SerializeToString,
            v1__pb2.KYBERKeygenResult.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getKeys(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/KYBERService/getKeys',
            v1__pb2.AuthToken.SerializeToString,
            v1__pb2.KYBERKeys.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def addKeys(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/KYBERService/addKeys',
            v1__pb2.KYBERKeyImport.SerializeToString,
            v1__pb2.KYBERKey.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def runEncaps(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/KYBERService/runEncaps',
            v1__pb2.KYBERExecution.SerializeToString,
            v1__pb2.Entries.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def runDecaps(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/KYBERService/runDecaps',
            v1__pb2.KYBERExecution.SerializeToString,
            v1__pb2.Entries.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class CTRUServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.keygen = channel.unary_unary(
                '/CTRUService/keygen',
                request_serializer=v1__pb2.CTRUKeygenParameters.SerializeToString,
                response_deserializer=v1__pb2.CTRUKeygenResult.FromString,
                )
        self.getKeys = channel.unary_unary(
                '/CTRUService/getKeys',
                request_serializer=v1__pb2.AuthToken.SerializeToString,
                response_deserializer=v1__pb2.CTRUKeys.FromString,
                )
        self.addKeys = channel.unary_unary(
                '/CTRUService/addKeys',
                request_serializer=v1__pb2.CTRUKeyImport.SerializeToString,
                response_deserializer=v1__pb2.CTRUKey.FromString,
                )
        self.runEncaps = channel.unary_unary(
                '/CTRUService/runEncaps',
                request_serializer=v1__pb2.CTRUExecution.SerializeToString,
                response_deserializer=v1__pb2.Entries.FromString,
                )
        self.runDecaps = channel.unary_unary(
                '/CTRUService/runDecaps',
                request_serializer=v1__pb2.CTRUExecution.SerializeToString,
                response_deserializer=v1__pb2.Entries.FromString,
                )


class CTRUServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def keygen(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def getKeys(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def addKeys(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def runEncaps(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def runDecaps(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_CTRUServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'keygen': grpc.unary_unary_rpc_method_handler(
                    servicer.keygen,
                    request_deserializer=v1__pb2.CTRUKeygenParameters.FromString,
                    response_serializer=v1__pb2.CTRUKeygenResult.SerializeToString,
            ),
            'getKeys': grpc.unary_unary_rpc_method_handler(
                    servicer.getKeys,
                    request_deserializer=v1__pb2.AuthToken.FromString,
                    response_serializer=v1__pb2.CTRUKeys.SerializeToString,
            ),
            'addKeys': grpc.unary_unary_rpc_method_handler(
                    servicer.addKeys,
                    request_deserializer=v1__pb2.CTRUKeyImport.FromString,
                    response_serializer=v1__pb2.CTRUKey.SerializeToString,
            ),
            'runEncaps': grpc.unary_unary_rpc_method_handler(
                    servicer.runEncaps,
                    request_deserializer=v1__pb2.CTRUExecution.FromString,
                    response_serializer=v1__pb2.Entries.SerializeToString,
            ),
            'runDecaps': grpc.unary_unary_rpc_method_handler(
                    servicer.runDecaps,
                    request_deserializer=v1__pb2.CTRUExecution.FromString,
                    response_serializer=v1__pb2.Entries.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'CTRUService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class CTRUService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def keygen(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/CTRUService/keygen',
            v1__pb2.CTRUKeygenParameters.SerializeToString,
            v1__pb2.CTRUKeygenResult.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def getKeys(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/CTRUService/getKeys',
            v1__pb2.AuthToken.SerializeToString,
            v1__pb2.CTRUKeys.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def addKeys(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/CTRUService/addKeys',
            v1__pb2.CTRUKeyImport.SerializeToString,
            v1__pb2.CTRUKey.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def runEncaps(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/CTRUService/runEncaps',
            v1__pb2.CTRUExecution.SerializeToString,
            v1__pb2.Entries.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def runDecaps(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/CTRUService/runDecaps',
            v1__pb2.CTRUExecution.SerializeToString,
            v1__pb2.Entries.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
