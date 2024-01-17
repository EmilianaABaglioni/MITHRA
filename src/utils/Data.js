const  products = [
    {
        id: 1,
        name: "product1",
        price: 7000,
        image: 'https://www.bronze.com.ar/wp-content/uploads/2023/09/IMG_4607-e1697110319749.jpeg',
        stock: 10
    },
    {
        id: 2,
        name: "product2",
        price: 2000,
        image: 'https://i.pinimg.com/736x/a1/3f/2c/a13f2cfe6a1658a84e3e01f3497cfc5e.jpg',
        stock: 10
    },
    {
        id: 3,
        name: "product3",
        price: 8000,
        image: 'https://cbu01.alicdn.com/img/ibank/O1CN013Xee972FEtZ3DaHir_!!2208406698849-0-cib.jpg_640x640q90.jpg?__r__=1662204308879',
        stock: 10
    },
    {
        id: 4,
        name: "product4",
        price: 7000,
        image: 'https://www.bronze.com.ar/wp-content/uploads/2023/09/IMG_4607-e1697110319749.jpeg',
        stock: 10
    },
    {
        id: 5,
        name: "product5",
        price: 2000,
        image: 'https://i.pinimg.com/736x/a1/3f/2c/a13f2cfe6a1658a84e3e01f3497cfc5e.jpg',
        stock: 10
    },
    {
        id: 6,
        name: "product6",
        price: 8000,
        image: 'https://cbu01.alicdn.com/img/ibank/O1CN013Xee972FEtZ3DaHir_!!2208406698849-0-cib.jpg_640x640q90.jpg?__r__=1662204308879',
        stock: 10
    }
];

export const getProducts = () => {
    return new Promise((res, rec)=>{
        setTimeout(()=>{
            res(products)
        }, 3000);
    });
};



