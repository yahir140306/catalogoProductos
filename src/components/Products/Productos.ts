interface Producto {
    foto: string;
    nombre: string;
    descripcion: string;
    caracteristicas: string;
    dimensiones: string;
    material: string;
    instrucciones: string;
    precauciones: string;
    precio: number;
    descuento?: number;
}

export const PRODUCTOS: Producto[] = [
    {
        foto: "/Images/Imagen1.png",
        nombre: "Caja de arena sensorial.",
        descripcion: "Caja de arena con diferentes texturas y objeptos para estimular los sentidos. (No incluye los accesrios de la imagen).",
        caracteristicas: "Variedad de texturas, objetos y colores.",
        dimensiones: " 30 x 20 x 10 cm.",
        material: "Madera y arena.",
        instrucciones: "Instrucciones del producto 1",
        precauciones: "Asegurarse que todo esté bien embonado.",
        precio: 320,
    },
    {
        foto: "/Images/Imagen2.png",
        nombre: "Pelota de equilibrio.",
        descripcion: "Pelota para mejorar el equilibrio y la coordinación.",
        caracteristicas: "Pelota de diferentes tamaños y colores.",
        dimensiones: "50-70 cm de diámetro.",
        material: "Plástico.",
        instrucciones: "Supervisar a los niños al usar la pelota.",
        precauciones: "Precauciones del producto 1",
        precio: 299,
    },
    {
        foto: "/Images/Imagen3.png",
        nombre: "Juegos de mesa adaptados.",
        descripcion: "Juegos de mesa diseñados para niños con discapacidad.",
        caracteristicas: "Diferentes niveles de dificultad y adaptaciones.",
        dimensiones: " Varía según el juego.",
        material: "Plástico.",
        instrucciones: "",
        precauciones: "Supervisar a los niños al jugar.",
        precio: 350,
    },
    {
        foto: "/Images/Imagen4.png",
        nombre: "Peluche terapéutico",
        descripcion: "Peluche diseñado para la terapia de niños con discapacidad.",
        caracteristicas: "Diferentes texturas y color café únicamente.",
        dimensiones: "30 cm de altura.",
        material: "Tela y relleno.",
        instrucciones: "",
        precauciones: "Asegurarse de que el peluche sea seguro para los niños.",
        precio: 548,
    },
    {
        foto: "/Images/Imagen5.png",
        nombre: "Juguetes con interruptores grandes.",
        descripcion: "Juguetes con interruptores grandes y fáciles de usar.",
        caracteristicas: "Diferentes colores y formas.",
        dimensiones: "Varía según el juguete.",
        material: "Madera y Plástico.",
        instrucciones: "",
        precauciones: "Supervisar a los niños al usar los juguetes.",
        precio: 350,
    },
    {
        foto: "/Images/Imagen6.png",
        nombre: "Juguetes de agua.",
        descripcion: "Juguetes que utilizan agua para su funcionamiento.",
        caracteristicas: "Diferentes formas y tamaños.",
        dimensiones: "20x30.",
        material: "Plástico.",
        instrucciones: "",
        precauciones: "Asegurarse de que los juguetes sean seguros para los niños y no contengan pequeñas piezas que puedan ser un peligro de asfixia.",
        precio: 70,
    },
    {
        foto: "/Images/Imagen7.png",
        nombre: "Paracaídas de juego.",
        descripcion: "Juguete que simula un paracaídas y puede ser lanzado.",
        caracteristicas: "Diferentes colores y tamaños.",
        dimensiones: "20-30 cm de diámetro.",
        material: "Plástico.",
        instrucciones: "",
        precauciones: "Supervisar a los niños al jugar con el paracaídas.",
        precio: 125,
    },
    {
        foto: "/Images/Imagen8.png",
        nombre: "Juguetes de causa y efecto.",
        descripcion: "Juguetes que enseñan a los niños sobre las consecuencias de sus acciones.",
        caracteristicas: "Diferentes niveles de dificultad y variedad de acciones.",
        dimensiones: "10x25",
        material: "Platico",
        instrucciones: "",
        precauciones: "Asegurarse de que los juguetes sean seguros para los niños y no contengan pequeñas piezas que puedan ser un peligro de asfixia.",
        precio: 150,
    },
    {
        foto: "/Images/Imagen9.png",
        nombre: "Pelota antiestres.",
        descripcion: "Pequeñas pelotas de textura suave y agradable que ayudan a reducir el estrés y la ansiedad.",
        caracteristicas: "Pequeño tamaño y forma esférica, textura suave.",
        dimensiones: "Diámetro: 5-7 cm",
        material: "Plástico suave y flexible.",
        instrucciones: "",
        precauciones: "No recomendado para niños menores de 3 años.",
        precio: 25,
    },
]