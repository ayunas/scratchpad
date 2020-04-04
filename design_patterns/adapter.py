class Motorcycle:
    def __init__(self):
        self.name = 'motorcycle'

    def drive(self):
        return 'driving on two wheels!'
    
    def __repr__(self):
        return str(self.__dict__)

class Car:
    def __init__(self):
        self.name = 'car'
    
    def drive(self):
        return 'driving on 4 wheels!'
    
    def __repr__(self):
        return str(self.__dict__)

class Truck:
    def __init__(self):
        self.name = 'truck'
    
    def drive(self):
        return 'driving on 8 wheels!'

    def __repr__(self):
        return str(self.__dict__)

car = Car()

class Adapter:
    def __init__(self,instance,**kwargs):
        self.instance = instance
        self.__dict__.update(kwargs)
    
    def original(self):
        return self.instance.__dict__
    
    def __repr__(self):
        return str(self.__dict__)
    

cycle = Motorcycle()
truck = Truck()

car2 = Adapter(car,drive=cycle.drive)  #cant do Motorcycle.wheels because wheels is an instance method, not a class method
print(car.name, car2.drive())

cycle8 = Adapter(cycle,drive=truck.drive)
print(cycle.name, cycle8.drive())





