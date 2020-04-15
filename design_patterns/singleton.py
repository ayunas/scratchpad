#create a variable that stores a single instance
#Generate an error, if the class has already been instantiated

class Universe:
    __solo_instance = None

    def __init__(self):
        if Universe.__solo_instance:
            raise Exception("There is Only 1 Universe in the whole wide Universe")
        Universe.__solo_instance = self
    
    @classmethod
    def get_universe(cls):
        if cls.__solo_instance is None:
            Universe()
        return cls.__solo_instance

    @staticmethod
    def get_uni():
        if Universe.__solo_instance == None:
            Universe()
        return Universe.__solo_instance

u = Universe()
print(u)

y = u.get_universe()
print(y)

x = u.get_uni()
print(x)








# # class Singleton:
# #     __amir = 'cool'

# #     @classmethod
# #     def access_cls(cls):
# #         print(cls.__amir)
    
# #     @staticmethod
# #     def access_static():
# #         print(Singleton.__amir)
    
# #     def access(self):
# #         print(self.__amir)


# # Singleton.access_cls()
# # s = Singleton()
# # s.access()
# # Singleton.access_static()
# # print(Singleton._Singleton__amir)















