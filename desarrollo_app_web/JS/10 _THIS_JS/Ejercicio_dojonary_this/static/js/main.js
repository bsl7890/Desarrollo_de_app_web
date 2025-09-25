function login(button) {
    if (button.innerText === "Login") {
        button.innerText = "Logout";
    } else {
        button.innerText = "Login";
    }
}

function hide(button) {
    button.remove();
    alert("Boton 'Add Definition' eliminado");
}

function liked(button) {
    let likeSpan = button.querySelector("span");
    let currentLikes = parseInt(likeSpan.innerText);
    likeSpan.innerText = currentLikes + 1;
    alert("Ninja was liked");
}
