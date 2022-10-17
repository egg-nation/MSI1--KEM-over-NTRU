from time import time
from functools import wraps
from queue import Queue

timer_queue = Queue()

def timer(algorithm, function_name):
	def specialized_decorator_build(function):
		@wraps(function)
		def wrapper(*args, **kwargs):
			start = int(time()*1000) #getting the current time in ms
			result = function(*args, **kwargs)
			end = int(time()*1000)

			execution_info = {
				"start": start,
				"end": end,
				"algorithm": algorithm,
				"function_name": function_name
			}

			timer_queue.put(execution_info)

			return result
		return wrapper
	return specialized_decorator_build

def gather():
	results = {}
	while not timer_queue.empty():
		result = timer_queue.get()
		function_name = result["function_name"]
		algorithm = result["algorithm"]

		del result["function_name"]
		del result["algorithm"]

		if not algorithm in results:
			results[algorithm] = {}

		if not function_name in results[algorithm]:
			results[algorithm][function_name] = []

		results[algorithm][function_name].append(result)

	return results		