import sys

print(sys.argv)

if len(sys.argv) == 2:
    nums = int(sys.argv[1])

integers = []

while len(integers) < 10:

    integers.append(int(input("Enter an integer: ")))

print(integers)
