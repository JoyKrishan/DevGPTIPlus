import time
import threading
def debounce(wait):
    """ Decorator that will postpone a function's
        execution until after `wait` seconds
        have elapsed since the last time it was invoked.
        from https://chat.openai.com/share/7ed01b5b-97bd-436a-b23b-542f068a4302"""
    def decorator(func):
        def debounced(*args, **kwargs):
            def call_it():
                func(*args, **kwargs)
            if hasattr(debounced, '_timer'):
                debounced._timer.cancel()
            debounced._timer = threading.Timer(wait, call_it)
            debounced._timer.start()
        return wraps(func)(debounced)
    return decorator

# Example usage
@debounce(2)  # Wait for 2 seconds before executing the function
def debounce_test(arg):
    print(f"debounce test called: {arg}")


def throttle(wait = 1):
    """ Decorator that prevents a function from being called
        more than once every `wait` seconds. """
    def decorator(func):
        last_called = [0]  # Use a list to allow nonlocal modification

        @wraps(func)
        def throttled(*args, **kwargs):
            nonlocal last_called
            elapsed = time.time() - last_called[0]
            if elapsed > wait:
                last_called[0] = time.time()
                return func(*args, **kwargs)

        return throttled
    return decorator


# Example usage
@throttle(2)  # Function can only be called once every 2 seconds
def throttle_test(arg):
    print(f"throttle test called: {arg}")

# def powerset(iterable):
#     """powerset([1,2,3]) --> () (1,) (2,) (3,) (1,2) (1,3) (2,3) (1,2,3)"""
#     s = list(iterable)
#     return chain.from_iterable(combinations(s, r) for r in range(len(s)+1))
# TODO: I don't think we're using this. Delete?
# TODO: I don't think we're using this. Delete?
# TODO: I don't think we're using this. Delete?
# TODO: never got these working, I think. Would be good to have, though. Not a high priority, but @joeflack4, look at some time