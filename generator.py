def generator():
    i = 0
    while True:
        i += 1
        yield i


g = generator()

print(next(g))

xs = (next(x) for x in g)
print(xs)
