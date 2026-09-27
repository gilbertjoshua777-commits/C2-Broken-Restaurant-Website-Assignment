const categories = document.querySelectorAll(".menu-category");

categories.forEach(category => {
    category.addEventListener("click", () => {
        console.log(category.dataset.category);
    });
});