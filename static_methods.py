

class Statically:
    cool = 'neat'
    def __init__(self):
        print('statically has been instantiated')
        self.name = "amir"

    @classmethod
    def curly(cls):
        print('curly cubed')
        print(cls.cool)



Statically.curly()



