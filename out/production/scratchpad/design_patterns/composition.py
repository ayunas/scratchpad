#composition = "has a"
#Office has workers, elevators, desks

class Office:
    def __init__(self,name,elevator=None):
        self.name = name
        self.elevator = elevator
        self.desks = set() 
        self.workers = set()
    
    def __repr__(self):
        return str(self.__dict__)

class Elevator:
    #location
    def __init__(self,location):
        self.location = location
    
    def __repr__(self):
        return str(self.__dict__)

class Worker:
    #name, role
    def __init__(self,name,role):
        self.name = name
        self.role = role
    
    def __repr__(self):
        return str(self.__dict__)

class Desk:
    #location,worker
    def __init__(self,location,worker=None):
        self.location = location
        self.worker = worker
    
    def __repr__(self):
        return str(self.__dict__)




elevator = Elevator('east')
joe = Worker('Joe', 'CEO')
mary = Worker('Mary', 'receptionist')
desk1 = Desk('1A')
desk2 = Desk('2A',joe)
frontdesk = Desk('00',mary)

office = Office('Office1', elevator)

office.workers.add(joe)
office.workers.add(mary)
office.desks.add(desk1)
office.desks.add(desk2)
office.desks.add(frontdesk)

print(office)






