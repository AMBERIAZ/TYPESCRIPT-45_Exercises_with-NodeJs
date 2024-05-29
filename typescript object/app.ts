interface item {
    name: string;
    price: number;
}

//two  objects

const fruit: item ={
    name: 'apple',
    price: 100
}

const vegetable: item ={
    name: 'tomato',
    price: 200
}

console.log(`fruit name: ${fruit.name}, fruit price: ${fruit.price}`);
console.log(`vegetable name: ${vegetable.name}, vegetable price: ${vegetable.price}`);
