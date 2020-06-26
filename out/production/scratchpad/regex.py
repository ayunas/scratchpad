import re

regex = r'\d'
string = 'sking1234567'

x = re.sub(regex,'!',string)
print(x)

print('__name__ = ',__name__)


