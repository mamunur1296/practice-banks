document.getElementById("btn-submit").addEventListener("click", function () {
    const InputEmail1 = document.getElementById("InputEmail1");
    const emailAddrass = InputEmail1.value;


    const InputPassword1 = document.getElementById("InputPassword1");
    const gatePassword = InputPassword1.value;

    if (emailAddrass === "mamunurrushid@gmail.com" && gatePassword === "mamun") {
        console.log("window.location.href = 'userpage.html'");
        window.location.href = "userpage.html";
    }
    else {
        alert("invalid");
    }
})