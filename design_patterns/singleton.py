
class Singleton:
    __amir = 'cool'

    @classmethod
    def access_cls(cls):
        print(cls.__amir)
    
    @staticmethod
    def access_static():
        print(Singleton.__amir)
    
    def access(self):
        print(self.__amir)


Singleton.access_cls()
s = Singleton()
s.access()
Singleton.access_static()
print(Singleton._Singleton__amir)










