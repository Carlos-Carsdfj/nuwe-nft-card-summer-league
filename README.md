# Cromo de NFt del perfil de usuario 
## Reto individual semana 2 del Summer Coding League de Nuwe

### User stories 📝
```
Para este reto proponemos lo siguiente:

Task-1: Diseño de la primera card (pequeña==mini NFT), la cual se usará en la búsqueda de perfiles.
Task-2: Maquetar cromo NFT del perfil de usuario (parte delantera y trasera).
Task-3: Agregar un botón al perfil del usuario que permita cambiar la vista del perfil por la vista que se muestra del NFT. Si no se tiene el perfil anterior implementado simplemente es necesario agregar un botón a una pestaña en blanco que haga aparecer la vista de cromo NFT (frontal) + mini NFT.
Task-4: Al hacer doble clic en la card esta a través de la transición que más os guste girarse o desvancerse y que aparezca la parte trasera con el QR al perfil del usuario.
Task-5: El QR debe de generarse de forma automática y tener un link parecido al siguiente: https://nuwe.io/users/[username]
Task-6: Implementar alguna API que cree un imagen de perfil de usuario o que permita al usuario modificar esa imagen al hacer click en el circulo de la imagen de perfil (en recursos tenéis algunas recomendaciones de posibles APIs a implementar)
```


## Solución  al desafío 

  Tecnología usada
  ---------------
 
 * ### ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `#Lenguaje`
    * Javascript
    * Css
    * Html
 * #### ![#c5f015](https://via.placeholder.com/15/c5f015/000000?text=+) `Herramientas` 
    * **Create React App**: Ambiente de desarrollo que pre-configura un proyecto base
      para usar con las dependencias React y ReactDom.


* #### ![#1589F0](https://via.placeholder.com/15/1589F0/000000?text=+) `Dependencias` 
    * **Material-ui/core**: Proporciona una serie de componentes para React js, agilizando el desarrollo 
