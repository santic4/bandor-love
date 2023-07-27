import Productos from "../data/Productos.json";



const getList = new Promise((resolve, reject)=>{
    setTimeout(() => {
      if (Productos.length == 0){
        reject("La lista de productos no esta disponible de momento.")
        
      }
      resolve(Productos)
    },2000);
  });

const list = getList

export const getProducts = () =>{
    return new Promise((resolve, reject) => {
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

  export const getItem = () =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(list[2])
        },2000)
    })
  }
