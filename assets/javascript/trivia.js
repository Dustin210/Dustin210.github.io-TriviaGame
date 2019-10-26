$("#start").on('click', function(){
  game.start();
    
})

$(document).on('click','#end',function(){
    game.done();
})

var questions =[{
    question:"What was the first full length CGI movie?",
    answers: ["Toy Story", "Antz", "A bug's life", "Frozen"],
    correctAnswer: "Toy Story"
}, {
    question:"Which of these is NOT a name of one of the Spice Girls?",
    answers: ["Sporty Spice", "Scary Spice", "Posh Spice", "Cajun Spice"],
    correctAnswer: "Cajun Spice"

}, {
    question:"Which NBA team won the most titles in the 90's?",
    answers: ["New York Knicks", "Portland", "Spurs", "Lakers", "Chicago Bulls"],
    correctAnswer:"Chicago Bulls"

}, {
    question:"Which group released the hit song, Smells like teen spirit?",
    answers: ["Nirvana", "Blink 182", "Three days grace", "Backstreet boys"],
    correctAnswer:"Nirvana"
}, {
    question:"Which popular Disney featured the song Circle of life",
    answers: ["Alladin", "Hercules", "The Lion King", "Mulan"],
    correctAnswer:"The Lion King"
 
   
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 45,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter==0) {
            console.log("Time is up");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time remaining: <span id="counter">120</span> Seconds</h2>');
        $("#start").remove();
        for(var i = 0; i < questions.length; i++) {
         //    console.log(questions);
            
            $("#subwrapper").append('<h2>' + questions[i].question +'</h2');
         
            for(var j = 0; j < questions[i].answers.length; j++) {
             $("#subwrapper").append("<input type = 'radio' name= 'question- "+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
            }
        } 
        $("#subwrapper").append('<br><button id="end">DONE</button>');  
    },
    done: function() {
        $.each($('input[name="question-0]":checked'),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result(); 
    },
        result: function() {
            clearInterval(timer);
            $("#subwrapper h2").remove();
            $("#subwrapper").html("<h2>Times up!</h2>");
            $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
            $("#subwrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $("#subwrapper").append("<h3>Unanswered: "(questions.length-(this.incorrect+this.correct))+"</h3>");
        
        }
    }