del diseño de interfaz de usuario así como algunos otros componentes que facilitan algunos comportamientos extensos o repetitivo en material de código.

   * **Material-ui/icons**: Nos provee de todos los iconos que ofrece  **Material**.

   * **Material-ui/styles**: Solución de estilos de Material-ui puede ser usado con cualquier
          componente de React aún si no se esta utilizando material-ui/core en el 
          proyecto.  


   * **Redux**:Contenedor predecible del estado de aplicaciones JavaScript.corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. Además de eso, provee una gran experiencia de desarrollo, gracias a 
          edición en vivo combinado con un depurador sobre una línea de tiempo.  

   * **React-redux**:Este paquete contiene una serie de hooks y funciones que nos facilita la 
          integración  mantenimiento de Redux para proyecto realizados con React.
   
   * **React-router-dom**: Colección de componentes de navegación para usar en Reac, con esta librería
          podemos obtener un enrutamiento dinámico es la magia por así decirlo que nos permite también renderizar componentes mediante rutas        
 
   * **React-qr-code**: Nos prevee de un componente que genera codigo QR con un valor previamente indicado.

   * **React-robohash**:Se encarga de recibir una imagen (Avatar) generado de forma automatica por la api proporcionado por [robohash](https://robohash.org)      
 

    
    
 

## Directorio en arbol  del proyecto

```
├── jsconfig.json
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── Nuwe_logo.png
│   ├── Nuwe_Mono.svg
│   └── robots.txt
├── README.md
├── src
│   ├── App.js
│   ├── App.test.js
│   ├── assets
│   │   └── images
│   │       ├── avatar_me.svg
│   │       ├── avatarMe.svg
│   │       ├── Frame 2 1.svg
│   │       ├── icons
│   │       │   ├── Edit.svg
│   │       │   ├── Home.svg
│   │       │   ├── Nuwe_Letters.png
│   │       │   ├── Nuwe_Mono.svg
│   │       │   ├── Profile.svg
│   │       │   └── Setting.svg
│   │       └── symbol.svg
│   ├── components
│   │   ├── Navbar
│   │   │   └── index.js
│   │   └── User
│   │       ├── Nft
│   │       │   ├── Card
│   │       │   │   └── index.js
│   │       │   ├── EditAvatar
│   │       │   │   └── index.js
│   │       │   ├── index.js
│   │       │   ├── Minicard
│   │       │   │   └── index.js
│   │       │   ├── QrCard
│   │       │   │   └── index.js
│   │       │   └── Radar
│   │       │       └── index.js
│   │       └── Normal
│   │           └── index.js
│   ├── consts
│   ├── hooks
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── pages
│   │   ├── home
│   │   │   └── index.js
│   │   └── profile
│   │       └── index.js
│   ├── reportWebVitals.js
│   ├── routes
│   │   ├── private
│   │   │   └── index.js
│   │   └── public
│   │       └── index.js
│   ├── setupTests.js
│   ├── statusManagement
│   │   └── reducer
│   │       ├── action
│   │       │   └── index.js
│   │       ├── reducer.js
│   │       ├── store.js
│   │       └── type.js
│   ├── styles
│   │   └── global.js
│   └── utils
└── yarn.lock
```

## Sobre la solución 

Como en este desafio no se necesitaba del perfil  completo del usuario ni la interacción con la información del 
usuario se optó por crearlo separado aplicacando  solo las soluciónes solicitadas.





### StatusManagement 

```
│   ├── statusManagement
│   │   └── reducer
│   │       ├── action
│   │       │   └── index.js
│   │       ├── reducer.js
│   │       ├── store.js
│   │       └── type.js
```
En esta sección se enceuntra cualquier componente del que controle o cambie el estado 
podemos conseguir reducer el cual en este proyecto unicamente lo usamos para guardar toda la información del usuario de ejemplo 
la unica acción que tenemos en la app es la de cambiar la imagen del avatar para poder simular el poder cambaiar y guardar dicha imagen 
en el estado.


### Routes
```
│   ├── routes
│   │   ├── private
│   │   │   └── index.js
│   │   └── public
│   │       └── index.js
```

Aqui guardamos por separado toda ruta publica o privada de la app,
unicamente tenemos una ruta objetiva que es la del usuario y no utilizamos 
autentificación por lo que solo estamos usando la carpeta **Public**
aqui va las paginas  que se renderizara en la ruta  **"/user/[nameUser]"**  y **"/"**



### Styles
```
│   ├── styles
│   │   └── global.js
```

Todo estilo global que se use en la app va aqui .

Como estamos usando **Material-ui**  aqui configuramos  la paleta de colores 
 con **createTheme** y lo exportamos para ser usado en el index.js principal 
 de la app por **ThemeProvider** de Material-ui


### Pages

```
│   ├── pages
│   │   ├── home
│   │   │   └── index.js
│   │   └── profile
│   │       └── index.js
```

Aqui se centraran todos los componentes y view que se renderizaran  



### Assets

```
│   ├── assets
│   │   └── images
│   │       ├── avatar_me.svg
│   │       ├── avatarMe.svg
│   │       ├── Frame 2 1.svg
│   │       ├── icons
│   │       │   ├── Edit.svg
│   │       │   ├── Home.svg
│   │       │   ├── Nuwe_Letters.png
│   │       │   ├── Nuwe_Mono.svg
│   │       │   ├── Profile.svg
│   │       │   └── Setting.svg
│   │       └── symbol.svg
```
Todo material estatico como imagenes e iconos usados por la app se encuentran aqui .





### Components 
```
│   ├── components
│   │   ├── Navbar
│   │   │   └── index.js
│   │   └── User
│   │       ├── Nft
│   │       │   ├── Card
│   │       │   │   └── index.js
│   │       │   ├── EditAvatar
│   │       │   │   └── index.js
│   │       │   ├── index.js
│   │       │   ├── Minicard
│   │       │   │   └── index.js
│   │       │   ├── QrCard
│   │       │   │   └── index.js
│   │       │   └── Radar
│   │       │       └── index.js
│   │       └── Normal
│   │           └── index.js
```
Los Componentes estan todos agrupados en esta carpeta podemos ver los siguientes:


* **NavBar**:
    ```
     ├── Navbar
     └── index.js
    ```




 ## Calidad del codigo
### [CodeFactor](https://www.codefactor.io/repository/github/carlos-carsdfj/nuwe-nft-card-summer-league)

  
  


### [Sonarcloud](https://sonarcloud.io/dashboard?id=Carlos-Carsdfj_nuwe-nft-card-summer-league)





    

