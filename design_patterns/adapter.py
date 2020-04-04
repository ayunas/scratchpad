class Motorcycle:
    def __init__(self):
        self.name = 'motorcycle'

    def wheels(self):
        return '2 wheeler'
    
    def __repr__(self):
        return str(self.__dict__)

class Car:
    def __init__(self):
        self.name = 'car'
    
    def wheels(self):
        return '4 wheeler'
    
    def __repr__(self):
        return str(self.__dict__)

class Truck:
    def __init__(self):
        self.name = 'truck'
    
    def wheels(self):
        return '8 wheeler'

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

car_two_wheels = Adapter(car,wheels=cycle.wheels)  #cant do Motorcycle.wheels because wheels is an instance method, not a class method
print(car_two_wheels)
print(car_two_wheels.wheels())

cycle8 = Adapter(cycle,wheels=truck.wheels)
print(cycle8.wheels())





