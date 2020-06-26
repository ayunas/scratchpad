class Subscriber:
    def __init__(self,name):
        self.name = name

    def update(self, message):
        print(f"{self.name} got message : {message}")

    def __repr__(self):
        return str(self.__dict__)

class Publisher:
    def __init__(self):
        self.subscribers = set()

    def register(self,*whose):
        for who in whose:
            self.subscribers.add(who)
    
    def unregister(self,*whose):
        for who in whose:
            self.subscribers.remove(who)
        #remove() vs discard()
        #remove - generates an error if element is not in the set
        #discard does not generate any error, if element is not in set
        
    
    def dispatch(self, message):
        for subscriber in self.subscribers:
            subscriber.update(message)
    
    def __repr__(self):
        return str(self.__dict__)



nytimes = Publisher()
amir = Subscriber('amir')
tommy = Subscriber('tommy')


nytimes.register(amir,tommy)

nytimes.dispatch('Corona Virus!  Read all about it!')

nytimes.unregister(amir)

nytimes.dispatch('updated dispatch')
print(nytimes)





