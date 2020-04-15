class Amir:
    def __init__(self):
        self.name = 'amir'
        self.age = 38
    

# print(dir(Child),"\n")
# print(dir(Child2.__class__))

a = Amir()
b = a

b.name = "Yunas"

print(a.name,a.age)

obj = {'name' : 'amir', 'age' : 38}

# print(obj.name, obj['age'])

#you cannot access python dictionaries using dot notation.  you can only access instances by dot notation



