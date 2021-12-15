
let modal1 = document.getElementById('id011');

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

if (!localStorage.getItem('count'))
    localStorage.setItem('count', 0)

let btn = document.getElementById("btnLogin");
btn.addEventListener('click', login)

function login() {
    if (localStorage.getItem('name ' + document.getElementById("1").value)) {
        if (document.getElementById("2").value == localStorage.getItem('pass ' + document.getElementById("1").value)){
            alert('ברוך הבא')
            window.location.assign(url="index.html");
        } 
        else
            alert("סיסמה שגויה!!!");
    } else
        alert("לא קיים כזה משתמש!!!");
}

let btn1 = document.getElementById("btnsignin");
btn1.addEventListener('click', btnsignin)

function btnsignin() {
   
    let c = localStorage.getItem('count')

    localStorage.setItem('name' + c, document.getElementById("3").value)
    localStorage.setItem('pass' + c, document.getElementById("5").value)
    localStorage.setItem('mail' + c, document.getElementById("4").value)

    let x = parseInt(c) + 1
    localStorage.setItem('count', x)


    if (!localStorage.getItem('name ' + document.getElementById("4").value)) {
        localStorage.setItem('name ' + document.getElementById("4").value, document.getElementById("3").value)
        localStorage.setItem('pass ' + document.getElementById("4").value, document.getElementById("5").value)
        window.location.reload();
    } else
        alert("משתמש קיים")

}