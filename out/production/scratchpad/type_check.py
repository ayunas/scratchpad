

def my_func(a : bool, b : int) -> str:
    if a:
        print(b)
    else:
        print('sorry!  a was', a)
    return True

x = my_func(False,10)
print(type(x))


#on CLI:  mypy type_check.py  will perform type checking
print(my_func.__annotations__)