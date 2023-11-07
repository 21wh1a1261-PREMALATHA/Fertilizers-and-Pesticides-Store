// Define an array of product details
const basePath = "images";
const products = [
    {
        imageSrc: `${basePath}/p1.jpeg`,
        ingredients: "List of ingredients - nitrogen, phosphorus, and potassium.",
        price: "$200.00",
    },
    {
        imageSrc: `${basePath}/p2.jpeg`,
        ingredients: "Ingredients: nitrogen, phosphorus, and potassium.",
        price: "$400.00",
    },
    {
        imageSrc: `${basePath}/p3.jpeg`,
        ingredients: "Ingredients: nitrogen, phosphorus, and potassium.",
        price: "$400.00",
    },
    {
        imageSrc: `${basePath}/p4.jpeg`,
        ingredients: "Ingredients: nitrogen, phosphorus, and potassium.",
        price: "$400.00",
    },
    // Add more product details as needed
];

// Function to create a product container
function createProductContainer(product) {
    const container = document.getElementById("productContainer");

    const productElement = document.createElement("div");
    productElement.className = "container";

    const image = document.createElement("img");
    image.src = product.imageSrc;
    image.alt = "Fertilizer Image";
    image.style.maxWidth = "200px";

    const details = document.createElement("div");
    details.className = "details";

    const ingredients = document.createElement("p");
    ingredients.textContent = product.ingredients;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;

    const buyButton = document.createElement("button");
    buyButton.type = "button";
    buyButton.className = "buy-button";
    buyButton.textContent = "Buy Now";

    details.appendChild(ingredients);
    details.appendChild(price);
    details.appendChild(buyButton);

    productElement.appendChild(image);
    productElement.appendChild(details);

    container.appendChild(productElement);
}

// Create product containers for each product
products.forEach(product => {
    createProductContainer(product);
});
