class Tire:
    def __init__(self,side,pressure):
        self.side = side
        self.pressure = pressure

    def wear(self,distance):
        self.pressure -= (1 +  (distance / 500))
    
    def __repr__(self):
        return str(self.__dict__)


ld = Tire('left-driver',25)
rd = Tire('right-driver',35)
lb = Tire('left-back',25)
rb = Tire('right-back',10)

class GasTank:
    def __init__(self,volume):
        self.tank_level = volume
    
    def drive(self,distance):
        self.tank_level *= (distance / 500)
    
    def __repr__(self):
        return str(self.__dict__)

class Car:
    def __init__(self):
        self.tires = [ld,rd,lb,rb]
        self.gas_tank = GasTank(70)
    
    def drive(self,distance):
        for tire in self.tires:
            tire.wear(distance)
        self.gas_tank.drive(distance)
        
    
    def tire_pressure(self):
        return [tire.pressure for tire in self.tires]
    
    def gas(self):
        return self.gas_tank
    
    def __repr__(self):
        return str(self.__dict__)


c = Car()

c.drive(250)
c.drive(250)
c.drive(250)



print(c)


