import sys
from functools import reduce
from getopt import getopt

# print(dir(sys))
print(sys.getsizeof(reduce)) #in bytes

print(sys.argv[1:])
args = sys.argv[1:]

x = getopt(args,"a:b")
# print(help(getopt))

print(x)






