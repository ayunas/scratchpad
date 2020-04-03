# https://www.djangospin.com/design-patterns-python/prototype/

class Car:
    def __init__(self,year,make,model):
        self.year = year
        self.make = make
        self.model = model
    
    def __repr__(self):
        return str(self.__dict__)
        # return str({'year' : self.year, 'make' : self.make, 'model': self.model})

class Prototype:
    def __init__(self):
        self._prototypes = {}
    
    def register_object(self,name,obj):
        self._prototypes[name] = obj
    
    def unregister_object(self,name):
        if name not in self._prototypes:
            raise KeyError(f"{name} not found in the prototypes")
        del self._prototypes[name]
    
    def clone(self,name,**kwargs):
        if name not in self._prototypes:
            raise KeyError("Key not found in Prototype")
        instance = self._prototypes[name]
        clone_obj = instance.__dict__.copy()

        for k in kwargs:
            clone_obj[k] = kwargs[k]
        
        # print(clone_obj)
        return clone_obj

    def __str__(self):
        return str(self._prototypes)



c = Car('1991','lexus','es250')
p = Prototype()
p.register_object('lex',c)
d = Car('2006','Dodge','Charger')
print(d)
p.register_object('dodge',d)
d2 = p.clone('dodge',year=2010,model='durango')
# p.unregister_object('lex')
l = p.clone('lex',model='lx470',year=2006)
print(l)
print(d2)





