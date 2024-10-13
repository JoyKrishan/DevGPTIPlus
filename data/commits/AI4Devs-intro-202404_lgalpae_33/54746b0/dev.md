
# Ejercicio Stopwatch

- Usando ChatGPT 3.5
- Conversación completa: https://chat.openai.com/share/556effd9-ba30-4f14-bb73-d6b09df3da86

## PROMPT INICIAL

Quiero que actúes como un front developer para desarrollar una aplicación web con las siguientes características:

### 1. Especificaciones generales

- Tendrá dos funcionalidades: “Cronómetro” y “Cuenta atrás”. En la pantalla inicial sólo se mostrará un selector para que el usuario seleccione cuál quiere usar.
- Deberá ser responsive y usará HTML, CSS, Javascript y Boostrap como librería de estilos
- No me muestres paso a paso, muestrame todo el contenido completo para cada fichero
- Usando buenas prácticas
- Partiendo de este seed de HTML:

```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Timer and Countdown</title>
</head>
<body>
<h1>Timer and Countdown</h1>
<script src="script.js"></script>
</body>
</html>

```

### 2. “Cronómetro” especificaciones

Cuando el usuario seleccione en la pantalla inicial “Cronómetro”, se mostrará:

- Título “Cronómetro”
- Contador inicial con formato HH:mm:ss (00:00:00). El contador estará dentro de una caja con borde redondeado y fondo gris claro
- Debajo del contador se mostrará 2 botones:
    - Botón “Start”, a la izquierda y con fondo verde: al hacer click en “Start” comenzará a funcionar el cronómetro y cambiará el texto del botón a “Pause”. Al hacer click en “Pause” pausará el cronómetro y cambiará el texto del botón a “Continue” y fondo azul. Al hacer click en “Continue” volverá a ponerse en marcha el cronómetro desde donde estaba al clicar en “Pause”, no desde 0.
    - Botón “Clear”, a la derecha y con fondo rojo: al hacer click en “Clear” reseteará el contador, poniendo los valores a 0.

### 3. “Cuenta atrás” especificaciones

Cuando el usuario seleccione en la pantalla inicial “Cuenta atrás”, inicialmente mostrará:

- Título “Cuenta atrás”
- Contador inicial con formato HH:mm:ss (00:00:00) centrado. El contador estará dentro de una caja con borde redondeado y fondo gris claro.
- Para que el usuario pueda definir el tiempo inicial de la cuenta atrás, debajo del contador se mostrarán los siguientes botones:
    - Botón para cada número del 0 al 9, para poder setear el valor inicial de la cuenta atrás. Cuando el usuario clique en los números se deben ir introduciendo en el contador de derecha a izquierda, manteniendo el formato inicial HH:mm:ss. El contador se irá actualizando dinámicamente, por ejemplo, si el usuario clica en el número 5 y luego en el número 3 la cuenta atrás comenzará mostrando 00:00:53
    - Botón “Clear”, con fondo gris, para resetear el contador y establecer los valores iniciales “00:00:00”
    - Botón “Set”. Cuando el usuario haga clic en “Set”:
        - Desaparecerán los botones con los números del 0 al 9 y los botones de “Set” y “Clear”
        - Mostrará los botones “Start” y “Clear”, como se muestran para “Cronómetro”.
            - El botón "Start". Al hacer click en “Start” comenzará a funcionar la cuenta atrás y cambiará el texto del botón a “Pause”. Al hacer click en “Pause” pausará la cuenta atras y cambiará el texto del botón a “Continue” y fondo azul. Al hacer click en “Continue” volverá a ponerse en marcha la cuenta atrás desde donde estaba al clicar en “Pause”.
            - El botón “Clear” reseteará el contador de la cuenta atrás mostrando el valor introducido inicialmente por el usuario para comenzar la cuenta atrás.


## PROMPTS PARA APLICAR MEJORAS Y SOLUCIONAR ERRORES

