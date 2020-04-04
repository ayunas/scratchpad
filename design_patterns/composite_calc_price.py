#Problem: calculate the price of all items found in all packages.

# class Container:
#     def __init__(self):
#         self.contents = {}
    
#     def show_details(self):
#         print("\t", end="")
#         print(self.contents)


# class Package:
#     def __init__(self):
#         self.contents = {}
    
#     def show_details(self):
#         print("\t", end="")
#         print(self.contents)

#     def operate(self):
#         price = 0
#         for c in self.contents:
#             p = self.contents[c].operate()
#             price += 0
#         return price
    
#     def __repr__(self):
#         return str(self.__dict__)

class Hammer:
    def __init__(self,price):
        self.price = price
    
    def show_details(self):
        print("\t", end="")
        print(self.price)
    
    def calc_price(self):
        return self.price
    
    def __repr__(self):
        return str(self.__dict__)


class Headphones:
    def __init__(self,price):
        self.price = price
    
    def show_details(self):
        print("\t", end="")
        print(self.price)
    
    def calc_price(self):
        return self.price
    
    def __repr__(self):
        return str(self.__dict__)

class Phone:
    def __init__(self,price):
        self.price = price
    
    def show_details(self):
        print("\t", end="")
        print(self.price)
    
    def calc_price(self):
        return self.price

    def __repr__(self):
        return str(self.__dict__)


# amazon = Container()
# package1 = Package()
# package2 = Package()

# package1.contents['beatz'] = beatz
# package1.contents['tekton'] = tekton
# package1.contents['iphone'] = iphone
# # package1.show_details()

# package2.contents['hammertime'] = hammertime
# package2.contents['mpaw'] = mpaw
# package2.contents['galaxy'] = galaxy
# package2.show_details()

# amazon.contents['package1'] = package1
# amazon.contents['package2'] = package2
# amazon.show_details()


class Composite:
    def __init__(self,name):
        self.name = name
        self.dependents = []
        self.price = 0
    
    def add(self,*args):
        for child in args:
            self.dependents.append(child)
    
    def remove(self,child):
        self.dependents.remove(child)
    
    def calc_price(self):
        for d in self.dependents:
            p = d.calc_price()
            self.price += p
        return self.price
    
    def __repr__(self):
        return str({'name' : self.name, 'dependents' : self.dependents})
        
#####   
iphone = Phone(400)
galaxy = Phone(200)
beatz = Headphones(50)
mpaw = Headphones(75)
hammertime = Hammer(25)
tekton = Hammer(35)
#####

amazon = Composite('amazon')
package1 = Composite('package1')
package1.add(iphone,mpaw,hammertime)
# print(package1)

package2 = Composite('package2')
package2.add(beatz,tekton,galaxy)
# print(package2)

amazon.add(package1,package2)
print(amazon)


# print(amazon)
p = amazon.calc_price()
print(p)