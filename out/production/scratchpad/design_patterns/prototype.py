# https://www.djangospin.com/design-patterns-python/prototype/

class Planet:

    def __init__(self,name,distance,size):
        self.name = name
        self.distance = distance
        self.size = size

    def __repr__(self):
        return str(self.__dict__)
    
planet = Planet('jupiter',489000000,43441)


class Prototype:

    def __init__(self):
        self._prototype = {}
    
    def register(self,name,instance):
        self._prototype[name] = instance
    
    def unregister_object(self,name):
        if name not in self._prototype:
            raise KeyError("That Key not found in the prototype")
        del self._prototype[name]
    
    def clone(self,key,**kwargs):
        if key not in self._prototype:
            raise KeyError('That key not found in the prototype')
        instance = self._prototype[key]
        clone = instance.__dict__.copy()
        for k in kwargs:
            clone[k] = kwargs[k]
        return clone

    def __repr__(self):
        return str(self.__dict__)


p = Prototype()
p.register('jupiter',planet)
# print(p)
copy_planet = p.clone('jupiter',name='saturn',distance=951000000, size=36184)

print(copy_planet)

    









# class Car:
#     def __init__(self,year,make,model):
#         self.year = year
#         self.make = make
#         self.model = model
    
#     def __repr__(self):
#         return str(self.__dict__)
#         # return str({'year' : self.year, 'make' : self.make, 'model': self.model})

# class Prototype:
#     def __init__(self):
#         self._prototypes = {}
    
#     def register_object(self,name,obj):
#         self._prototypes[name] = obj
    
#     def unregister_object(self,name):
#         if name not in self._prototypes:
#             raise KeyError(f"{name} not found in the prototypes")
#         del self._prototypes[name]
    
#     def clone(self,name,**kwargs):
#         if name not in self._prototypes:
#             raise KeyError("Key not found in Prototype")
#         instance = self._prototypes[name]
#         clone_obj = instance.__dict__.copy()

#         for k in kwargs:
#             clone_obj[k] = kwargs[k]
        
#         # print(clone_obj)
#         return clone_obj

#     def __str__(self):
#         return str(self._prototypes)



# c = Car('1991','lexus','es250')
# p = Prototype()
# p.register_object('lex',c)
# d = Car('2006','Dodge','Charger')
# print(d)
# p.register_object('dodge',d)
# d2 = p.clone('dodge',year=2010,model='durango')
# # p.unregister_object('lex')
# l = p.clone('lex',model='lx470',year=2006)
# print(l)
# print(d2)




