function findProductById(items, num){
    const findProduct = items.find((product) => {
        return product.id === num
    })
    console.log(findProduct);
}

const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
  ];

const idName = findProductById(products, 102);
  