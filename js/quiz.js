// Questions will be asked
const Questions = [{
    id: 0,
    q: "#1. Quelle est la capitale de l'Australie ?",
    a: [{ text: "Canberra", isCorrect: true },
        { text: "Perth", isCorrect: false },
        { text: "Sydney", isCorrect: false },
        { text: "Melbourne", isCorrect: false }
    ]

},
{
    id: 1,
    q: "#2. Et celle du Danemark ?",
    a: [{ text: "Amsterdam", isCorrect: false, isSelected: false },
        { text: "Copenhague", isCorrect: true },
        { text: "Oslo", isCorrect: false },
        { text: "Vienne", isCorrect: false }
    ]

},
{
    id: 2,
    q: "#3. Dans quel pays se situe le Taj Mahal ?",
    a: [{ text: "Au Cambodge", isCorrect: false, isSelected: false },
        { text: "En Inde", isCorrect: true },
        { text: "Au Pakistan", isCorrect: false },
        { text: "Au Paris", isCorrect: false }
    ]

},
{
    id: 3,
    q: "#4. Et dans quelle ville italienne se trouve le Colisee ?",
    a: [{ text: "Pise", isCorrect: false, isSelected: false },
        { text: "Milano", isCorrect: false },
        { text: "Venise", isCorrect: false },
        { text: "Rome", isCorrect: true }
    ]

},
{
    id: 4,
    q: "#5. Quelle langue predomine au Bresil ?",
    a: [{ text: "L'anglais", isCorrect: false, isSelected: false },
        { text: "L'espagnol", isCorrect: false },
        { text: "Le portugais", isCorrect: true },
        { text: "Le Francias", isCorrect: false }
    ]

},
{
    id: 5,
    q: "#6. Combien d'etoiles compte le drapeau americain ?",
    a: [{ text: "50", isCorrect: true, isSelected: false },
        { text: "51", isCorrect: false },
        { text: "52", isCorrect: false },
        { text: "55", isCorrect: false }
    ]

},
{
    id: 6,
    q: "#7. Quel est le plus grand sahara du monde ?",
    a: [{ text: "Ennedi - Tchad", isCorrect: false, isSelected: false },
        { text: "Thar - Inde", isCorrect: false },
        { text: "Atacama - Chili", isCorrect: false },
        { text: "Hoggar - Algerie", isCorrect: true }
    ]

},
{
    id: 7,
    q: "#8. Quel est le lac le plus profond du monde ?",
    a: [{ text: "Baïkal", isCorrect: true, isSelected: false },
        { text: "Caspienne", isCorrect: false },
        { text: "Côme", isCorrect: false },
        { text: "Victoria", isCorrect: false }
    ]

},
{
    id: 8,
    q: "#9. Le plus long fleuve du monde est ?",
    a: [{ text: "LA Dejla", isCorrect: false, isSelected: false },
        { text: "La Zaire", isCorrect: false },
        { text: "L'Amazone", isCorrect: false },
        { text: "Le Nil", isCorrect: true }
    ]

},
{
    id: 9,
    q: "#10. Quelle est la capitale du Canada ?",
    a: [{ text: "Ottawa", isCorrect: false, isSelected: false },
        { text: "Vancouver", isCorrect: false },
        { text: "Montreal", isCorrect: true },
        { text: "Genaive", isCorrect: false }
    ]

},
{
    id: 10,
    q: "#11. Quelle est la capitale de fait de la Suisse ?",
    a: [{ text: "Lausanne", isSelected: false },
        { text: "Berne", isCorrect: true },
        { text: "Zurich", isCorrect: false },
        { text: "Bole", isCorrect: false }
    ]

},
{
    id: 11,
    q: "#12. Dans quel pays ne trouve-t-on pas une importante minorite kurde ?",
    a: [{ text: "La Turquie", isCorrect: false, isSelected: false },
        { text: "La Jordanie", isCorrect: false },
        { text: "La Syrie", isCorrect: false },
        { text: "L'Iran", isCorrect: true }
    ]

},
{
    id: 12,
    q: "#13. Quelle ville compte la plus haute densite de population au monde ?",
    a: [{ text: "Manille", isCorrect: true, isSelected: false },
        { text: "Le Caire", isCorrect: false },
        { text: "Delhi", isCorrect: false },
        { text: "Saint-Gervais", isCorrect: false }
    ]

},
{
    id: 13,
    q: "#14. Lequel de ces pays est le moins densement peuple au monde ?",
    a: [{ text: "L'Arabie Saoudite", isCorrect: false, isSelected: false },
        { text: "Le Belarus", isCorrect: false },
        { text: "La Mongolie", isCorrect: true },
        { text: "L'Astralie", isCorrect: false }
    ]

},
{
    id: 14,
    q: "#15. Quel Etat des Etats-Unis a pour capitale Montgomery ?",
    a: [{ text: "le Neo-Mexique", isCorrect: false },
        { text: "L'Ohio", isCorrect: false },
        { text: "La Californie", isCorrect: false },
        { text: "L'Alabama", isCorrect: true }
    ]

}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";
// Getting the note display section
var note = document.getElementsByClassName("note");
note[0].innerText ="";
numCorrect =1;
var totalQuestions = 5;
var correctAnswers = 0;
// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text 
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "rgb(248, 245, 40)";
    op3.style.backgroundColor = "rgb(248, 245, 40)";
    op4.style.backgroundColor = "rgb(248, 245, 40)";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(248, 245, 40)";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "rgb(248, 245, 40)";
    op4.style.backgroundColor = "rgb(248, 245, 40)";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "rgb(248, 245, 40)";
    op2.style.backgroundColor = "rgb(248, 245, 40)";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "rgb(248, 245, 40)";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor="rgb(248, 245, 40)";
    op2.style.backgroundColor = "rgb(248, 245, 40)";
    op3.style.backgroundColor = "rgb(248, 245, 40)";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "BONNE REPONSE !";
        result[0].style.color = "green";
        note[0].innerHTML= numCorrect++;
        note[0].style.color = "green";
    } else {
        result[0].innerHTML = "MAUVAISE REPONSE !";
        result[0].style.color = "red";
        note[0].innerHTML=numCorrect-- ;
        note[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
start = false;
if (id < 15) {
    id++;
    iterate(id);
    console.log(id);
}

})