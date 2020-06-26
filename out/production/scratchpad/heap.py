# https://www.tutorialspoint.com/python_data_structure/python_heaps.htm
import heapq

H = [10,1,2,5,3,12,23,6,7,4,11]

heapq.heapify(H)


heapq.heappush(H,17)

print(H)
heapq.heapify(H)

print(H)
heapq.heappop(H)

print(H)

heapq.heapreplace(H,67)
print(H)







