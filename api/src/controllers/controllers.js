const { Product, Category, User, Review } = require("../db.js");
const { v4: uuidv4, validate } = require("uuid");

const productsdb = [
    {   id: uuidv4(),
        name: 'python',
        description: 'En este curso aprenderás desde las bases de Python hacia temas más avanzados del lenguaje',
        image: 'https://',
        ranking : 4,
        createBy:"alejandro sanchez",
        price: 9,
        category: ["2"],
        user: ["2"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'javascript',
        description: 'JavaScript: de cero hasta los detalles (ES5)',
        image: 'https://',
        ranking : 4,
        createBy:"fernando herrera",
        price: 10,
        category: ["2"],
        user: ["2","1","3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'reactjs',
        description: 'Aprende a crear sitios web de forma rápida y sencilla con React Js',
        image: 'https://',
        ranking : 4,
        createBy:"juan toro",
        price: 10,
        category: ["2"],
        user: ["2","1","3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'java',
        description: 'En este curso Aprenderás a programar en el lenguaje de programación Java, con un curso 30% teórico, 70% practico.',
        image: 'https://',
        ranking : 4,
        createBy:"alejandro sanchez",
        price: 9,
        category: ["2"],
        user: ["1"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'c',
        description: 'Aprende a programar desde cero con .NET, C# 10 y Visual Studio 2019, conviértete en programador.',
        image: 'https://',
        ranking : 4,
        createBy:"alan mancera",
        price: 11,
        category: ["2"],
        user: ["3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'unity',
        description: 'Curso práctico desde CERO donde aprenderás el motor Unity® 2021, a programar scripts C# y a desarrollar tu primer juego.',
        image: 'https://',
        ranking : 4,
        createBy:"hector guzman",
        price: 10,
        category: ["2"],
        user: ["2"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'html y css',
        description: 'Aprende a crear páginas web en unas horas, utilizando HTML y CSS.',
        image: 'https://',
        ranking : 4,
        createBy:"guillermo gracia",
        price: 8,
        category: ["2"],
        user: ["2","1","3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'sql',
        description: 'Curso para el Diseñar y crear una base de datos con lenguaje SQL',
        image: 'https://',
        ranking : 4,
        createBy:"delimar reyes",
        price: 8,
        category: ["2"],
        user: ["2","1","3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'angular',
        description: 'Todo lo que necesitas saber de angular utilizando TypeScript y buenas prácticas ofrecidas por el equipo de angular.',
        image: 'https://',
        ranking : 4,
        createBy:"fernando herrera",
        price: 11,
        category: ["2"],
        user: ["3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'nodejs',
        description: 'Rest, despliegues, Heroku, Mongo, Git, GitHub, Sockets, archivos, JWT y mucho más para ser un experto en Node',
        image: 'https://',
        ranking : 4,
        createBy:"fernando herrera",
        price: 11,
        category: ["2"],
        user: ["2","1","3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'photoshop',
        description: 'Aprende todo sobre imagen digital con Photoshop y sé un experto: desde conceptos fundamentales hasta retoques avanzados.',
        image: 'https://',
        ranking : 4,
        createBy:"marlon ceballos",
        price: 11,
        category: ["1"],
        user: ["3"],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'autocad',
        description: 'Conoce el diseño asistido por computadora (CAD), desde la creación de planos hasta mobiliarios tridimensionales.',
        image: 'https://',
        ranking : 4,
        createBy:"miguel soto",
        price: 11,
        category: ["1"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'illustrator',
        description: 'La guía definitiva para crear asombrosos diseños gráficos , dibujos e iconos en Adobe Illustrator CC',
        image: 'https://',
        ranking : 4,
        createBy:"joel combes",
        price: 11,
        category: ["1"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'wordpress',
        description: 'WordPress, Sin saber Programar! Aprende Todo Sobre WordPress y Crea Sitios Web Profesionales.',
        image: 'https://',
        ranking : 4,
        createBy:"diego davila",
        price: 11,
        category: ["1","2"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'blender',
        description: 'En este curso de Blender dominarás el modelado y texturizado para desarrollar tus proyectos personales y profesionales.',
        image: 'https://',
        ranking : 4,
        createBy:"odin fernandez",
        price: 11,
        category: ["1"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'email marketing',
        description: 'Crea campañas de email marketing efectivas y marketing automatizado con mailchimp, aumenta tu base de datos y aumenta tu',
        image: 'https://',
        ranking : 4,
        createBy:"camilo barboza",
        price: 8,
        category: ["3"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'facebook ads',
        description: 'Aprende cómo hacer campañas de Publicidad eficaces en Facebook. Obtén Más Ventas y Más Clientes Rápidamente.',
        image: 'https://',
        ranking : 4,
        createBy:"jose mark",
        price: 11,
        category: ["3"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'cisco ccna',
        description: 'Curso para la Certificacion Cisco CCNA 200-301 en español. Aprende sobre redes con equipos Cisco de forma fácil.',
        image: 'https://',
        ranking : 4,
        createBy:"german hernandez",
        price: 11,
        category: ["4"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'computacion basica',
        description: 'Aprenderás a manipular la computadora de una forma fácil, no importa si nunca has tenido contacto con una computadora.',
        image: 'https://',
        ranking : 4,
        createBy:"jose sosa",
        price: 8,
        category: ["4"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'inteligencia emocional',
        description: 'Porque la intensidad de la vida se mide en emociones',
        image: 'https://',
        ranking : 4,
        createBy:"sandra burgos",
        price: 8,
        category: ["5"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'provocar cambios positivos',
        description: 'Formas efectivas para iniciar y facilitar el cambio, la mejora continua y la excelencia organizacional',
        image: 'https://',
        ranking : 4,
        createBy:"guillermo camino",
        price: 8,
        category: ["6"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'fotografia',
        description: 'El curso online más completo sobre fotografía de habla hispana. Aprende a realizar fotografías como un profesional.',
        image: 'https://',
        ranking : 4,
        createBy:"alvaro perez",
        price: 8,
        category: ["7"],
        user: [],
        stock: 60
    },
    {   id: uuidv4(),
        name: 'guitarra',
        description: 'Aprende paso a paso a tocar la guitarra con este curso práctico. Aprende tocando y olvídate de ejercicios aburridos.',
        image: 'https://',
        ranking : 4,
        createBy:"rodolfo rodriguez",
        price: 8,
        category: ["8"],
        user: [],
        stock: 60
    },
];

 const categoriesdb = [
    {
        id:1,
        name:"diseno",
        description:"cursos de diseno grafico"
    },
    {
        id:2,
        name:"desarrollo",
        description:"cursos de desrrollo web"
    },
    {
        id:3,
        name:"marketing",
        description:"cursos de marketing digital"
    },
    {
        id:4,
        name:"informatica y sofware",
        description:"cursos de informatica y sofware"
    },
    {
        id:5,
        name:"desarrollo personal",
        description:"cursos de desarrollo personal"
    },
    {
        id:6,
        name:"negocios",
        description:"cursos de negocios"
    },
    {
        id:7,
        name:"fotografia",
        description:"cursos de fotografia"
    },
    {
        id:8,
        name:"musica",
        description:"cursos de musica"
    },
]

const userdb = [
    {
        id: "1",
        nickName:'sedwarb',
        fullName:'edwar sebrian',
        mail:'sedwarb@gmail.com',
        phone:'+583206707858',
        address:'cali',
        birthdate:'26/08/1980',
        country:'venezuela',
        verify:true
    },
    {
        id: "2",
        nickName:'mariano',
        fullName:'carlos mariano',
        mail:'mariano@gmail.com',
        phone:'+5492613343474',
        address:'n/a',
        birthdate:'n/a',
        country:'argentina',
        verify:true
    },
    {
        id: "3",
        nickName:'felipe',
        fullName:'felipe de la paz',
        mail:'felipe@gmail.com',
        phone:'+56951592718',
        address:'n/a',
        birthdate:'n/a',
        country:'chile',
        verify:true
    }
]

const reviewdb =[
    {
        description:"mala calidad, no comprar",
        ranking:1,
        userId:3,
        productId:5
    },
    {
        description:"excelente, recomendado",
        ranking:5,
        userId:1,
        productId:2
    },
]

function chargeusers(){
    User.bulkCreate(userdb)
}

async function chargereviews(){
    try{
        await Review.create({
            description:"buen producto",
            ranking:5,
            userId:1,
            productId:1
        })
    }catch(error){console.log(`Error: ${error}`)}
}

function chargecategories(){
    Category.bulkCreate(categoriesdb)
}

function chargeproducts(){
    productsdb.forEach(async (product)=>{
        const productCreated = await Product.create({
            id:uuidv4(),
            name:product.name,
            description:product.description,
            image:product.image,
            ranking:product.ranking,
            createBy:product.createBy,
            price:product.price,
            stock:product.stock
        })
        await productCreated.addCategories(product.category);
        await productCreated.addUsers(product.user);
    })    
}

async function createReview(req,res){
    try{
        if(req.body.reviewDescription!==false){
            await Review.create({
            description:req.body.reviewDescription,
            ranking:req.body.reviewRanking,
            userId:req.body.userId,
            productId:req.body.productId
        })
        res.json("Se creo el review")        
        }
    }catch(error){
        res.send(`Error: ${error}`)
    }
    
}

module.exports= {
    chargecategories,
    chargeproducts,
    chargeusers,
    chargereviews,
    createReview
}