function() {

var questions = [{
	question: "1. Who was the first female monster to appear in a movie? ",
	choices: ["Countess Marya Zaleska", "Tiffany", "Medusa", "Bride of Frankenstein", "Lily Munster"],
	correctAnswer: "Bride of Frankenstein"
}, {
	question: "2. Which of these killers would you have to fear if you fell asleep? ",
	choices: ["Freddie Kruger", "Gerard Demus", "Bubba Sawyer", "Stu Matcher"],
	correctAnswer: "Freddie Kruger"
}, {
	question: "3. In what year did the original version of When A Stranger Calls debut? ",
	choices: ["1983", "1994", "1979", "1967"],
	correctAnswer: "1979"
}, {
	question: "4. Completely under the control of his family, Bubba Sawyer was the main antagonist in which of these horror classics? ",
	choices: ["The Fog", "I Know What You Did Last Summer", "Scream", "Texas Chainsaw Massacre"],
	correctAnswer: "Texas Chainsaw Massacre"
}, {
	question: "5. Released in 1996, who played Seth Gecko in the hit comedy horror film From Dusk Till Dawn? ",
	choices: ["George Clooney", "Brendan Frasier", "Quentin Tarantino", "Gerard Butler"],
	correctAnswer: "George Clooney"	
}, {
	question: "6. Which of these horror films was not directed by Wes Craven? ",
	choices: ["New Nightmare", "Ginger Snaps", "Red Eye", "Scream"],
	correctAnswer: "Ginger Snaps"	
}, {
	question: "7. Which of these horror flicks does not feature werewolves? ",
	choices: ["Underworld", "Blood and Chocolate", "One Dark Night", "Wild Country"],
	correctAnswer: "One Dark Night"
}, {
	question: "8. In the remade 2008 movie Its Alive, what is the last name of the mother? ",
	choices: ["Johnson", "Williams", "Harker", "Roberts"],
	correctAnswer: "Harker"
}, {
	question: "9. In the 2000 movie Hollow Man, which ability does Sebastian Caine possess? ",
	choices: ["Is a demon", "Personality change", "Invisibility", "Turns into a werewolf"],
	correctAnswer: "Invisibility"
}, {
	question: "10. Directed by John Polson, which of these horror movies stars Robert De Niro as Dr. David Callaway? ",
	choices: ["The Guardian", "Phone Booth", "Hide and Seek", "The Skeleton Key"],
	correctAnswer: "Hide and Seek"
}, {
	question: "11. Released in 1980, what is another title for the slasher movie He Knows You're Alone? ",
	choices: ["Silent Night, Deadly Night", "Blood Wedding", "The Ugly", "Bleed"],
	correctAnswer: "Blood Wedding"
}, {
	question: "12. In the 2006 horror film The Breed, what entity is the killer? ",
	choices: ["Zombies", "Dogs", "Aliens", "Werewolves"],
	correctAnswer: "Dogs"
}, {
	question: "13. Released in 1987, which horro flick used the tagline 'Satan's done waiting'? ",
	choices: ["The Incubus", "Hellraiser", "Cursed", "The Unseen"],
	correctAnswer: "Hellraiser"
}, {
	question: "14. Where is Amityville? ",
	choices: ["San Francisco", "The Florida Keys", "Long Island", "Houston"],
	correctAnswer: "Long Island"
},{
	question: "15. Halloween H20 features a cast member from Psycho. Who is it? ",
	choices: ["Anthony Perkins", "Jamie Lee Curtis", "Norman Bates", "Janet Leigh"],
	correctAnswer: "Janet Leigh"
}, {
	question: "16. What is the name of the motel in Psycho? ",
	choices: ["Bel Air Motel", "Slumberland", "Bates Motel", "Crave Inn"],
	correctAnswer: "Bates Motel"
}, {
	question: "17. Halloween primarily takes place in which state? ",
	choices: ["Ohio", "Indiana", "California", "Illinois"],
	correctAnswer: "Illinois"
}, {
	question: "18. The characters in this horror movie are seen watching Shaun of The Dead. Name the movie. ",
	choices: ["Zombieland", "Final Destination", "Halloween H20", "Scream 4"],
	correctAnswer: "Scream 4"
}, {
	question: "19. What is the name of the serial killer at the start of Child's Play? ",
	choices: ["The Lakeshore Strangler", "The Lincoln Park Loon", "The North Shore Killer", "The South Side Psycho"],
	correctAnswer: "The Lakeshore Strangler"
}, {
	question: "20. Who directed the first Saw film? ",
	choices: ["Robert Rodriguez", "Eli Roth", "James Wan", "Quentin Tarantino"], 
	correctAnswer: "James Wan"
}, {
	question: "21. The Ring is originally based on a 1998 horror movie from which country? ",
	choices: ["Ireland", "Japan", "Australia", "Indonesia"],
	correctAnswer: "Japan"
}, {
	question: "22. How many Friday The 13th movies are there? ",
	choices: ["7", "12", "9", "5"], 
	correctAnswer: "12"
}, {
	question: "23. Before becoming a director, Wes Craven was originally a ... ", 
	choices: ["Fireman", "Mechanic", "College Professor", "Architect"],
	correctAnswer: "College Professor"
}, {
	question: "24. What is the name of the electronics store Shaun works at in Shaun of The Dead? ",
	choices: ["Kruger", "Best Buy", "Foree", "Target"],
	correctAnswer: "Foree"
}, {
	question: "25. Kevin Williamson was inspired to write Scream after watching a documentary about which real-life serial killer? ",
	choices: ["Ted Bundy", "The Gainesville Ripper", "Charles Manson", "The Boston Strangler"],
	correctAnswer: "The Gainesville Ripper"
}];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();

