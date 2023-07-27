

const list = [
  {
  id: 1,
  nombre: 'El Eternauta',
  marca: 'Héctor Oesterheld',
  precio: 5.599,
  categoria: 'Libros',
  codigo: 'LIB-1',
  imagen: '../img/eternauta.png',
  stock: 7
},
{
  id: 2,
  nombre: '1984',
  marca: 'George Orwell',
  precio: 12.99,
  categoria: 'Libros',
  codigo: 'LB011',
  imagen: "../img/1984.jpeg",
  stock: 10
},
{
  id: 3,
  nombre: "El Gran Gatsby",
  marca: "F. Scott Fitzgerald",
  precio: 9.99,
  categoria: "Libros",
  codigo: "LB012",
  imagen: "../img/ElGranGatsby.jpeg",
  stock: 8
},
{
  id: 4,
  nombre: "Cien años de soledad",
  marca: "Gabriel García Márquez",
  precio: 14.99,
  categoria: "Libros",
  codigo: "LB013",
  imagen: "../img/CienAñosDeSoledad.jpeg",
  stock: 15
},
{
  id: 5,
  nombre: "Matar a un ruiseñor",
  marca: "Harper Lee",
  precio: 11.99,
  categoria: "Libros",
  codigo: "LB014",
  imagen: "../img/MatarAUnRuiseñor.jpeg",
  stock: 5
},
{
  id: 6,
  nombre: "El señor de los anillos",
  marca: "J.R.R. Tolkien",
  precio: 18.99,
  categoria: "Libros",
  codigo: "LB015",
  imagen: "../img/ElSeñorDeLosAnillos.jpeg",
  stock: 12
},
{
  id: 7,
  nombre: "Remera Adidas",
  marca: "Adidas",
  precio: 11.559,
  categoria: "Ropa",
  codigo: "I-AD-01",
  imagen: "../img/RemeraAdidas.webp",
  stock: 30
},
{
  id: 8,
  nombre: "Auriculares Bluetooth",
  marca: "Sony",
  precio: 23.999,
  categoria: "Electronica",
  codigo: "E-AU-01",
  imagen: "../img/AuricularesBluetooth.webp",
stock: 15
},
{
  id: 9,
  nombre: "Zapatillas",
  marca: "Adidas",
  precio: 28.159,
  categoria: "Ropa",
  codigo: "I-ZA-01",
  imagen: "../img/Zapatillas.jpeg",
  stock: 3
},
{
  id: 10,
  nombre: "TEG",
  marca: "Ruibal",
  precio: 4.359,
  categoria: "Juegos",
  codigo: "J-M-01",
  imagen: "../img/TEG.jpeg",
  stock: 10
},
{
  id: 11,
  nombre: "Televisor LED",
  marca: "Sony",
  precio: 599.99,
  categoria: "Electrónica",
  codigo: "TV001",
  imagen: "../img/TelevisorLED.jpeg",
  stock: 20
},
{
  id: 12,
  nombre: "Smartphone",
  marca: "Samsung",
  precio: 799.99,
  categoria: "Electrónica",
  codigo: "PH002",
  imagen: "../img/Smartphone.jpeg",
  stock: 15
},
{
  id: 13,
  nombre: "Auriculares inalámbricos",
  marca: "Apple",
  precio: 199.99,
  categoria: "Electrónica",
  codigo: "AU010",
  imagen: "../img/AuricularesInalambricos.jpeg",
  stock: 30
},
{
  id: 14,
  nombre: "Camiseta",
  marca: "Nike",
  precio: 29.99,
  categoria: "Ropa",
  codigo: "RO001",
  imagen: "../img/Camiseta.jpg",
  stock: 50
},
{
  id: 15,
  nombre: "Pantalones vaqueros",
  marca: "Levi's",
  precio: 79.99,
  categoria: "Ropa",
  codigo: "RO002",
  imagen: "../img/PantalonesVaqueros.jpeg",
  stock: 25
},

{
  id: 16,
  nombre: "Zapatos deportivos",
  marca: "Adidas",
  precio: 99.99,
  categoria: "Ropa",
  codigo: "RO010",
  imagen: "../img/ZapatosDeportivos.jpeg",
  stock: 40
},
{
  id: 17,
  nombre: "Juego de sábanas",
  marca: "Ikea",
  precio: 49.99,
  categoria: "Hogar",
  codigo: "HO001",
  imagen: "../img/JuegoDeSabanas.jpeg",
  stock: 30
},
{
  id: 18,
  nombre: "Sartén antiadherente",
  marca: "T-fal",
  precio: 39.99,
  categoria: "Hogar",
  codigo: "HO002",
  imagen: "../img/SartenAntiadherente.jpeg",
  stock: 20
},

{
  id: 19,
  nombre: "Aspiradora robot",
  marca: "Roomba",
  precio: 299.99,
  categoria: "Hogar",
  codigo: "HO010",
  imagen: "../img/AspiradoraRobot.jpeg",
  stock: 10
},
{
  id: 20,
  nombre: "Muñeca",
  marca: "Barbie",
  precio: 19.99,
  categoria: "Juegos",
  codigo: "JU001",
  imagen: "../img/Muneca.jpeg",
  stock: 40
},
{
  id: 21,
  nombre: "Coche de control remoto",
  marca: "Maisto",
  precio: 39.99,
  categoria: "Juegos",
  codigo: "JU002",
  imagen: "../img/CocheDeControlRemoto.jpeg",
  stock: 15
},
{
  id: 22,
  nombre: "Juego de construcción",
  marca: "LEGO",
  precio: 49.99,
  categoria: "Juegos",
  codigo: "JU010",
  imagen: "../img/JuegoDeConstrucción.jpeg",
  stock: 25
}

] 

/*const getList = new Promise((resolve, reject)=>{
    setTimeout(() => {
      if (Productos.length == 0){
        reject("La lista de productos no esta disponible de momento.")
        
      }
      resolve(Productos)
    },2000);
  });

const list = getList*/

export const getProducts = () =>{
    return new Promise((resolve, reject)=> {
      let error = false

      setTimeout(()=>{
        if(error){
          reject('Error, los productos no estan disponibles')
        }else{
          resolve(list)
        }
        
      },2000 )
    })
  }

  export const getItem = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
          resolve(list.find((item) => item.id === parseInt(id)));
        },2000)
    })
  }
