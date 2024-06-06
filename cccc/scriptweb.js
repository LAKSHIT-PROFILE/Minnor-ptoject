document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Visitor counter functionality
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount++;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitor_counter').innerHTML = `Visitor Count: ${visitorCount}`;

    // Feedback form functionality
    document.getElementById('feedback_form').addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        // Save the feedback data to localStorage
        let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
        feedbackList.push({ name, email, message });
        localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

        alert('Thank you for your feedback!');
        document.getElementById('feedback_form').reset();
    });
});

function submitFeedback() {
    document.getElementById('feedback_form').dispatchEvent(new Event('submit'));
}
