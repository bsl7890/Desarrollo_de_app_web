import os
def opc1():
    return "Opción 1"
def opc2():
    return "Opción 2"
def opc3():
    return "Opción 3"
def opc4():
    return "Opción 4"
def otros():
    return "Opción no válida"
# Diccionario de opciones
opciones = {
    1: opc1,
    2: opc2,
    3: opc3,
    4: opc4
}
opciones.get(opc, otros)()
while True:
    os.system("cls")
    print(""""
    1) Opción 1
    2) Opción 2
    3) Opción 3
    4) Opción 4
    5) Salir
    """)
    n=input("Presione Enter para continuar...")

