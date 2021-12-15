let result;

function newTargil()
{

    let x = Math.floor((Math.random() * 20) + 1), y = Math.floor((Math.random() *30) + 1),op= Math.floor((Math.random() * 4) + 1);
    switch (op) {
        case 1:
            result = x + y;
            document.getElementById('exe').innerHTML = `${x} + ${y} =`;
            break;
        case 2:
            result = x - y;
            document.getElementById('exe').innerHTML = `${x} - ${y} =`;
            break;
        case 3:
            result = x * y;
            document.getElementById('exe').innerHTML = `${x} x ${y} =`;
            break;
        case 4:
            result = y;
            document.getElementById('exe').innerHTML = `${y*x} / ${x} =`;
            break;
    }
    document.getElementById("but").onclick = checkSolution;

}
let pi=0;  
let peaces = ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9"];

newTargil();
function checkSolution() {
    let solut = document.getElementById('solution').value;
    if (solut == result) {
        pazelSound.play();
        pi++;
        let so=Math.floor((Math.random() * 5) + 1);
        switch (so) {
            case 1:
                document.getElementById('reflect').innerHTML = "תשובה נכונה";
                break;
            case 2:
                document.getElementById('reflect').innerHTML = "יפה מאד";
                break;
            case 3:
                document.getElementById('reflect').innerHTML = "מצוין ";
                break;
            case 4:
                document.getElementById('reflect').innerHTML = "כל הכבוד ";
                break;
            case 5:
                document.getElementById('reflect').innerHTML = "אלוףףףף";
                break;
        }
        document.getElementById('solution').value="";
        newTargil();
        

        removeCard();
        if(pi==9){
            document.getElementById('reflect').innerHTML = "נצחת!!!!!!!!!!";
            document.getElementById('won').style.display="block";
            document.getElementById('newGame').onclick = newGame;
        }
    }
    else{
        document.getElementById('reflect').innerHTML = "טעות, נסה שוב";
    }
}
function newGame(){
    window.location.reload();
}
function removeCard(){
    let i = Math.floor((Math.random() * peaces.length) )
    let p= peaces[i];
    peaces.splice(i, 1);
    document.getElementById(p).style.display="none";
    console.log(pi)
}