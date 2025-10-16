/**
 * =================================================================== 
 *
 *  Catálogo - Detallistas
 *  JavaScript para funcionalidad del catálogo
 *
 * =================================================================== 
 */

// Datos de productos hardcodeados (en español)
const productosData = [
    {
        id: 1,
        nombre: "Rosas Rojas Clásicas",
        categoria: "rosas",
        precio: 350,
        descripcion: "Hermoso arreglo de 12 rosas rojas frescas, perfectas para expresar amor y pasión.",
        imagen: "images/productos/rosas-rojas.jpg",
        badge: "popular",
        popularidad: 95
    },
    {
        id: 2,
        nombre: "Tulipanes Holandeses",
        categoria: "tulipanes",
        precio: 280,
        descripcion: "Elegante bouquet de tulipanes multicolores importados directamente de Holanda.",
        imagen: "images/productos/tulipanes.jpg",
        badge: "new",
        popularidad: 78
    },
    {
        id: 3,
        nombre: "Girasoles Radiantes",
        categoria: "girasoles",
        precio: 225,
        descripcion: "Vibrante arreglo de girasoles que traerá alegría y luz a cualquier espacio.",
        imagen: "images/productos/girasoles.jpg",
        badge: "",
        popularidad: 82
    },
    {
        id: 4,
        nombre: "Arreglo Nupcial Elegante",
        categoria: "bodas",
        precio: 850,
        descripcion: "Sofisticado arreglo floral diseñado especialmente para bodas, con rosas blancas y eucalipto.",
        imagen: "images/productos/boda-elegante.jpg",
        badge: "premium",
        popularidad: 91
    },
    {
        id: 5,
        nombre: "Bouquet Cumpleaños Feliz",
        categoria: "cumpleanos",
        precio: 320,
        descripcion: "Colorido arreglo mixto perfecto para celebrar cumpleaños, con flores de temporada.",
        imagen: "images/productos/cumpleanos.jpg",
        badge: "",
        popularidad: 75
    },
    {
        id: 6,
        nombre: "Rosas Rosadas Delicadas",
        categoria: "rosas",
        precio: 330,
        descripcion: "Tierno bouquet de rosas rosadas que transmite dulzura y gratitud.",
        imagen: "images/productos/rosas-rosadas.jpg",
        badge: "",
        popularidad: 88
    },
    {
        id: 7,
        nombre: "Tulipanes Rojos Pasión",
        categoria: "tulipanes",
        precio: 295,
        descripcion: "Intenso arreglo de tulipanes rojos que simboliza el amor verdadero.",
        imagen: "images/productos/tulipanes-rojos.jpg",
        badge: "",
        popularidad: 73
    },
    {
        id: 8,
        nombre: "Girasoles Mini Encantadores",
        categoria: "girasoles",
        precio: 180,
        descripcion: "Adorable arreglo de girasoles miniatura, ideal para espacios pequeños.",
        imagen: "images/productos/girasoles-mini.jpg",
        badge: "popular",
        popularidad: 79
    },
    {
        id: 9,
        nombre: "Centro de Mesa Rústico",
        categoria: "arreglos",
        precio: 420,
        descripcion: "Encantador centro de mesa con flores silvestres y elementos naturales.",
        imagen: "images/productos/centro-rustico.jpg",
        badge: "",
        popularidad: 71
    },
    {
        id: 10,
        nombre: "Bouquet Nupcial Clásico",
        categoria: "bodas",
        precio: 750,
        descripcion: "Tradicional bouquet nupcial con peonías blancas y follaje verde.",
        imagen: "images/productos/bouquet-clasico.jpg",
        badge: "",
        popularidad: 89
    },
    {
        id: 11,
        nombre: "Arreglo Infantil Divertido",
        categoria: "cumpleanos",
        precio: 265,
        descripcion: "Alegre arreglo con flores coloridas y elementos decorativos infantiles.",
        imagen: "images/productos/infantil.jpg",
        badge: "new",
        popularidad: 67
    },
    {
        id: 12,
        nombre: "Rosas Blancas Pureza",
        categoria: "rosas",
        precio: 340,
        descripcion: "Elegante arreglo de rosas blancas que simboliza pureza y nuevos comienzos.",
        imagen: "images/productos/rosas-blancas.jpg",
        badge: "",
        popularidad: 85
    },
    {
        id: 13,
        nombre: "Tulipanes Morados Misterio",
        categoria: "tulipanes",
        precio: 310,
        descripcion: "Místico bouquet de tulipanes morados que evoca elegancia y sofisticación.",
        imagen: "images/productos/tulipanes-morados.jpg",
        badge: "",
        popularidad: 76
    },
    {
        id: 14,
        nombre: "Campo de Girasoles",
        categoria: "girasoles",
        precio: 380,
        descripcion: "Impresionante arreglo grande de girasoles que recrea la belleza de un campo dorado.",
        imagen: "images/productos/campo-girasoles.jpg",
        badge: "popular",
        popularidad: 84
    },
    {
        id: 15,
        nombre: "Arreglo Premium Lujo",
        categoria: "arreglos",
        precio: 680,
        descripcion: "Exclusivo arreglo con flores exóticas y acabados de lujo para ocasiones especiales.",
        imagen: "images/productos/premium.jpg",
        badge: "premium",
        popularidad: 93
    },
    {
        id: 16,
        nombre: "Decoración Nupcial Jardín",
        categoria: "bodas",
        precio: 920,
        descripcion: "Hermosa decoración floral estilo jardín inglés para ceremonias al aire libre.",
        imagen: "images/productos/jardin-nupcial.jpg",
        badge: "",
        popularidad: 87
    },
    {
        id: 17,
        nombre: "Celebración Adolescente",
        categoria: "cumpleanos",
        precio: 290,
        descripcion: "Moderno arreglo diseñado especialmente para celebraciones de adolescentes.",
        imagen: "images/productos/adolescente.jpg",
        badge: "",
        popularidad: 69
    },
    {
        id: 18,
        nombre: "Rosas Amarillas Amistad",
        categoria: "rosas",
        precio: 315,
        descripcion: "Brillante bouquet de rosas amarillas que celebra la amistad verdadera.",
        imagen: "images/productos/rosas-amarillas.jpg",
        badge: "",
        popularidad: 81
    },
    {
        id: 19,
        nombre: "Tulipanes Blancos Inocencia",
        categoria: "tulipanes",
        precio: 275,
        descripcion: "Delicado arreglo de tulipanes blancos que transmite paz y serenidad.",
        imagen: "images/productos/tulipanes-blancos.jpg",
        badge: "",
        popularidad: 74
    },
    {
        id: 20,
        nombre: "Girasoles y Lavanda",
        categoria: "girasoles",
        precio: 355,
        descripcion: "Aromático arreglo que combina girasoles vibrantes con relajante lavanda.",
        imagen: "images/productos/girasoles-lavanda.jpg",
        badge: "new",
        popularidad: 80
    },
    {
        id: 21,
        nombre: "Coronas Florales Ceremonia",
        categoria: "arreglos",
        precio: 520,
        descripcion: "Elegantes coronas florales para ceremonias religiosas y eventos especiales.",
        imagen: "images/productos/coronas.jpg",
        badge: "",
        popularidad: 72
    },
    {
        id: 22,
        nombre: "Bouquet Bohemio Libre",
        categoria: "bodas",
        precio: 650,
        descripcion: "Arreglo nupcial de estilo bohemio con flores silvestres y texturas naturales.",
        imagen: "images/productos/bohemio.jpg",
        badge: "",
        popularidad: 83
    },
    {
        id: 23,
        nombre: "Fiesta Temática Princesa",
        categoria: "cumpleanos",
        precio: 340,
        descripcion: "Mágico arreglo temático de princesa con flores rosadas y doradas.",
        imagen: "images/productos/princesa.jpg",
        badge: "popular",
        popularidad: 77
    },
    {
        id: 24,
        nombre: "Rosas Multicolor Alegría",
        categoria: "rosas",
        precio: 385,
        descripcion: "Festivo bouquet con rosas de múltiples colores que irradia alegría.",
        imagen: "images/productos/rosas-multicolor.jpg",
        badge: "",
        popularidad: 86
    }
];

