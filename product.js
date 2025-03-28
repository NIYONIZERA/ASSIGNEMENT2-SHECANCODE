const products=[
    { name: "Laptop", price: 800, category: "Electronics" },
    { name: "Phone", price: 500, category: "Electronics" },
    { name: "Table", price: 200, category: "Furniture" },
    { name: "Chair", price: 100, category: "Furniture" },
    { name: "Headphones", price: 50, category: "Electronics" },
    { name: "Shoes", price: 70, category: "Clothing" },
    { name: "Jacket", price: 120, category: "Clothing" },
    { name: "Watch", price: 250, category: "Accessories" },
    { name: "Backpack", price: 90, category: "Accessories" },
    { name: "Sofa", price: 600, category: "Furniture" }
];

//Use push() to add a new product

products.push({ name: "Desk", price: 150, category: "Furniture"});
console.log("THE NEW PRODUCTS AFTER ADDING NEW ONE ARE:");
console.log(products);

//Use find() to get the details of product named "watch" and display them in the console

let watchProduct=products.find((product)=>product.name==="Watch");
console.log("THE PRODUCT DETAILS OF WATCH IS:");
console.log(watchProduct);

//Use map() to create a new array of product names only.

let productNames=products.map((prod)=>prod.name)
console.log("THE PRODUCT NAMES ARE:");
console.log(productNames);

//Use filter() to get all products that cost more than 100.

let filteredProduct=products.filter((produ)=>produ.price>100);
console.log("ALL PRODUCTS THAT COST MORE THAN 100 ARE:");
console.log(filteredProduct);

//Use forEach() to display each product's name and price in the format:
//"Product:Laptop Price: $800"

let loopProduct=products.forEach((pro)=>{
    
    console.log(`Product:${pro.name} Price:$${pro.price}`);
});

//Use reduce() to calculate the total cost of all products in an array.

let totalCost=products.reduce((sum,product)=>sum+product.price,0);
console.log("THE TOTAL COST OF ALL PRODUCTS ARE:");
console.log(totalCost);
