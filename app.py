import sys

personas = []

while True:
    # Solicitar los datos de la persona
    nombre = input("Nombre: ")
    apellido = input("Apellido: ")
    dni = input("DNI: ")

    # Solicitar los telefonos
    telefonos = []
    while True:
        telefono = input("Telefono (o enter para terminar): ")
        if telefono == "":  # Si no se ingresa nada, terminar la carga de telefonos
            break
        telefonos.append(telefono)

    # Guardar los datos en la lista de personas
    personas.append([nombre, apellido, dni, telefonos])

    # Preguntar si desea agregar otra persona
    otra = input("¿Agregar otra persona? (si/no): ").lower()
    if otra != "si":
        break

# Mostrar los datos ingresados
print("\nLista de personas:")
for persona in personas:
    print(persona)

sys.exit()  # Finalizar el programa
