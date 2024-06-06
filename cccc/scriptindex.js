document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });

    window.addEventListener('click', function(e) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target)) {
                dropdown.querySelector('.dropdown-content').classList.remove('show');
            }
        });
    });
});

function incrementVisitorCount() {
    let count = localStorage.getItem('visitorCount');
    if (!count) {
        localStorage.setItem('visitorCount', 1);
    } else {
        count = parseInt(count);
        count++;
        localStorage.setItem('visitorCount', count);
    }
}

// Function to display visitor count
function displayVisitorCount() {
    let count = localStorage.getItem('visitorCount');
    if (!count) {
        count = 0;
    }
    document.getElementById('visitorCount').innerText = count;
}

// Call incrementVisitorCount function when the page loads
window.onload = function() {
    incrementVisitorCount();
    displayVisitorCount();
}
