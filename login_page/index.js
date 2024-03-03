let data = [
    {
        username: "ahmed",
        password: "1234"
    },
    {
        username: "debo",
        password: "1234"
    },
    {
        username: "seif",
        password: "1234"
    }
]

let login_username = document.querySelector('#login-username');
let login_userpassword = document.querySelector("#login-password");
let form = document.querySelector(".wrong");

function submit() {
    if(form.style.display == "none"){
        form.style.display = "flex";
    }
    if (data.some(ele => ele.username == login_username.value && ele.password == login_userpassword.value)) {
        window.location.href = "../Dashboard/index.html";
    } else {
        form.innerHTML  = `
    <div  class="alertt alert alert-danger animate__animated animate__fadeIn" role="alert">
    wrong username or password
    </div>
    `
        setTimeout(() => {
            form.style.display = "none";
        }, 2000)

    }

}


let sign_username = document.querySelector("#sign-username");
let sign_password = document.querySelector("#sign-password");
let form2 = document.querySelector(".www");


function sign() {
    const newUser = {
        username: sign_username.value,
        password: sign_password.value
    }
    form2.innerHTML += `
    <div class="alert alert-success animate__animated animate__fadeIn" role="alert">
    Welcome to SmartPos
    </div>
    `
    data.push(newUser)
    setTimeout(() => {
        window.location.href = "../Dashboard/index.html";
    }, 3000);
}




