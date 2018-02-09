$(function() {
    var buzzer = $('#buzzer')[0],
        count = parseInt($('#num').html()),
        count2 = parseInt($('#breakNum').html);

    // buzzer.play();
    
    $('#session').hide();
    
    $('#start').click(function(){
      var counter = setInterval(timer,1000);
      
    // to convert the count into min
       count *= 60;
       count2 *=60;
      
         function timer(){
            $('#start,#title1,#mfiveTime,#mfiveBreak,#afiveTime,#afiveBreak,#breakNum,#title2').hide();
            $('.reset').hide();
            $('#session').show();
            $('#session').html("Session Time: ");
            
            count -=1;
        
                if(count === 0){
                buzzer.play();
                clearInterval(counter);
                $('#num').hide();
                // counter for break time module
                var counter2 =setInterval(breakTimer,1000)
             }
                    
            $('#num').html(count);
            
                if(count % 60 >= 10){
                $('#num').html(Math.floor(count/60) + ":" + count%60);
                } else {
                $('#num').html(Math.floor(count/60) + ":" +"0"+ count%60); 
            }
            
        function breakTimer(){
                $('#session').html("Break Time: ");
                $('#breakNum').show();
               
                count2-=1;
                
                if (count2 ===0){
                    clearInterval(counter2);
                    buzzer.play();
                    $('.reset').show();
                    $('#breakNum,#session').hide();
                }
                $('#breakNum').html(count2);
                  
                if(count % 60 >= 10){
                $('#breakNum').html(Math.floor(count2/60) + ":" + count2%60);
                } else {
                $('#breakNum').html(Math.floor(count2/60) + ":" +"0"+ count2%60); 
            }
            }
          }//timer
            
        });//start click function 
    
    $('#mfiveTime').click(function() {
        if (count > 0) {
            count -= 5;
            $("#num").html(count);
        }
        event.preventDefault();
    });


    $('#afiveTime').click(function() {
        count += 5;
        $("#num").html(count);
        event.preventDefault();
    });
    
     $('#mfiveBreak').click(function() {
        if (count > 0) {
            count -= 5;
            $("#breakNum").html(count);
        }
        event.preventDefault();
    });

    $('#afiveBreak').click(function() {
        count += 5;
        $("#breakNum").html(count);
        event.preventDefault();
    });
    
     $('.reset').click(function(){
        location.reload();
    });
    
});//function
