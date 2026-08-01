const ctx = document.getElementById('attendanceChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Absent'],
        datasets: [{
            data: [43, 5],
            backgroundColor: ['#22c55e', '#ef4444'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const modal = document.getElementById("attendanceModal");

const viewButtons = document.querySelectorAll(".view-btn");

const closeIcon = document.querySelector(".close");

const closeButton = document.querySelector(".close-btn");

viewButtons.forEach(button => {

    button.addEventListener("click", () => {

        modal.style.display = "flex";

    });

});

closeIcon.addEventListener("click", () => {

    modal.style.display = "none";

});

closeButton.addEventListener("click", () => {

    modal.style.display = "none";

});

window.addEventListener("click", (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

});