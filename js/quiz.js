var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 
var quizAnswers=[];

var questions=[
{
	question:"What is Tonks’s first name?",
	correctAnswer: "Nymphadora",
	
	answer0:"Narcissa",
	answer1:"Nymphadora",
	answer2:"Bellatrix",
	answer3:"Padma"
},


{question:"Who helps Harry, Ron, and Hermione break into Hogwarts?",
correctAnswer:"Aberforth Dumbledore",

answer0:"Hagrid",
answer1:"Seamus Finnigan",
answer2:"Aberforth Dumbledore",
answer3:"Madam Rosmerta"
},
{
	question:"What kind of creature is Buckbeak?",
	correctAnswer:"A hippogriff",
	answer0:"A three-headed dog",
	answer1:"Spider",
	answer2:"A centaur",
	answer3:"A hippogriff"
},
{
	question: "Where did Harry’s parents live?",
	correctAnswer:"Godric’s Hollow",
	
	answer0:"The Burrow",
	answer1:"Spinners End",
	answer2:"Hogsmeade",
	answer3:"Godric’s Hollow"
},

{
	question: "Who disguised himself as Mad Eye Moody in The Goblet of Fire?",
	correctAnswer:"Barty Crouch Jr.",
	
	answer0:"Ernie McMilian",
	answer1:"Vincent Crabbe",
	answer2:"Barty Crouch Jr.",
	answer3:"Severus Snape"
},

{
	question: "What potion did Harry take in order to get Slughorn's memories?",
	correctAnswer:"Felix Felicis",
	
	answer0:"Felix Felicis",
	answer1:"Essence of Dittany",
	answer2:"Alihotsy Drauht",
	answer3:"Polyjuice Potion"
},

{
	question: "What did Dumbledore leave for Hermione in his will?",
	correctAnswer:"The Tales of Beedle the Bard",
	
	answer0:"An enchanted purse",
	answer1:"The Tales of Beedle the Bard",
	answer2:"A bezoar",
	answer3:"A lighter"
},

{
	question: "What spell is used to save Hermione from the troll in The Sorcerer's Stone?",
	correctAnswer:"Wingardium Leviosa",
	
	answer0:"Stupify",
	answer1:"Petificus Totalus",
	answer2:"Confundus",
	answer3:"Wingardium Leviosa"
},

{
	question: "How did Harry spend his first detention?",
	correctAnswer:"Going into the Forbidden Forest",
	
	answer0:"Going into the Forbidden Forest",
	answer1:"Writing an essay",
	answer2:"Signing autographs",
	answer3:"Cleaning trophies"
},

{
	question: "What happened to Neville's parents that they couldn't remember their son?",
	correctAnswer:"The Cruciatus Curse was used on them",
	
	answer0:"They lost their memories in an apparition accident",
	answer1:"The Confundus Charm was used on them",
	answer2:"The Cruciatus Curse was used on them",
	answer3:"They didn't lose their memories"
},

{
	question: "What school did the Dursley's say they sent Harry to?",
	correctAnswer:"St. Brutus' Secure Centre for Incurably Criminal Boys",
	
	answer0:"St. Brutus' Secure Centre for Incurably Criminal Boys",
	answer1:"Smeltings Academy",
	answer2:"St Grogory's Primary School",
	answer3:"Walworth Academy"
},

{
	question: "What crime was Hagrid committed of in his time at Hogwarts?",
	correctAnswer:"Opening the Chamber of Secrets",
	
	answer0:"Casting a spell on a professor",
	answer1:"Going into the Forbidden Forest",
	answer2:"Killing a girl",
	answer3:"Opening the Chamber of Secrets"
},

{
	question: "What does R.A.B. stand for?",
	correctAnswer:"Regulus Arcturus Black",
	
	answer0:"Regulation of Action Bubotuber",
	answer1:"Regulus Arcturus Black",
	answer2:"Rats and Bats",
	answer3:"Rebellion Against Buckbeak"
},

{
	question: "What is Harry's youngest son's name?",
	correctAnswer:"Albus",
	
	answer0:"Remus",
	answer1:"Sirius",
	answer2:"Albus",
	answer3:"James"
},

{
	question: "What patronus does Luna Lovegood have?",
	correctAnswer:"Hare",
	
	answer0:"Horse",
	answer1:"Stag",
	answer2:"Hare",
	answer3:"Lion"
},

{
	question: "Who was the quidditch commentator in Harry's first years at Hogwarts?",
	correctAnswer:"Lee Jordan",
	
	answer0:"Lee Jordan",
	answer1:"Dean Thomas",
	answer2:"Terry Boot",
	answer3:"Angelina Johnson"
},

{
	question: "What magazine does Luna's father publish?",
	correctAnswer:"The Quibbler",
	
	answer0:"The Practical Potioneer",
	answer1:"Challenges in Charming",
	answer2:"The Daily Prophet",
	answer3:"The Quibbler"
},

{
	question: "What did Hagrid give Harry the first time they met?",
	correctAnswer:"A birthday cake",
	
	answer0:"An Ice Cream",
	answer1:"An Owl",
	answer2:"A Flute",
	answer3:"A birthday cake"
},

{
	question: "What teams played in the Quidditch World Cup that Harry attended?",
	correctAnswer:"Bulgaria and Ireland",
	
	answer0:"Romania and Norway",
	answer1:"England and Ireland",
	answer2:"Bulgaria and Ireland",
	answer3:"France and Spain"
},

{
	question: "What was James Potter’s school nickname?",
	correctAnswer:"Prongs",
	
	answer0:"Moony",
	answer1:"Wormtail",
	answer2:"Prongs",
	answer3:"Padfoot"
}
];

