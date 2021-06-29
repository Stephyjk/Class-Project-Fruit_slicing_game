var playing = false;
var score;
var trials_left;
var step;
var action;
var fruits = ['apple','banana','cherries','grapes','kiwi','lime','mango','orange','pear','pineapple','watermelon'];

$(function(){
    $('#startreset').click(function(){
        if(playing == true){
            location.reload();
        }else{
            playing = true;
            score = 0;
            $('#scorevalue').html(score);
            $('#trialsleft').show();
            trials_left = 3;
            addHearts();
            $('#gameover').hide();
            $('#startreset').html('Reset Game');
            startAction();
        }
    });


$('#fruit1').mouseover(function(){
    score ++;
    $('#scorevalue').html(score);
    // document.getElementById('slicesound').play();
    $('#slicesound')[0].play();
    clearInterval(action);
    $('#fruit1').hide('explode', 500);
    setTimeout(startAction, 500);
});

function addHearts(){
    $('#trialsleft').empty();
    for(i=0;i<trials_left;i++){
        $('#trialsleft').append('<img src="images/hearts2.png" class="life">');
    }
}

function startAction(){
        // $('#game_screen').append('<img src="images/apple.png" class="fruit">');
    $('#fruit1').show();
    chooseFruit(); 
    $('#fruit1').css({'left':Math.round(700*Math.random()),'top':-40})
    step = 1 + Math.round(5*Math.random());
    action = setInterval(function(){
        $('#fruit1').css('top',$('#fruit1').position().top + step);
        if($('#fruit1').position().top > $('#game_screen').height()){
            if(trials_left > 1){
                $('#fruit1').show();
                chooseFruit(); 
                $('#fruit1').css({'left':Math.round(700*Math.random()),'top':-40})
                step = 1 + Math.round(5*Math.random());
                trials_left -- ;
                addHearts();
            }
            else{
                playing = false;
                $('#startreset').html('Start Game');
                $('#gameover').show();
                $('#gameover').html('<p>Game Over!</p><p>Your score is: ' + score + '!</p>');
                $('#trialsleft').hide();
                stopFruit();
            }
            
        }
    }, 10);
    
}

function chooseFruit(){
    $('#fruit1').attr('src','images/' + fruits[Math.round(10*Math.random())] + '.png');
} 

function stopFruit(){
    clearInterval(action);
    $('#fruit1').hide();
}

});


