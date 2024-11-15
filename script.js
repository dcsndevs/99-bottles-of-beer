function viewLyrics(){

    for(i=99; i>=0; i--){

        if(i==0){
            document.getElementById("lyrics").innerHTML+= "No more bottles of beer on the wall, no more bottles of beer<br>";
        }
        else{
            document.getElementById("lyrics").innerHTML+= i +" bottles of beer on the wall, "+ i + " bottles of beer <br>";
        }
        
        i--; //subtract one bottle
        if(i==0){
            document.getElementById("lyrics").innerHTML+= "Take one down and pass it around, no more bottles of beer on the wall<br><br>";
        }
        else if(i==-1){
            document.getElementById("lyrics").innerHTML+= "Go to the store and buy some more, 99 bottles of beer on the wall<br><br>";
        }
        else{
            document.getElementById("lyrics").innerHTML+= "Take one down and pass it around, "+i+ " bottles of beer on the wall <br><br>";
        }
        
        i++; //add another bottle before loop starts again
    


    }
    
    const button = document.querySelector("button");
    if (button) {
        button.style.display = "none";
    }}

