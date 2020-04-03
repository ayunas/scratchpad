class Shape:
    def __init__(self,sides,color):
        self.sides = sides
        self.color = color
    
    def __repr__(self):
        return str({'width' : self.width, 'length' : self.length, 'height' : self.height, 'color' : self.color})

class Triangle(Shape):
    def __init__(self,sides,color):
        super().__init__(width,length,height,color)

    def area(self):
       area = (self.width * self.height) / 2
       return area

class Circle(Shape)



# s = Shape(10,10,10,'black')
# print(s)

t = Triangle(10,10,10,'black')
print(t)

a = t.area()
print(a)



    

