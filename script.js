const text = document.getElementById("text")
const value = document.getElementById("value")
const btn = document.getElementById("btn")
let c = "";
function pal() {
    btn.addEventListener("click", (e) => {

        let t = text.value
        let r = t.split("").reverse().join("")
        if (t === r) {
            text.value =" "
            c = ""
            c += "you enter a palindrome : " + t
        } else {
            c = ""
            c += "you enter a wrong : " + t
        }
        value.innerText = c
    })
}
pal()