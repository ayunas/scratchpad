#allow only 1 instance to be generated.
#provide access to this single instance.  
#Universe


class Universe:
    __solo = None

    def __init__(self):
        if Universe.__solo:
            raise Exception("There is only 1 universe in the universe")
        Universe.__solo = self
    
    @classmethod
    def access(cls):
        if cls.__solo == None:
            Universe()
        return cls.__solo

u = Universe()
u2 = u.access()

print(u,u2)







