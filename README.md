<p align="center">
  <a href="https://www.w3schools.com/xml/ajax_intro.asp">
    <img src="https://i.postimg.cc/5yW5rqHg/unnamed.jpg" alt="Ajax logo" width="500" height="300">
  </a>
</p>

# Ajax
Sesión Ajax Diplomado SENA.
<br>
Resumen de los pasos ejecutados en la sesión de Ajax realizada.

<br>

## Requerimientos técnicos

Herramientas requeridas: Visual Studio Code, cualquier navegador.

- Instalar Visual Studio Code: [Página oficial](https://code.visualstudio.com/Download)

Se utilizará la documentación [Ajax](https://www.w3schools.com/xml/ajax_intro.asp) para referencia en cuanto a la utilización, ejemplos, síntaxis y demás consideraciones respecto a su uso.

La guía considerará los resultados obtenidos Visual Studio Code v.1.59.0.

## Leer datos de una fuente externa (.txt)

En el siguiente código HTML, se mostará en la web un sencillo botón que luego de pulsarlo, leerá un .txt externo y mostará su contenido en pantalla. (Para los efectos de este ejemplo lo mostará como un título h5 pero bien puede usarse cualquier otra forma de visualización de contenido.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax</title>
    
</head>
<body>
    <button id='boton'>hacer click</button>
    <script src=index.js></script>
    <h5></h5>
</body>
</html>
```

A través del siguiente archivo de JavaScript se hará el llamado al archivo con el método correspondiente, teniendo en cuenta la síntaxis apropiada.

```
document.querySelector('button').addEventListener('click', mostradatos);

function mostradatos(){
 
    const xhttp = new XMLHttpRequest(); 
    xhttp.open('GET', 'archivo.txt', true); 
```





