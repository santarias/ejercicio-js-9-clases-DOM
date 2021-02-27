# Ejercicio clases y DOM - GOT

Tendrás que programar esta interfaz de usuario para que refleje el modelo de datos que diseñaste en el anterior ejercicio.

1. Crea una función que recorra el array de personajes creados, y por cada personaje:
    - Clona en memoria el elemento con clase `personaje-dummy`.
    - Quítale la clase `personaje-dummy`.
    - Alimenta el HTML con toda la información del personaje (recuerda también los atributos `alt` de las imágenes). Las fotos están en la carpeta `img`.
    - En el elemento con clase `emoji` inserta uno de estos emojis dependiendo del tipo de personaje: 👑 🗡 🎓 🛡
    - Oculta el icono de vivo o el de muerto según el estado del personaje.
    - Si el personaje está muerto, su foto debe aparecer cabeza abajo (haz el CSS necesario);
    - En la lista con clase `metadata`, haz que sólo aparezcan los `li` correspondientes al personaje.
    - Inserta en la lista con clase `personajes` el elemento que has creado en memoria, con un delay. Los personajes tienen que aparecer en cadena (con 1 segundo de diferencia cada uno).
2. Cuando el usuario haga clic en el botón "muere", tiene que cambiar el estado del personaje, y la interfaz debe reflejar el cambio (llama otra vez a la función creada en el punto 1).
3. Cuando el usuario haga clic en el botón "habla", debes insertar su frase en el párrafo del elemento con clase `comunicaciones`. También debes rellenar la imagen con los valores que tocan. Haz que este elemento `comunicaciones` tenga la clase `on` durante 2 segundos y luego se le quite.
