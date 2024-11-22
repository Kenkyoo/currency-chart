# currency-chart
Currency Chart es una aplicación web que muestra la variación del dólar estadounidense (USD) con respecto a otras monedas del mundo mediante gráficos interactivos. La aplicación consume datos de la API pública Frankfurter y los representa utilizando Chart.js.

Este proyecto está dividido en dos partes:

    Backend: Un servidor construido con Node.js y Express, desplegado en Render.
    Frontend: Una interfaz simple construida con Webpack y JavaScript puro, desplegada en Vercel.

Tecnologías usadas
Frontend:

    JavaScript puro
    Chart.js para gráficos interactivos.
    Webpack para construir el proyecto.

Backend:

    Node.js y Express para el servidor.
    Axios para consumir la API pública.
    Moment.js para manejar fechas.
    CORS para permitir peticiones entre dominios.

Funcionalidades

    Visualización de la variación del dólar (USD) respecto a otras monedas en forma de gráfica.
    Lista de monedas disponibles con su nombre y abreviatura.
    Backend simple que se comunica con la API externa para manejar las peticiones.    

Estructura del proyecto

Backend:

    server.js: Configuración del servidor, rutas para /api/latest y /api/currencies.
    Dependencias principales:
        Express: Framework para el servidor.
        Axios: Para consumir la API externa.
        Moment.js: Para manejo de fechas.

Frontend:

    index.js: Lógica principal para consumir la API del backend y renderizar la interfaz.
    chart.js: Configuración de Chart.js para crear gráficos.
    Webpack: Configuración para empaquetar el proyecto.
    

Créditos

    API usada: Frankfurter
    Proyecto desarrollado por Kenkyoo.