1. Todo funciona correctamente, menos el botón "Clear" de "Cuenta atrás", no hace nada. Recuerda que al clicar en "Clear" el valor de la cuenta atrás debe reiniciarse y volver a poner de nuevo el valor indicado por el usuario antes de comenzar la cuenta atrás

2. muestramo el fichero completo script.js con esta mejora añadida

3. la cuenta atrás no está funcionando correctamente, recuerda que:
- Cuando el usuario clique en los números se deben ir introduciendo en el contador de derecha a izquierda, manteniendo el formato inicial HH:mm:ss. El contador se irá actualizando dinámicamente, por ejemplo, si el usuario clica en el número 5, luego en el número 3 y luego en el número 2 la cuenta atrás comenzará mostrando 00:05:32
- El botón "Clear" debe resetear el contador y establecer los valores iniciales “00:00:00”

4. la cuenta atrás no está funcionando correctamente, recuerda que:
- Cuando el usuario clique en los números se deben ir introduciendo en el contador de derecha a izquierda, manteniendo el formato inicial HH:mm:ss. El contador se irá actualizando dinámicamente. Por ejemplo, si el usuario clica en el número 5, luego en el número 3 y luego en el número 2 la cuenta atrás comenzará mostrando 00:05:32. Ahora mismo cuando el usuario clica en esos botones está mostrando el valor 00:08:52

5. sigue sin funcionar bien, ahora está añadiendo 0 y borrando el valor introducido anteriormente

6. Parece que sigue sin funcionar bien el seteo inicial de la cuenta atrás, cuando el usuario clica más de 2 veces en los números, comienza a sumar en el total de segundos en vez de cambiar a la tercera cifra. Vamos a simplificar esto cambiando la forma en la que el usuario introduce el tiempo inicial para la cuenta atrás. Ahora quiero que no muestres los botones del 0 al 9 y muestres 3 inputs:
- El primero para indicar las horas para la cuenta atrás
- El segundo para indicar los minutos para la cuenta atrás, el valor máximo permitido será 59 y el mínimo 0
- El tercero para indicar los segundos para la cuenta atrás, el valor máximo permitido será 59 y el mínimo 0

7. Quiero que sigas mostrando inicialmente el botón "Set" y "Clear" en la cuenta atrás

- Botón “Clear”, con fondo gris, para resetear el contador y establecer los valores iniciales “00:00:00”
- Botón “Set”. Cuando el usuario haga clic:
    - Desaparecerán los botones con los números del 0 al 9 y los botones de “Set” y “Clear”
    - Mostrará los botones “Start” y “Restart”
        - El botón "Start". Iniciará o pausará la cuenta atrás.
        - El botón “Restart” reseteará el contador de la cuenta atrás mostrando el valor introducido inicialmente por el usuario para comenzar de nuevo la cuenta atrás.

8. como última mejora, quiero que apliques algun diseño a los input de las horas, minutos y segundos, y que cuando el usuario clique en "Set" se muestren en el contador las horas, minutos y segundos introducidos por el usuario 

9. Cuando se  hace clic en "Set", además de mostrar el tiempo introducido por el usuario en el contador de cuenta atrás, quiero que ocultes los botones "Set” y “Clear” y muestre los botones “Start” y “Restart”
    - El botón "Start". Iniciará o pausará la cuenta atrás.
    - El botón “Restart” reseteará el contador de la cuenta atrás mostrando el valor introducido inicialmente por el usuario para comenzar de nuevo la cuenta atrás

10. Vale, ahora añade funcionalidad a los botones "Start" y "Restart"
    - El botón "Start". Iniciará o pausará la cuenta atrás.
    - El botón “Restart” reseteará el contador de la cuenta atrás mostrando el valor introducido inicialmente por el usuario para comenzar de nuevo la cuenta atrás

11. La lógica funciona correctamente, ahora quiero que apliques algún diseño atractivo a los input de horas, minutos y segundos