function handleClick(sectionType) {
    switch (sectionType) {
        case 'comuni':
            window.location.href = 'Comunicaciones.html';
            break;
        case 'estudio':
            window.location.href = 'Estudio de mercado.html';
            break;
        case 'foto':
            window.location.href = 'Fotografía.html';
            break;
        case 'illus':
            window.location.href = 'Illustrator.html';
            break;
        case 'html':
            window.location.href = 'Html y Css.html';
            break;
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var imagenes = document.querySelectorAll('.img__subpaginas');
        var lightbox = document.getElementById('lightbox');
        var imagenLightbox = document.querySelector('.imagen__lightbox');
        var cerrar = document.getElementById('cerrar');
    
        imagenes.forEach(function(imagen) {
            imagen.addEventListener('click', function() {
                imagenLightbox.src = this.src;
                lightbox.style.display = 'flex';
            });
        });
    
        cerrar.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    });
    

    document.addEventListener('DOMContentLoaded', function() {
        var imagenes = document.querySelectorAll('.img__subpaginas');
        var lightbox = document.getElementById('lightbox');
        var imagenLightbox = document.querySelector('.imagen__lightbox');
        var tituloLightbox = document.querySelector('.titulo__lightbox');
        var cerrar = document.getElementById('cerrar');
    
        imagenes.forEach(function(imagen) {
            imagen.addEventListener('click', function() {
                imagenLightbox.src = this.src;
                tituloLightbox.textContent = this.alt;
                lightbox.style.display = 'flex';
            });
        });
    
        cerrar.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    });
    
    document.addEventListener('DOMContentLoaded', function () {
        var imagenesCiudad = [
            "Fotografía/Ciudad/Arcoiris 3.jpg",
            "Fotografía/Ciudad/Arcoiris 2.jpg",
            "Fotografía/Ciudad/Café bar (2).jpg",
            "Fotografía/Ciudad/Candelaria 2.jpg",
            "Fotografía/Ciudad/Casa 7ma.jpg",
            "Fotografía/Ciudad/Casa inde.jpg",
            "Fotografía/Ciudad/Cerros y edificios.jpg",
            "Fotografía/Ciudad/cielo centro.jpg",
            "Fotografía/Ciudad/Circunvalar 2.jpg",
            "Fotografía/Ciudad/Circunvalar 4.jpg",
            "Fotografía/Ciudad/Ciudad 2.jpg",
            "Fotografía/Ciudad/Ciudad 3.jpg",
            "Fotografía/Ciudad/Ciudad 4.jpg",
            "Fotografía/Ciudad/Colpatria.jpg",
            "Fotografía/Ciudad/Edificio blanco y negro.jpg",
            "Fotografía/Ciudad/Fuente.jpg",
            "Fotografía/Ciudad/Gatos noche.jpg",
            "Fotografía/Ciudad/Pino.jpg",
            "Fotografía/Ciudad/Planetario a color.jpg",
            "Fotografía/Ciudad/Rotonda de aguas.jpg",
            "Fotografía/Ciudad/Vista ciudad 2.jpg",
            "Fotografía/Ciudad/Iglesia centro.jpg",
        ];

        var imagenesComida = [
           
            "Fotografía/Comida/Bebidas.jpg",
            "Fotografía/Comida/Cocteles.jpg",
            "Fotografía/Comida/Desayuno.jpg",
            "Fotografía/Comida/Postre .jpg",
            "Fotografía/Comida/Ramen.jpg",
            "Fotografía/Comida/Torta.jpg",
            "Fotografía/Comida/Waffle.jpg",
            "Fotografía/Comida/Postre 2.jpg"
        ];

        var imagenesNaturaleza = [
            "Fotografía/Naturaleza/Cielo 10.jpg",
            "Fotografía/Naturaleza/Cielo 2.jpg",
            "Fotografía/Naturaleza/cielo 3.jpg",
            "Fotografía/Naturaleza/Cielo 9.jpg",
            "Fotografía/Naturaleza/Flores 2.jpg",
            "Fotografía/Naturaleza/Fogata.jpg",
            "Fotografía/Naturaleza/Humedal 3.jpg",
            "Fotografía/Naturaleza/Humedal 5.jpg",
            "Fotografía/Naturaleza/Humedal.jpg",
            "Fotografía/Naturaleza/Luna.jpg",
            "Fotografía/Naturaleza/Noche en campo.jpg",
            "Fotografía/Naturaleza/Paisaje 11.jpg",
            "Fotografía/Naturaleza/Paisaje 12.jpg",
            "Fotografía/Naturaleza/Paisaje 13.jpg",
            "Fotografía/Naturaleza/Paisaje 14.jpg",
            "Fotografía/Naturaleza/Paisaje 16.jpg",
            "Fotografía/Naturaleza/Paisaje 18.jpg",
            "Fotografía/Naturaleza/Paisaje 2.jpg",
            "Fotografía/Naturaleza/Paisaje 21.jpg",
            "Fotografía/Naturaleza/Paisaje 22.jpg",
            "Fotografía/Naturaleza/Paisaje 25.jpg",
            "Fotografía/Naturaleza/Paisaje 26.jpg",
            "Fotografía/Naturaleza/Paisaje 3.jpg",
            "Fotografía/Naturaleza/Paisaje 5.jpg",
            "Fotografía/Naturaleza/Paisaje 6.jpg",
            "Fotografía/Naturaleza/Paisaje.jpg",
            "Fotografía/Naturaleza/Parque.jpg",
            "Fotografía/Naturaleza/Pasto 2.jpg",
            "Fotografía/Naturaleza/Quebrada.jpg",
            "Fotografía/Naturaleza/Rocas 2.jpg",
            "Fotografía/Naturaleza/Rocas.jpg",
            "Fotografía/Naturaleza/Santuario 4.jpg",
            "Fotografía/Naturaleza/Termales.jpg",
            "Fotografía/Naturaleza/Tunel.jpg"
        ];

        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'ArrowLeft':
                    // Navegar a la imagen anterior
                    if (currentIndex > 0) {
                        currentIndex--;
                        mostrarImagen();
                    }
                    break;
    
                case 'ArrowRight':
                    // Navegar a la siguiente imagen
                    if (currentIndex < categorias[currentCategoria].length - 1) {
                        currentIndex++;
                        mostrarImagen();
                    }
                    break;
    
                case 'Escape':
                    // Cerrar el lightbox al presionar la tecla Escape
                    lightbox.style.display = 'none';
                    break;
    
                // Puedes agregar más casos para otras teclas si es necesario
    
                default:
                    break;
            }
        });
    
        var lightbox = document.getElementById('lightbox');
        var imagenLightbox = document.querySelector('.imagen__lightbox');
        var cerrar = document.getElementById('cerrar');
        var flechaIzquierda = document.getElementById('flecha__izquierda');
        var flechaDerecha = document.getElementById('flecha__derecha');
    
        var categorias = {
            ciudad: imagenesCiudad,
            comida: imagenesComida,
            naturaleza: imagenesNaturaleza
        };
    
        var currentIndex = 0;
        var currentCategoria = 'ciudad';
    
        function mostrarImagen() {
            imagenLightbox.src = categorias[currentCategoria][currentIndex];
            actualizarEstadoFlechas();
        }
    
        function inicializarGaleria(categoria, index) {
            currentIndex = index || 0;
            currentCategoria = categoria;
            mostrarImagen();
        }
    
        function actualizarEstadoFlechas() {
            flechaIzquierda.style.display = currentIndex === 0 ? 'none' : 'block';
            flechaDerecha.style.display = currentIndex === categorias[currentCategoria].length - 1 ? 'none' : 'block';
        }
    
        var miniaturasCiudad = document.getElementById('miniaturasCiudad');
        var miniaturasComida = document.getElementById('miniaturasComida');
        var miniaturasNaturaleza = document.getElementById('miniaturasNaturaleza');
    
        function actualizarMiniaturas(miniaturas, categoria) {
            miniaturas.innerHTML = '';
            categorias[categoria].forEach(function (imagen, index) {
                var img = new Image();
                img.src = imagen;
                img.classList.add('img__subpaginas');
                img.addEventListener('click', function () {
                    inicializarGaleria(categoria, index);
                    lightbox.style.display = 'flex';
                });
                miniaturas.appendChild(img);
            });
            actualizarEstadoFlechas();
        }
    
        function inicializarMiniaturas() {
            actualizarMiniaturas(miniaturasCiudad, 'ciudad');
            actualizarMiniaturas(miniaturasComida, 'comida');
            actualizarMiniaturas(miniaturasNaturaleza, 'naturaleza');
        }
    
        inicializarMiniaturas();
    
        flechaIzquierda.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
                mostrarImagen();
            }
        });
    
        flechaDerecha.addEventListener('click', function () {
            if (currentIndex < categorias[currentCategoria].length - 1) {
                currentIndex++;
                mostrarImagen();
            }
        });
    
        cerrar.addEventListener('click', function () {
            lightbox.style.display = 'none';
        });
    
        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    });


    document.addEventListener('DOMContentLoaded', function () {
        var menuBtn = document.querySelector('.menu__btn');
        var navMain = document.querySelector('.nav__main ul');
    
        menuBtn.addEventListener('click', function () {
            navMain.classList.toggle('show-menu');
        });
    

        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
    
            if (scrollPosition > 100) {
                navMain.classList.add('sticky');
            } else {
                navMain.classList.remove('sticky');
            }
        });   
    });
    
