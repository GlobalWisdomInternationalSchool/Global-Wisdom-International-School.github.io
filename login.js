<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        function validate()
        {
            var i=document.getElementById("Id").value
            var p=document.getElementById("pass").value
            if (i=="admin" && p=="admin")
            {
            alert("successfully logged in");
            }
            
            else{
                alert("username or password incorrect");
            }
            }
            
        </script>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="login.css">
    {/* <style>
    body {
header{
background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(school1.png);
height:50%;
/* background-size: cover;
background-position: center; */
}
</style> */

</head>
<body>
    <div class="center">
        <h1>Login</h1>
        <form method="post">
            <div class="txt_field">
                <input type= "text" required id="Id" autocomplete="off">
                <span></span>
                <label>Login Id:</label>
                
            </div>
         <div class="txt_field">
            <input type="password" required id="pass">
            <span></span>
            <label>Password:</label>
            </div>
            <div class="form-element">
                <input type="checkbox" id="remember-me">
                <label for="remember-me">Remember me</label>
            </div>
            <input type="submit" value="Login" onclick="validate()">
            {/* <div class="register_link">
            Not Registered yet?<a href="http://127.0.0.1:5500/registration.html"> Register</a>
            </div> */}
        </div>
    </form>
</body>