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
	while not timer_queue.empty():
		yield timer_queue.get()
