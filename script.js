const categories = document.querySelectorAll(".menu-category");

categories.forEach(category => {
    category.addEventListener("click", () => {
        const selectedItems = menuItems[category.dataset.category];
        const selectedCategory = document.getElementById(category.dataset.category);
       const menuList = document.createElement("ul");

        selectedItems.forEach(item => {
            const menuItem = document.createElement("li");
            menuItem.textContent = item;
            menuList.appendChild(menuItem);
        }); 
        selectedCategory.appendChild(menuList);
});
});

const appetizers = [
    "Mozzarella Sticks",
    "Jalapeño Poppers",
    "Panko Shrimp",
    "Onion Rings",
    "Any Side À la Carte"
];

const entrees = [
    "Burger Meal",
    "Chicken Sandwich Dinner",
    "Chili",
    "Steak Dinner",
    "Chicken Strip Dinner",
    "Spaghetti Dinner"
];

const drinks = [
    "Coffee",
    "Tea",
    "Lemonade",
    "Milk",
    "Soda",
    "Beer"
];

const desserts = [
    "Slice of Pie",
    "Cheesecake",
    "Scoop of Ice Cream"
];

const menuItems = {
    appetizers: appetizers,
    entrees: entrees,
    beverages: drinks,
    desserts: desserts
};