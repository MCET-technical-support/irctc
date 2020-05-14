function check_fn() {
    var Password_cre = document.getElementById("Password_cre").value
    var con_Password_cre = document.getElementById("con_Password_cre").value

    if ((Password_cre == con_Password_cre) && (Password_cre != null) && (con_Password_cre != null)) {
        alert("Verified")
    }
    else {
        alert("Not varified")
    }
}
function cre_data() {
    var Name = document.getElementById("Name").value
    var Phone = document.getElementById("tel_cre").value
    var date_of_birth = document.getElementById("date").value
    var username = document.getElementById("Username_cre")

    alert("Create account succesfull Back to Login Page")
}