$("#start").on('click',function(){   
  game.start();
})

$(document).on('click','#end',function(){
  game.done();
})

var questions = [
    {
    question:"What is a function in an object?",
    choices:["Members","Loops","Methods","Variables"],
    answer:"Methods"
    },{
    question:"What is the name of the arguments you pass through the function?",
    choices:["Objects","Arrays","Parameters","Variables"],
    answer:"Parameters"
    },{
    question:"What is the name of the function that we use to add an item in the lists of an array?",
    choices:["Push()","Add()","Pop()","Concat()"],
    answer:"Push()"
    },{
    question:"What is the name of the function that we use to put together the list of values in two Array containers?",
    choices:["Push()","Concat()","Pop()","Add ()"],
    answer:"Concat()"
    },{
    question:"Name a variable that contain properties(attributes) and methods of a given item?",
    choices:["Boolean","Object","Variable","String"],
    answer:"Object"
    },{
    question:"Ready-made code for Javascript is?",
    choices:["JQuery","HTML","CSS","BootStrap"],
    answer:"JQuery"
    },{
    question:"Name the JavaScript keyword refers to the object it belongs to?",
    choices:["ForLoop","This keyword","Objects","Local Variables"],
    answer:"This keyword"
    },{
    question:"Name the JavaScript displaying option which writing its output in the browser console?",
    choices:["Window.alert()","InnerHTML()","Document.write()","Console.log()"],
    answer:"Console.log()"
    },{
    question:"One of the following are not the pop up boxes available in JavaScript?",
    choices:["Alert","Comfirm","Prompt ","Pop"],
    answer:"Pop"   
    },{
    question:"What is the pop function does in the array?",
    choices:["Takesaway an item","Adds an item","Merge two arrays","Float an array"],
    answer:"Takesaway an item"   
    }
]

var game={
  correct: 0,
  incorrect: 0,
  counter: 120,
  countdown: function(){
    game.counter--;
    $('#counter').html(game.counter);
    if(game.counter === 0){
      console.log("Time is up!")
      game.done();
    }
  },
    start:function(){
      timer = setInterval(game.countdown,1000);
      $("#gameContainer").prepend('<h2>Time Remaining: <span id="counter"> 120</span> Seconds</h2>')
      $("#start").remove();
      for (var i=0; i<questions.length; i++) {
          $('#gameContainer').append('<h2>'+questions[i].question +'</h2>');
          for(var j=0; j<(questions[i].answer.length); j++){
            $("#gameContainer").append("<input type='radio' name='question-" + i +"' value= "+ questions[i].choices[j]+">");
            //+ questions[i].choices)[j];
            $("#gameContainer").append(questions[i].choices[j]);
          }
      } 
      $("#gameContainerr").append('<br> <button id="end">DONE</button>')

    }, done: function(){
      $.each($('input[name="questions-1]":checked'),function(){
        if($(this).val()==questions[1].choices){
          game.correct++;
        }else{
        game.incorrect++;
      }
      });
      this.result();
    },
    result:function(){
      clearInterval(timer);
      $("#gameContainer h2").remove();
      $("#gameContainer").html("<h2>All Done!</h2>");
      $("#gameContainer").append("<h3> Correct Answer: " + this.correct + "</h3>");
      $("#gameContainer").append("<h3> Incorrect Answer: " + this.incorrect + "</h3>");
      $("#gameContainer").append("<h3> Unanswered: " +(questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
  }