// Variables globales
let productosActuales = [...productosData];
let paginaActual = 1;
const productosPorPagina = 12;

// Elementos DOM
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const sortSelect = document.getElementById('sort-select');
const productsGrid = document.getElementById('products-grid');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
const pageNumbers = document.getElementById('page-numbers');
const showingStart = document.getElementById('showing-start');
const showingEnd = document.getElementById('showing-end');
const totalProducts = document.getElementById('total-products');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    inicializarCatalogo();
    configurarEventListeners();
});

function inicializarCatalogo() {
    aplicarFiltrosYOrdenamiento();
    mostrarProductos();
    actualizarPaginacion();
}

function configurarEventListeners() {
    // Búsqueda
    searchInput.addEventListener('input', debounce(realizarBusqueda, 300));
    searchBtn.addEventListener('click', realizarBusqueda);
    
    // Filtros y ordenamiento
    categoryFilter.addEventListener('change', aplicarFiltrosYOrdenamiento);
    sortSelect.addEventListener('change', aplicarFiltrosYOrdenamiento);
    
    // Paginación
    prevPageBtn.addEventListener('click', irPaginaAnterior);
    nextPageBtn.addEventListener('click', irPaginaSiguiente);
    
    // Enter en búsqueda
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            realizarBusqueda();
        }
    });
}

