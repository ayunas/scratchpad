class Publisher:
    #a set of unique subscribers
    #register and unregister subscribers
    #dispatch(message)

    def __init__(self):
        self.subscribers = set()
    
    def register(self,*subscribers):
        for who in subscribers:
            self.subscribers.add(who)
    
    def unregister(self,*subscribers):
        for who in subscribers:
            self.subscribers.remove(who)
    
    def dispatch(self,message):
        for subscriber in self.subscribers:
            subscriber.update(message)
        
    def __repr__(self):
        return str(self.__dict__)



class Subscriber:
    #name
    #update(message)

    def __init__(self,name):
        self.name = name
    
    def update(self,message):
        print(f"{self.name} received the following message: {message}")
    
    def __repr__(self):
        return str(self.__dict__)


newspaper = Publisher()

person1 = Subscriber('donny')
person2 = Subscriber('sam')
person3 = Subscriber('amir')
entity4 = Subscriber('teksystems')

newspaper.register(person1,person2,person3,entity4)

print(newspaper)

newspaper.dispatch('Dont you enjoy our newspaper?  Love it or Leave it.')
    
