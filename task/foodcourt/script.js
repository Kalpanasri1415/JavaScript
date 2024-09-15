// Sample data for food stalls
const stalls = [
    {
        name: "Pizza Palace",
        menu: ["Margherita", "Pepperoni", "BBQ Chicken"]
    },
    {
        name: "Sushi World",
        menu: ["California Roll", "Nigiri", "Sashimi"]
    },
    {
        name: "Burger Shack",
        menu: ["Cheeseburger", "Veggie Burger", "Bacon Burger"]
    }
];

// Function to display stalls
function displayStalls() {
    const stallsContainer = document.getElementById('stalls');

    stalls.forEach(stall => {
        const stallDiv = document.createElement('div');
        stallDiv.classList.add('stall');

        const stallName = document.createElement('h2');
        stallName.textContent = stall.name;

        const menuList = document.createElement('ul');
        stall.menu.forEach(item => {
            const menuItem = document.createElement('li');
            menuItem.textContent = item;
            menuList.appendChild(menuItem);
        });

        const orderButton = document.createElement('button');
        orderButton.textContent = "Order Now";
        orderButton.onclick = () => {
            alert(`You ordered from ${stall.name}`);
        };

        stallDiv.appendChild(stallName);
        stallDiv.appendChild(menuList);
        stallDiv.appendChild(orderButton);

        stallsContainer.appendChild(stallDiv);
    });
}

// Initialize the food court
document.addEventListener('DOMContentLoaded', () => {
    displayStalls();
});
