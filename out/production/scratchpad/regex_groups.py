import re

string = "100.52"
regex = r'(\d+)\.(\d+)'
x = re.match(regex,string)
print(x.group(2))

regex2 = r'(?P<singledigit>\d)(?P=singledigit)'
x = re.match(regex2,'22')
print(x)

regex3 = r'^\$(?P<threedig>\d{3})\,(\d{3}),(\d{3})\.(\d{2})'
string3 = '$155,234,102.25'

z = re.match(regex3,string3)
print(z.groupdict())




