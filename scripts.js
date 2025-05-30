$(document).ready(function () {
    $(".read-more").click(function (e) {
        e.preventDefault(); 
        const blogId = $(this).closest(".blog-post").data("blog-id"); 
        window.location.href = `blog-detail.html?id=${blogId}`; 
    });
});
$(document).ready(function () {
    $("#contactForm").submit(function (e) {
        e.preventDefault(); 

      
        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const message = $("#message").val();

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        alert("Thank you for contacting us! We will get back to you soon.");
        $("#contactForm")[0].reset(); 
    });
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin123') {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
});