function _(x)
{ 
    return document.getElementById(x);
} 
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;
}

function renderQuestion()
{
	test=_("test");
	if(pos>=questions.length)
	{
		test.innerHTML="<h2>You Got "+correct+" of "+questions.length+"questions correct("+percent()+"%)</h2><button onclick='window.print()'>Print this page</button>";
		_("test_status").innerHTML+="You completing the quiz"; 
		pos=0;
		correct=0;
		return false;
	}
	var bar=document.getElementById("progressBar");//
	_("test_status").innerHTML="Question"+(pos+1)+ "of" +questions.length;
	
	bar.value=(pos+1)

	
quizAnswers[0]=questions[pos].answer0;
quizAnswers[1]=questions[pos].answer1;
quizAnswers[2]=questions[pos].answer2;
quizAnswers[3]=questions[pos].answer3;

console.log("Unshuffled answers" + quizAnswers);

var shuffledAnswers=shuffleArray(quizAnswers);
console.log("shuffled answers"+shuffledAnswers);


	question=questions[pos].question;
	choiceA=shuffledAnswers[0];
	choiceB=shuffledAnswers[1];
	choiceC=shuffledAnswers[2];
	choiceD=shuffledAnswers[3];
	test.innerHTML="<h3>"+question+"</h3>";
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; 
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceB+"' checked> "+choiceB+"<br>"; 
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceC+"' checked> "+choiceC+"<br>"; 
	test.innerHTML +="<input type='radio' name='choices' value='"+choiceD+"' checked> "+choiceD+"<br><br>"; 
	test.innerHTML +="<button onclick='checkAnswer()'>Submit Answer</button>";
}


function checkAnswer()
{
		choices=document.getElementsByName("choices");
		for(var i=0; i<choices.length; i++)
		{
		if(choices[i].checked)
		{
		choice=choices[i].value;
		}
	}
if(choice==questions[pos].correctAnswer)
{
	alert('Correct!');
	correct++;
}
else
{
	alert('Sorry wrong answer. The correct answer is' + questions[pos].correctAnswer);
}
pos++;
renderQuestion();
}


function shuffleArray(array){
	for(var i=array.length-1; i>0;i--)
	{
		var j=Math.floor(Math.random()*(i+1));
		var temp=array[i];
		array[i]=array[j];
		array[j]=temp;
	}
	return array;
}





window.addEventListener("load", renderQuestion, false);