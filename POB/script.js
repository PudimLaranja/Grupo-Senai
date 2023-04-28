

function validate() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    if (login == null || login == "" || login == " ") {
        alert("Campo do usuário está vazio");
        return false;
    }
    else {
        document.form.method = "eviar.php";
        return true
    }
    
}