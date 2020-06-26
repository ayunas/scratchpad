

class Counter:
    def __init__(self,start,end):
        self.num = start
        self.end = end
    
    def __iter__(self):
        return self
    
    def __next__(self):
        if self.num > self.end:
            raise StopIteration
        else:
            self.num += 1
            return self.num - 1

if __name__ == '__main__':
    c1 = Counter(1,20)
    c2 = Counter(5,50)

    for i in c1:
        print('counting', i)
