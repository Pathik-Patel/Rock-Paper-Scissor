 function xyz(yourchoice){

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissor").remove();

    var humanchoice = yourchoice.id;
    var computerchoice = choosen();

    compare(humanchoice,computerchoice);
 }

 function reload(){
     location.reload();
 }
function choosen(){
     var set = ['rock','paper','scissor'];
     var index = Math.floor(Math.random()*3);
     return set[index];
 }

function process(our_choice,comp_choice,result,made_human,made_comp,made_h1){
    
        made_human.src=`images/${our_choice}.png`;
        made_comp.src=`images/${comp_choice}.png`;
        made_h1.innerHTML=result;
        
        document.getElementById("container-2").appendChild(made_human);
        document.getElementById("container-2").appendChild(made_h1);
        document.getElementById("container-2").appendChild(made_comp);

}
function compare(humanchoice,computerchoice){
    
    var made_h1= document.createElement("h1");
    var made_human = document.createElement("img");
    var made_comp = document.createElement("img");
    
    made_h1.setAttribute('id','made_h1');
    made_comp.setAttribute('id','made_comp');
    made_human.setAttribute('id','made_human');

    if (humanchoice=="rock" && computerchoice=="rock"){
        
        process('rock','rock','match tied',made_human,made_comp,made_h1);
        
    }

    else if(humanchoice=="paper" && computerchoice=="paper"){
        process('paper','paper','match tied',made_human,made_comp,made_h1);
        
    }

    else if(humanchoice=="scissor" && computerchoice=="scissor"){
        process('scissor','scissor','match tied',made_human,made_comp,made_h1);
        
    }

    else if(humanchoice=="rock" && computerchoice=="scissor"){
        process('rock','scissor','You won',made_human,made_comp,made_h1);
        
    }

    else if(humanchoice=="rock" && computerchoice=="paper"){
        process('rock','paper','You lose',made_human,made_comp,made_h1);
        
    }

    else if(humanchoice=="paper" && computerchoice=="rock"){
        process('paper','rock','You won',made_human,made_comp,made_h1);
        
    }

    else if(humanchoice=="paper" && computerchoice=="scissor"){
        process('paper','scissor','You lose',made_human,made_comp,made_h1);
        
    }
    else if(humanchoice=="scissor" && computerchoice=="paper"){
        process('scissor','paper','You won',made_human,made_comp,made_h1);
        
    }

    else if(humanchoice=="scissor" && computerchoice=="rock"){
        process('scissor','rock','You lose',made_human,made_comp,made_h1);
        
    }
}