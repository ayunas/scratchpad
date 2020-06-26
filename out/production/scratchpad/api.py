import requests,json

uri = "https://jsonplaceholder.typicode.com/todos/"
headers = {}

res = requests.get(uri)
print(res.json())



