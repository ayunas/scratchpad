class Leaf:

    def __init__(self,*args):
        self.position = args[0]

    def show_details(self):
        print("\t", end=" ")
        print(self.position)
    
    def __repr__(self):
        return str(self.__dict__)


class CompositeElement:

    def __init__(self, *args):
        self.position = args[0]
        self.dependents = []
    
    def add(self, child):
        self.dependents.append(child)

    def remove(self, child):
        self.dependents.remove(child)
    
    def show_details(self):
        print(self.position)
        for child in self.dependents:
            print("\t", end="")
            child.show_details()
    
    def __repr__(self):
        return str(self.__dict__)



top = CompositeElement("Dhadha")
mid = CompositeElement("Abi")
midwife = CompositeElement("Ammi")
low = Leaf("Ibby")
low2 = Leaf("Yusuf")

top.add(mid)
mid.add(midwife)
midwife.add(low)
midwife.add(low2)

top.show_details()