function realizarBusqueda() {
    aplicarFiltrosYOrdenamiento();
}

function aplicarFiltrosYOrdenamiento() {
    // Empezar siempre desde los datos originales
    let productosFiltrados = [...productosData];
    
    // Aplicar filtro de búsqueda
    const termino = searchInput.value.toLowerCase().trim();
    if (termino !== '') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.nombre.toLowerCase().includes(termino) ||
            producto.descripcion.toLowerCase().includes(termino) ||
            producto.categoria.toLowerCase().includes(termino)
        );
    }
    
    // Aplicar filtro de categoría
    const categoriaSeleccionada = categoryFilter.value;
    if (categoriaSeleccionada !== 'todas') {
        productosFiltrados = productosFiltrados.filter(producto => 
            producto.categoria === categoriaSeleccionada
        );
    }
    
    // Aplicar ordenamiento
    const ordenSeleccionado = sortSelect.value;
    
    switch (ordenSeleccionado) {
        case 'nombre-asc':
            productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case 'nombre-desc':
            productosFiltrados.sort((a, b) => b.nombre.localeCompare(a.nombre));
            break;
        case 'precio-asc':
            productosFiltrados.sort((a, b) => a.precio - b.precio);
            break;
        case 'precio-desc':
            productosFiltrados.sort((a, b) => b.precio - a.precio);
            break;
        case 'popularidad':
            productosFiltrados.sort((a, b) => b.popularidad - a.popularidad);
            break;
    }
    
    productosActuales = productosFiltrados;
    paginaActual = 1; // Resetear a primera página
    mostrarProductos();
    actualizarPaginacion();
}

function mostrarProductos() {
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosParaMostrar = productosActuales.slice(inicio, fin);
    
    if (productosParaMostrar.length === 0) {
        mostrarMensajeSinResultados();
        return;
    }
    
    let html = '';
    
    productosParaMostrar.forEach(producto => {
        html += crearTarjetaProducto(producto);
    });
    
    productsGrid.innerHTML = html;
    productsGrid.classList.add('fade-in');
    
    // Configurar eventos de los botones de productos
    configurarEventosProductos();
}

