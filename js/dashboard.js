const accountBtn = document.getElementById("accountBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

accountBtn.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {

    if (!accountBtn.contains(event.target) &&
        !dropdownMenu.contains(event.target)) {

        dropdownMenu.classList.remove("show");
    }

});
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});