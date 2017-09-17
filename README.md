# Testeo Deployment IIS - Angular 2

Se genera proyecto angular 2 básico con ruteo, para evaluar Gulp en como herramienta para deployment y además, configuración para deployment
*html base
*system.js
*web.config

-------------------------------------------------
Angular Deployment & Gulp & system.js Notas

El elemento HTML <base> especifica la dirección URL base que se utilizará para todas las direcciones URL relativas contenidas dentro de un documento. Sólo puede haber un elemento <base> en un documento.


Un documento ubicado en "http://www.servidordeejemplo.com/documentos/index.html" tiene un vínculo con el siguiente URI relativo: "2015/calentamiento-global.pdf". Cuando un navegador tenga que resolver este URI relativo, primero extraerá el URI base de la ubicación del documento originario, eliminando la parte del archivo. En este caso, la URI base sería "http://www.servidorejemplo.com/documentos/". A partir de allí, el navegador puede, en este caso particular, simplemente anexar la URI relativa a la URI base, obteniendo la direción absoluta del recurso, que en este caso sería "http://www.servidorejemplo.com/documentos/2015/calentamiento-global.pdf".

En algunos casos, el URI relativo puede tener el directorio especial "..", el cual instruye a los navegadores a moverse un nivel hacia arriba en la estructura de directorios. Por ejemplo, si el documento usado en el ejemplo anterior, ubicado en "http://www.servidorejemplo.com/documentos/index.html", presenta un vínculo con el URI relativo "../imagenes/tierra.jpg", el navegador a cargo de su procesamiento extraería el URI base del documento originario ("http://www.servidorejemplo.com/documentos/"), se movería un nivel hacia arriba en la estructura de directorios ("http://www.exampleserver.com/") y luego anexaría el resto del URI relativo. Al final, el URI obtenido sería "http://www.servidorejemplo.com/imagenes/tierra.jpg".

Url Deployment: http://localhost/GulpTest/
Ubicación de files

GulpTest
|___package.json
|___node_modules
|
|___src
|	|__main.js
|	|__system.config.js
|	|__systemjs-angular-loader.js
|	|__systemjs-angular-loader.js
|	|___app
|		|__app.component.js
|		|__app.component.html
|		|__app.module.js
|		|__app.routes.js
|		|__components
|		   |__personas
|		   |__home

Base:
<base href="/GulpTest/">

Script declarado en index.html
<script src="node_modules/systemjs/dist/system.src.js"></script>

<script src="src/systemjs.config.js"></script>
<script>
  System.import('src/main.js').catch(function(err){ console.error(err); });
</script>



Request generado:
http://localhost/GulpTest/ + node_modules/systemjs/dist/system.src.js
						   + src/systemjs.config.js
						   + src/main.js

System.js

paths: {
        // paths serve as alias
        'npm:': 'node_modules/' --> Relativo para que se concatene al base
    },
    // map tells the System loader where to look for things
    map: {
        // our app is within the app folder
        'app': 'src/app', --> Relativo para que se concatene al base
        				  --> Ubicacion de la carpeta app

...
  packages: {
            app: {
                format: 'register',
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'src/systemjs-angular-loader.js' --> Relativo para que se concatene al base
                    }
                }
            },


 Componentes

 import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html' --> Lo busca en el directorio donde esta el file
})
export class AppComponent  {

}