function crearTarjetaProducto(producto) {
    const badgeHtml = producto.badge ? 
        `<div class="product-badge ${producto.badge}">${obtenerTextoBadge(producto.badge)}</div>` : '';
    
    // Placeholder para imagen (puedes reemplazar con imágenes reales)
    const imagenPlaceholder = `https://via.placeholder.com/280x220/f0f0f0/666666?text=${encodeURIComponent(producto.nombre.substr(0, 10))}`;
    
    return `
        <div class="product-card" data-product-id="${producto.id}">
            <div class="product-image">
                <img src="${imagenPlaceholder}" alt="${producto.nombre}" loading="lazy">
                ${badgeHtml}
            </div>
            <div class="product-info">
                <div class="product-category">${capitalizarPalabras(producto.categoria)}</div>
                <h3 class="product-name">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-price">
                    <span class="currency">$</span>${producto.precio.toLocaleString('es-MX')}
                </div>
                <div class="product-actions">
                    <button class="btn-add-cart" data-product-id="${producto.id}">
                        Agregar al Carrito
                    </button>
                    <button class="btn-quick-view" data-product-id="${producto.id}">
                        <i class="icon ion-android-search"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function obtenerTextoBadge(badge) {
    const badges = {
        'popular': 'Popular',
        'new': 'Nuevo',
        'premium': 'Premium'
    };
    return badges[badge] || badge;
}

function capitalizarPalabras(str) {
    return str.replace(/\b\w/g, c => c.toUpperCase());
}

function mostrarMensajeSinResultados() {
    productsGrid.innerHTML = `
        <div class="no-results">
            <h3>No se encontraron productos</h3>
            <p>No encontramos productos que coincidan con tu búsqueda. Intenta con términos diferentes o explora nuestras categorías.</p>
        </div>
    `;
}

function configurarEventosProductos() {
    // Botones de agregar al carrito
    document.querySelectorAll('.btn-add-cart').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-product-id');
            agregarAlCarrito(productId);
        });
    });
    
    // Botones de vista rápida
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.getAttribute('data-product-id');
            vistaRapida(productId);
        });
    });
    
    // Click en tarjeta completa
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            verDetalleProducto(productId);
        });
    });
}

function agregarAlCarrito(productId) {
    const producto = productosData.find(p => p.id == productId);
    if (producto) {
        // Aquí implementarías la lógica del carrito
        console.log('Agregando al carrito:', producto);
        mostrarNotificacion(`${producto.nombre} agregado al carrito`);
    }
}

function vistaRapida(productId) {
    const producto = productosData.find(p => p.id == productId);
    if (producto) {
        // Aquí implementarías el modal de vista rápida
        console.log('Vista rápida:', producto);
        alert(`Vista rápida de: ${producto.nombre}\n\nPrecio: $${producto.precio}\n\n${producto.descripcion}`);
    }
}

function verDetalleProducto(productId) {
    const producto = productosData.find(p => p.id == productId);
    if (producto) {
        // Aquí implementarías la navegación a página de detalle
        console.log('Ver detalle:', producto);
        alert(`Detalle del producto: ${producto.nombre}\n\nCategoria: ${producto.categoria}\nPrecio: $${producto.precio}\n\n${producto.descripcion}`);
    }
}

function mostrarNotificacion(mensaje) {
    // Implementación simple de notificación
    const notificacion = document.createElement('div');
    notificacion.className = 'notification';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

// Funciones de paginación
function actualizarPaginacion() {
    const totalProductos = productosActuales.length;
    const totalPaginas = Math.ceil(totalProductos / productosPorPagina);
    
    // Actualizar información de paginación
    const inicio = totalProductos > 0 ? (paginaActual - 1) * productosPorPagina + 1 : 0;
    const fin = Math.min(paginaActual * productosPorPagina, totalProductos);
    
    showingStart.textContent = inicio;
    showingEnd.textContent = fin;
    totalProducts.textContent = totalProductos;
    
    // Actualizar botones de navegación
    prevPageBtn.disabled = paginaActual <= 1;
    nextPageBtn.disabled = paginaActual >= totalPaginas;
    
    // Generar números de página
    generarNumerosPagina(totalPaginas);
}

function generarNumerosPagina(totalPaginas) {
    let html = '';
    
    if (totalPaginas <= 7) {
        // Mostrar todas las páginas si son pocas
        for (let i = 1; i <= totalPaginas; i++) {
            html += `<button class="page-number ${i === paginaActual ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }
    } else {
        // Mostrar páginas con puntos suspensivos
        if (paginaActual <= 4) {
            for (let i = 1; i <= 5; i++) {
                html += `<button class="page-number ${i === paginaActual ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }
            html += '<span class="page-number dots">...</span>';
            html += `<button class="page-number" data-page="${totalPaginas}">${totalPaginas}</button>`;
        } else if (paginaActual >= totalPaginas - 3) {
            html += `<button class="page-number" data-page="1">1</button>`;
            html += '<span class="page-number dots">...</span>';
            for (let i = totalPaginas - 4; i <= totalPaginas; i++) {
                html += `<button class="page-number ${i === paginaActual ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }
        } else {
            html += `<button class="page-number" data-page="1">1</button>`;
            html += '<span class="page-number dots">...</span>';
            for (let i = paginaActual - 1; i <= paginaActual + 1; i++) {
                html += `<button class="page-number ${i === paginaActual ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }
            html += '<span class="page-number dots">...</span>';
            html += `<button class="page-number" data-page="${totalPaginas}">${totalPaginas}</button>`;
        }
    }
    
    pageNumbers.innerHTML = html;
    
    // Configurar eventos de números de página
    document.querySelectorAll('.page-number:not(.dots)').forEach(btn => {
        btn.addEventListener('click', function() {
            const pagina = parseInt(this.getAttribute('data-page'));
            if (pagina !== paginaActual) {
                paginaActual = pagina;
                mostrarProductos();
                actualizarPaginacion();
                scrollToTop();
            }
        });
    });
}

function irPaginaAnterior() {
    if (paginaActual > 1) {
        paginaActual--;
        mostrarProductos();
        actualizarPaginacion();
        scrollToTop();
    }
}

function irPaginaSiguiente() {
    const totalPaginas = Math.ceil(productosActuales.length / productosPorPagina);
    if (paginaActual < totalPaginas) {
        paginaActual++;
        mostrarProductos();
        actualizarPaginacion();
        scrollToTop();
    }
}

function scrollToTop() {
    document.getElementById('catalog').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Utilidad debounce para optimizar búsqueda
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}