rotacoes= int(input("Informe o número de rotações: "))
texto= str(input("Informe o texto: "))
def teste(rotacoes, texto):
    alfabeto = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    result = []
    texto = list(texto)
    for letra in texto: 
        if(letra.lower() not in alfabeto):
            result.extend(letra)
        else:
            verifMaiuscula = letra.isupper()
            i = alfabeto.index(letra.lower())
            i+=rotacoes
            while(i>=26):
                i-=26
            if(verifMaiuscula == True):
                result.extend(alfabeto[i].upper())
            else:
                result.extend(alfabeto[i])
    print("".join(result))

teste(rotacoes,texto)
