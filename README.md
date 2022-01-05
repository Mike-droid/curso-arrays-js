# Curso de Manipulación de Arrays en JavaScript

## Introducción

### Tu AS bajo la manga

[Repositorio para iniciar el proeycto](https://github.com/platzi/curso-manipulacion-de-arrays/tree/main)

### ForEach

Sirve para recorrer cada elemento del array.

### Mutable o Inmutable

Es preferible usar inmutable, pero no quiere decir que mutable sea incorrecto.

Alterar los arrays puede tener efectos colaterales.

### Map

Este es el método más útil para crear nuevos arrays. Map es inmutable.

### Map Reloaded

Usamos el spread operator para generar una copia de un array sin alterar el original `...`

### Filter

Filter es inmutable. Crea un nuevo array con los elementos que cumplen la condición.

### Reduce

Lo que este método hace es tomar un array y lo reduce a un solo valor.

Este método se puede usar mucho en ciencia de datos.

### Reduce reloaded

## Métodos en JavaScript

### Some

Sirve para evaluar una condición en un array y nos regresa un True o False.

Podemos usar una librería llamada [date-fns](https://www.npmjs.com/package/date-fns) para hacer una comparación de fechas.

### Every

Es lo opuesto a some. Aquí evaluamos si todos cumplen la condición.

### Find y FindIndex

Find solo retorna el primer elemento que cumpla la condición.

FindIndex retorna el índice del primer elemento que cumpla la condición.

### Includes

Este método funciona para arrays y strings.

### Join

Unimos todos los elementos de un array en un string además de agregar un separador.

Split nos permite separar un string en un array.

### Concat

Este es un método para fusionar arrays.

Concat es inmutable. No modifica el array original, sino que crea uno nuevo.

### Flat

Usamos flat para pasar de un array dentro de otro array a 1 solo. Reducir dimensionalidad.

### Flatmap

Podemos usar flatmap como una combinación entre Flat y Map.

### Mutable functions

### Sort

Este es un método que va a mutar el array.
