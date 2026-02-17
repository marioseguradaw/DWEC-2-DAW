<!-- Autor: Mario Segur Abad -->
<!-- Fecha: 05/10/2025 -->

# Práctica DWEC - Unidad 2

## ¿Qué se ha hecho?
- Se ha creado una función recursiva en JavaScript que calcula el valor de la sucesión de Fibonacci para un número `n` introducido por el usuario.
- Se ha implementado también una versión **iterativa** para comparar rendimiento.
- Se han utilizado `console.time()` y `console.timeEnd()` para medir cuánto tarda cada versión en ejecutarse.

## ¿Cómo funciona la función recursiva?
La función se basa en la fórmula matemática:<br>
**F(n) = F(n-1) + F(n-2)**<br>
con los casos base:<br>
**F(0) = 0**<br>
**F(1) = 1**<br>

Cada llamada a `fibonacciRecursivo(n)` genera dos nuevas llamadas hasta llegar a los casos base. Este enfoque es elegante pero **muy lento** para valores grandes, porque repite muchos cálculos innecesarios.

## ¿Qué se ha comprobado?
- Para valores (como `n = 5` o `n = 8`), ambas versiones funcionan bien.
- A partir de `n = 35`, la versión recursiva tarda mucho más que la iterativa.
- La versión iterativa usa un bucle y guarda los resultados, por lo que es mucho más rápida.

## ¿Cómo se visualiza?
- **Recursiva**: se ejecuta en el navegador con `prompt()` y `document.write()`.
- **Iterativa**: se ejecuta en consola con `console.log()` y muestra los tiempos de ejecución.

## Prueba de Autoría
- Autor: **Mario Segura Abad**
- Fecha de realización: 05/10/2025