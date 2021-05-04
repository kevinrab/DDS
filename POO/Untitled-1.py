peso = input("¿Cual es tu peso para decirte tu catoria?\n")
#categoria = {peso > 0 and peso < 48: "Minimosca", peso > 48 and peso < 51: "Mosca", peso > 51 and peso < 54: "Gallo", peso > 54 and peso < 57: "Pluma", peso > 57 and peso < 60: "Ligero"}
categoria = { 48: "Minimosca", 20 : "Mosca"}
if peso in categoria:
    print(categoria)