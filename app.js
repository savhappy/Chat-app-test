$(document).ready(function(){
    $('form').submit(function(e){

        e.preventDefault();

        let getMessage = $("input").val();


        //if message is not empty
        if(getMessage !== "") {
            let newMessage = "<ul class= 'message'>" + getMessage + "</ul>";
            $('.box .inner').prepend(newMessage);
           
            
        }
    })
})

  

$(document).ready(function(){

    function watts() {
        const alanWattsQuotes = ["Trying to define yourself is like trying to bite your own teeth.", "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", "Zen spirituality is just to peel the potatoes.", "Only words and conventions can isolate us from the entirely undefinable something which is everything.", "Meditation is the discovery that the point of life is always arrived at in the immediate moment.", "You didn’t come into this world. You came out of it, like a wave from the ocean. You are not a stranger here.", "Muddy water is best cleared by leaving it alone."]
        $('.box #response').append(alanWattsQuotes[Math.floor(Math.random() * alanWattsQuotes.length)]);
    }

    $('button').click(function(){
        setTimeout(watts,2000)
    })
})        
      
    
 
       

       

          

  