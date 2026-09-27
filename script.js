const categories = document.querySelectorAll(".menu-category");

categories.forEach(category => {
    category.addEventListener("click", () => {
        const selectedCategory = document.getElementById(category.dataset.category);
    selectedCategory.style.display = "none";
});