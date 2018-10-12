/*
function question(){
    var quesNum, endingMsg;
    quesNum = Math.ceil(Math.random() * 10);
    endingMsg = 'Correct Answer!';
    switch(quesNum){
        case 1 : console.log('Is we are in India?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 2 : console.log('Is India is a State?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 3 : console.log('Is we are in USA?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 4 : console.log('Is India is a Country?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 5 : console.log('Is we are in Canada?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 6 : console.log('Is India is a City?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 7 : console.log('Is we are in UK?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 8 : console.log('Is India is a Country?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 9 : console.log('Is we are in Britain?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
        case 10 : console.log('Is Britain is a State?');
                 console.log('1: Yes');
                 console.log('2: No');
                 console.log(endingMsg);
                 break;
    }

}

question();
*/

(function () {

    var isCorrect, question, questions, quesNum, arrLen, correctAns, checkCorrectAns;
    question = function (askQues, ansArr) {
        this.askQues = askQues;
        this.ansArr = ansArr;
    }
    init();

    function nextQues() {
        quesNum = Math.floor(Math.random() * 10);
        console.log(questions[quesNum]['askQues']);
    }

    arrLen = questions[quesNum]['ansArr'].length - 1;
    for (var j = 0; j < arrLen; j++) {
        console.log(questions[quesNum]['ansArr'][j]);
    }

    isCorrect = function () {
        correctAns = questions[quesNum]['ansArr'][arrLen]['correctAns'];
        checkCorrectAns = prompt('Please select the correct answer (just type the number).');
        if (correctAns === checkCorrectAns) {
            init();
        }
    }
    isCorrect();

    function init() {
        questions = [];
        questions[0] = new question('Is we are in India?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[1] = new question('Is India is a State?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[2] = new question('Is Britain is a State?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[3] = new question('Is we are in UAE?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[4] = new question('Is we are in Britain?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[5] = new question('Is we are in UK?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[6] = new question('Is we are in Canada?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[7] = new question('Is Canada is a State?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[8] = new question('Is we are in London?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        questions[9] = new question('Is London is a State?', ['1: Yes', '2: No', {
            'correctAns': 1
        }]);
        nextQues();
    }
})();