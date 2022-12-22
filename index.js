let allMyBtnElements = document.querySelectorAll(".mybtn");


let mint = [
    {
        detailDesc: "HTML Hai Bhai",
    },
    {
        detailDesc: "Buddy dek ",
    },
    {
        detailDesc: "Chal raha hai na",
    },
    {
        detailDesc: "Tho Abb Index.js mai jaa",
    },
    {
        detailDesc: "fir vaha par detailDesc mai content bar sorted life set",
    },
    {
        detailDesc: "Fir Website bana",
    },
    {
        detailDesc: "Party Kar",
    },
    {
        detailDesc: "Uffff 💕 ",
    },

]
{/*
//  <div>
<div id="myAbout" class="about">
<div class="about-content">
<span class="close">&times;</span>
<p>Some text in the Modal..</p>
</div>
</div>
</div> */}
// var btn = document.getElementById("mytn");
// var about = document.getElementById("myAbout");
var about = document.querySelector(".about");
let detailText = document.getElementById("detailText");
var span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//     about.style.display = "block";
// }

// span.onclick = function () {
//     about.style.display = "none";
// }

allMyBtnElements.forEach(e => {
    // console.log(mint[e.id - 1].detailDesc);
    e.addEventListener("click", () => {
        detailText.innerText = mint[e.id - 1].detailDesc;
        about.style.display = "block";
    })
    span.onclick = function () {
        about.style.display = "none";
    }
})

