document.getElementById('login-toggle').addEventListener('click', function() 
{
    toggleForm('login');
});

document.getElementById('signup-toggle').addEventListener('click', function() 
{
    toggleForm('signup');
});

function toggleForm(form) 
{
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');
    var loginToggle = document.getElementById('login-toggle');
    var signupToggle = document.getElementById('signup-toggle');

    if (form === 'login') 
    {
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
        loginToggle.classList.add('active');
        signupToggle.classList.remove('active');
    } 
    else 
    {
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
        signupToggle.classList.add('active');
        loginToggle.classList.remove('active');
    }
}

document.getElementById('signup-form').addEventListener('submit', function(event) 
{
    event.preventDefault();
    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) 
    {
        alert('Passwords do not match!');
    } 
    else 
    {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var userExists = users.some(function(user) 
        {
            return user.email === email;
        });

        if (userExists) 
        {
            alert('User already exists. Please log in.');
        } 
        else 
        {
            users.push({ username: username, email: email, password: password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! You can now log in.');
            toggleForm('login');
        }
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) 
{
    event.preventDefault();
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(function(user) 
    {
        return user.email === email && user.password === password;
    });

    if (user) 
    {
        alert('Login successful!');
        // You can redirect the user to a new page or perform other actions upon successful login
    } 
    else 
    {
        alert('Invalid email or password. Please try again or sign up.');
    }
});
