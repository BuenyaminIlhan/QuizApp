let questions = [{
    'question': 'Welche der folgenden Programmiersprachen ist eine objektorientierte Programmiersprache?',
    'answer1': 'A) Python',
    'answer2': 'B) HTML',
    'answer3': 'C) CSS',
    'answer4': 'D) SQL',
    'right-answer': '1'
},
{
    'question': 'Welche der folgenden Aussagen über JavaScript ist korrekt?',
    'answer1': 'a) JavaScript ist eine objektorientierte Programmiersprache.',
    'answer2': 'B) JavaScript wird nur für die Entwicklung von serverseitigen Anwendungen verwendet.',
    'answer3': 'C) JavaScript wird von allen modernen Browsern unterstützt.',
    'answer4': 'D) JavaScript kann nur für die Erstellung von statischen Webseiten verwendet werden.',
    'right-answer': '3'
},
{
    'question': 'Was ist der Unterschied zwischen "undefined" und "null" in JavaScript?',
    'answer1': 'A) "undefined" bedeutet, dass eine Variable deklariert wurde, aber keinen Wert hat, während "null" explizit einem Objekt als Wert zugewiesen wurde.',
    'answer2': 'B) "undefined" bedeutet, dass eine Variable nicht deklariert wurde, während "null" explizit einem Objekt als Wert zugewiesen wurde.',
    'answer3': 'C) "undefined" und "null" bedeuten dasselbe in JavaScript und können synonym verwendet werden.',
    'answer4': 'D) "undefined" und "null" sind beide Fehlermeldungen, die auf fehlerhaften Code hinweisen.',
    'right-answer': '1'
},
{
    'question': 'Welche der folgenden Methoden wird verwendet, um eine Schleife in JavaScript zu beenden?',
    'answer1': 'A) break;',
    'answer2': 'B) continue;',
    'answer3': 'C) return;',
    'answer4': 'D) exit;',
    'right-answer': '1'
},
{
    'question': 'Was ist der Unterschied zwischen == und === Operatoren in JavaScript?',
    'answer1': 'A) Es gibt keinen Unterschied zwischen den beiden Operatoren.',
    'answer2': 'B) Der == Operator vergleicht den Wert und den Datentyp der Variablen, während der === Operator nur den Wert vergleicht',
    'answer3': 'C) Der === Operator vergleicht den Wert und den Datentyp der Variablen, während der == Operator nur den Wert vergleicht.',
    'answer4': 'D) Der == Operator ist veraltet und sollte nicht mehr verwendet werden.',
    'right-answer': '3'
},
{
    'question': 'Welches der folgenden Konstrukte in JavaScript wird verwendet, um asynchrone Operationen auszuführen und auf das Ergebnis zu warten?',
    'answer1': 'A) Promises',
    'answer2': 'B) Callbacks',
    'answer3': 'C) Arrays',
    'answer4': 'D) Loops',
    'right-answer': '1'
},
{
    'question': 'Welche der folgenden Methoden wird verwendet, um ein Element in JavaScript zu entfernen?',
    'answer1': 'A) element.remove()',
    'answer2': 'B) element.hide()',
    'answer3': 'C) element.delete()',
    'answer4': 'D) element.detach()',
    'right-answer': '1'
},
{
    'question': 'Welche der folgenden Methoden wird verwendet, um eine JavaScript-Funktion in regelmäßigen Abständen auszuführen?',
    'answer1': 'A) setTimeout()',
    'answer2': 'B) setInterval()',
    'answer3': 'C) setImmediate()',
    'answer4': 'D) requestAnimationFrame()',
    'right-answer': '2'
},
{
    'question': 'Was ist der Unterschied zwischen let, const und var in JavaScript?',
    'answer1': 'A) Es gibt keinen Unterschied zwischen let, const und var.',
    'answer2': 'B) var ist veraltet und sollte nicht mehr verwendet werden.',
    'answer3': 'C) let und const sind blockscoped, während var functionscoped ist.',
    'answer4': 'D) const wird verwendet, um Konstanten zu deklarieren, während let und var für Variablen verwendet werden.',
    'right-answer': '3'
},
{
    'question': 'Welches der folgenden Ereignisse wird ausgelöst, wenn ein Benutzer einen Mausklick auf ein Element ausführt und ihn dann loslässt?',
    'answer1': 'A) mouseover',
    'answer2': 'B) mouseout',
    'answer3': 'C) mouseclick',
    'answer4': 'D) mouseup',
    'right-answer': '4'
},
];
let rightanswers = 0;
let currentQuestion = 0;



function init() {

    showAmount()
    showAnswer()
}


function showAmount() {
    document.getElementById('questionAmount').innerHTML = ` von ${questions.length}`;
}
//let questionNumber = 1
// function showQuestion() {
//     let question = questions[currentQuestion]
//     document.getElementById('question').innerHTML = question['question']

// }

function showAnswer() {

    if (currentQuestion >= questions.length) {
        console.log('ende')
        openEnd()
        document.getElementById('amount-of-questions').innerHTML = questions.length
        document.getElementById('right-answers').innerHTML = rightanswers;
    } else {

        let percent = currentQuestion / questions.length;

        percent = percent * 100;
        document.getElementById('progress-bar').innerHTML = `${percent}%`
        document.getElementById('progress-bar').style.width = `${percent}%`
        console.log(percent)
        let question = questions[currentQuestion]

        document.getElementById('currentquestion').innerHTML = currentQuestion + 1;
        document.getElementById('question').innerHTML = question['question']
        document.getElementById('answer1').innerHTML = question['answer1']
        document.getElementById('answer2').innerHTML = question['answer2']
        document.getElementById('answer3').innerHTML = question['answer3']
        document.getElementById('answer4').innerHTML = question['answer4']
    }
}


// Version von Junus

function answer(selection) {
    let question = questions[currentQuestion];                                  // Die Variable question bekommt den Wert questions[0] also die erste stelle im JsonArray question
    let selectedQuestionNumber = selection.slice(-1);                           // Die Variable bekommte den wert von dem angeklickte antwort jedoch nur die letzte Buchstabe.
    let idOfRightAnswer = `answer${question['right-answer']}`;                  // Die Variable bekommt den wert answer(aus dem Json Array in dem right-answer ist den inhalt an der 0 stelle)
    if (selectedQuestionNumber == question['right-answer']) {                   // wenn die Buchstabe von der angeklickten antwort mit der im Json Array hinterlegten Element right-answer identisch ist,
        document.getElementById(selection).parentNode.classList.add('bg-success') // mit der Function .parentNode wird hier die CSS Klasse den übergeordnete container die Klasse zugewiesen. 
        rightanswers++
    } else {                                                                    // wenn nicht
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
    }
    document.getElementById('next-button').disabled = false;                    // enabled den button.
}

function nextQuestion() {

    currentQuestion++
    document.getElementById('next-button').disabled = true;
    resetAnswerButton()
    showAnswer();

}
function resetAnswerButton() {


    document.getElementById('answer1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer1').parentNode.classList.remove('bg-success')

    document.getElementById('answer2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer2').parentNode.classList.remove('bg-success')

    document.getElementById('answer3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer3').parentNode.classList.remove('bg-success')

    document.getElementById('answer4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer4').parentNode.classList.remove('bg-success')
}

function closEnd() {
    document.getElementById('quiz-end').classList.add('dNone')
}

function openEnd() {
    document.getElementById('quiz-end').style = '';
}

/* meine Lösung
let question = questions[currentQuestion]
document.getElementById('question').innerHTML = question['question']
if(currentQuestion == questions.length) {
currentQuestion=0;
}
*/


