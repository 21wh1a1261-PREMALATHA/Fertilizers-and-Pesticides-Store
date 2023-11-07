const basePath = "images";
const productPath = "C:/Users/21wh1/OneDrive/Desktop/10x pro/product.html"; // Updated product path

const shops = [
    {
        name: "Shop 1",
        address: "Shop 1 Address",
        imageSrc: `${basePath}/shop1.jpeg.jpg`,
        productLink: productPath,
    },
    {
        name: "Shop 2",
        address: "Shop 2 Address",
        imageSrc: `${basePath}/shop2.jpeg.jpg`,
        productLink: productPath,
    },
    {
        name: "Shop 3",
        address: "Shop 3 Address",
        imageSrc: `${basePath}/shop3.jpeg.jpg`,
        productLink: productPath,
    },
    {
        name: "Shop 4",
        address: "Shop 4 Address",
        imageSrc: `${basePath}/shop4.jpeg.jpg`,
        productLink: productPath,
    },
    {
        name: "Shop 5",
        address: "Shop 5 Address",
        imageSrc: `${basePath}/shop5.jpeg.jpg`,
        productLink: productPath,
    },
    {
        name: "Shop 6",
        address: "Shop 6 Address",
        imageSrc: `${basePath}/shop6.jpeg.jpg`,
        productLink: productPath,
    },
    // Add more shop details as needed
];

// Function to create and populate the shop details section
function createShopElements() {
    const shopList = document.getElementById("shopList");

    shops.forEach(shop => {
        const shopElement = document.createElement("div");
        shopElement.className = "shop";

        const image = document.createElement("img");
        image.src = shop.imageSrc;
        image.alt = shop.name;
        image.style.width = "200px";
        image.style.height = "100px";

        const name = document.createElement("h2");
        name.textContent = shop.name;

        const address = document.createElement("p");
        address.textContent = "Address: " + shop.address;

        const viewProductsLink = document.createElement("a");
        viewProductsLink.href = shop.productLink;
        viewProductsLink.textContent = "View Products";

        shopElement.appendChild(image);
        shopElement.appendChild(name);
        shopElement.appendChild(address);
        shopElement.appendChild(viewProductsLink);

        shopList.appendChild(shopElement);
    });
}

// Call the function to populate the shop details
createShopElements();

