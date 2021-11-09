cadena = ".p1:nth-child(1){\nanimation: typing 7s steps(64) 1s;\n}"
parrafo = 1
num_linea = 0
with open("letra.txt", "r" ,encoding="utf-8") as cancion:
    for linea in cancion:
        num_linea+=1
        if len(linea) == 1:
            parrafo+=1
            num_linea = 0
        else:
            resultado=".p"+str(parrafo)+":nth-child("+str(num_linea)+"){\nanimation: typing steps("+str(len(linea))+");\n}"
            print(resultado)

