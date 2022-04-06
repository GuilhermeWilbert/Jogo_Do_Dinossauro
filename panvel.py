rex= int(input("Informe a posição de rex: "))
bob= int(input("Informe a posição de bob: "))
oli= int(input("Informe a posição de oli: "))
def teste(rex, oli, bob):

    distanciaRex = rex-oli
    if(rex<oli):
        distanciaRex = -rex+oli

    distanciaBob = bob-oli
    if(bob<oli):
        distanciaBob = -bob+oli
        
    if(distanciaRex == distanciaBob):
        print("Oli fugiu")
    elif(distanciaRex>distanciaBob):
        print("Bob chegou primeiro")
    else:
        print("Rex chegou primeiro")
     
teste(rex,oli,bob)
