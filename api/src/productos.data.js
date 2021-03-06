const products = [
    {   id: 1,
        name: 'python',
        description: 'En este curso aprenderás desde las bases de Python hacia temas más avanzados del lenguaje',
        image: 'product_1',
        ranking : 4,
        createBy:"alejandro sanchez",
        price: 9,
        category: '[2]',
        stock: 60
    },
    {   id: 2,
        name: 'javascript',
        description: 'JavaScript: de cero hasta los detalles (ES5)',
        image: 'product_2',
        ranking : 4,
        createBy:"fernando herrera",
        price: 10,
        category: '[2]',
        stock: 60
    },
    {   id: 3,
        name: 'reactjs',
        description: 'Aprende a crear sitios web de forma rápida y sencilla con React Js',
        image: 'product_3',
        ranking : 4,
        createBy:"juan toro",
        price: 10,
        category: '[2]',
        stock: 60
    },
    {   id: 4,
        name: 'java',
        description: 'En este curso Aprenderás a programar en el lenguaje de programación Java, con un curso 30% teórico, 70% practico.',
        image: 'product_4',
        ranking : 4,
        createBy:"alejandro sanchez",
        price: 9,
        category: '[2]',
        stock: 60
    },
    {   id: 5,
        name: 'c',
        description: 'Aprende a programar desde cero con .NET, C# 10 y Visual Studio 2019, conviértete en programador.',
        image: 'product_5',
        ranking : 4,
        createBy:"alan mancera",
        price: 11,
        category: '[2]',
        stock: 60
    },
    {   id: 6,
        name: 'unity',
        description: 'Curso práctico desde CERO donde aprenderás el motor Unity® 2021, a programar scripts C# y a desarrollar tu primer juego.',
        image: 'product_6',
        ranking : 4,
        createBy:"hector guzman",
        price: 10,
        category: '[2]',
        stock: 60
    },
    {   id: 7,
        name: 'html y css',
        description: 'Aprende a crear páginas web en unas horas, utilizando HTML y CSS.',
        image: 'product_7',
        ranking : 4,
        createBy:"guillermo gracia",
        price: 8,
        category: '[2]',
        stock: 60
    },
    {   id: 8,
        name: 'sql',
        description: 'Curso para el Diseñar y crear una base de datos con lenguaje SQL',
        image: 'product_8',
        ranking : 4,
        createBy:"delimar reyes",
        price: 8,
        category: '[2]',
        stock: 60
    },
    {   id: 9,
        name: 'angular',
        description: 'Todo lo que necesitas saber de angular utilizando TypeScript y buenas prácticas ofrecidas por el equipo de angular.',
        image: 'product_9',
        ranking : 4,
        createBy:"fernando herrera",
        price: 11,
        category: '[2]',
        stock: 60
    },
    {   id: 10,
        name: 'nodejs',
        description: 'Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node',
        image: 'product_10',
        ranking : 4,
        createBy:"fernando herrera",
        price: 11,
        category: '[2]',
        stock: 60
    },
    {   id: 11,
        name: 'photoshop',
        description: 'Aprende todo sobre imagen digital con Photoshop y sé un experto: desde conceptos fundamentales hasta retoques avanzados.',
        image: 'product_11',
        ranking : 4,
        createBy:"marlon ceballos",
        price: 11,
        category: '[1]',
        stock: 60
    },
    {   id: 12,
        name: 'autocad',
        description: 'Conoce el diseño asistido por computadora (CAD), desde la creación de planos hasta mobiliarios tridimensionales.',
        image: 'product_12',
        ranking : 4,
        createBy:"miguel soto",
        price: 11,
        category: '[1]',
        stock: 60
    },
    {   id: 13,
        name: 'illustrator',
        description: 'La guía definitiva para crear asombrosos diseños gráficos , dibujos e iconos en Adobe Illustrator CC',
        image: 'product_13',
        ranking : 4,
        createBy:"joel combes",
        price: 11,
        category: '[1]',
        stock: 60
    },
    {   id: 14,
        name: 'wordpress',
        description: 'WordPress, Sin saber Programar! Aprende Todo Sobre WordPress y Crea Sitios Web Profesionales.',
        image: 'product_14',
        ranking : 4,
        createBy:"diego davila",
        price: 11,
        category: '[1,2]',
        stock: 60
    },
    {   id: 15,
        name: 'blender',
        description: 'En este curso de Blender dominarás el modelado y texturizado para desarrollar tus proyectos personales y profesionales.',
        image: 'product_15',
        ranking : 4,
        createBy:"odin fernandez",
        price: 11,
        category: '[1]',
        stock: 60
    },
    {   id: 16,
        name: 'email marketing',
        description: 'Crea campañas de email marketing efectivas y marketing automatizado con mailchimp, aumenta tu base de datos y aumenta tu',
        image: 'product_16',
        ranking : 4,
        createBy:"camilo barboza",
        price: 8,
        category: '[3]',
        stock: 60
    },
    {   id: 17,
        name: 'facebook ads',
        description: 'Aprende cómo hacer campañas de Publicidad eficaces en Facebook. Obtén Más Ventas y Más Clientes Rápidamente.',
        image: 'product_17',
        ranking : 4,
        createBy:"jose mark",
        price: 11,
        category: '[3]',
        stock: 60
    },
    {   id: 18,
        name: 'cisco ccna',
        description: 'Curso para la Certificacion Cisco CCNA 200-301 en español. Aprende sobre redes con equipos Cisco de forma fácil.',
        image: 'product_18',
        ranking : 4,
        createBy:"german hernandez",
        price: 11,
        category: '[4]',
        stock: 60
    },
    {   id: 19,
        name: 'computacion basica',
        description: 'Aprenderás a manipular la computadora de una forma fácil, no importa si nunca has tenido contacto con una computadora.',
        image: 'product_19',
        ranking : 4,
        createBy:"jose sosa",
        price: 8,
        category: '[4]',
        stock: 60
    },
    {   id: 20,
        name: 'inteligencia emocional',
        description: 'Porque la intensidad de la vida se mide en emociones',
        image: 'product_20',
        ranking : 4,
        createBy:"sandra burgos",
        price: 8,
        category: '[5]',
        stock: 60
    },
    {   id: 21,
        name: 'provocar cambios positivos',
        description: 'Formas efectivas para iniciar y facilitar el cambio, la mejora continua y la excelencia organizacional',
        image: 'product_21',
        ranking : 4,
        createBy:"guillermo camino",
        price: 8,
        category: '[6]',
        stock: 60
    },
    {   id: 22,
        name: 'fotografia',
        description: 'El curso online más completo sobre fotografía de habla hispana. Aprende a realizar fotografías como un profesional.',
        image: 'product_22',
        ranking : 4,
        createBy:"alvaro perez",
        price: 8,
        category: '[7]',
        stock: 60
    },
    {   id: 23,
        name: 'guitarra',
        description: 'Aprende paso a paso a tocar la guitarra con este curso práctico. Aprende tocando y olvídate de ejercicios aburridos.',
        image: 'product_23',
        ranking : 4,
        createBy:"rodolfo rodriguez",
        price: 8,
        category: '[7]',
        stock: 60
    },
];