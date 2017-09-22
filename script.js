var colors = generateRandomColors(6);

    var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.querySelector("#message");
    var h1 = document.querySelector("h1");
    var resetButton = document.querySelector("#reset");


    resetButton.addEventListener("click", function(){
        // generate all new colors
        colors = generateRandomColors(6);
        // pick a new random color from array
        pickedColor = pickColor();
        // change color display to match picked color
        colorDisplay.textContent = pickedColor;
        // change coklors of squares
        for(var i = 0;  i < squares.length; i++){
            squares[i].style.background = colors[i]; 
        }
    })
    colorDisplay.textContent = pickedColor;

    for (var i = 0; i < squares.length; i++){
        
        // add initial colors to sqaures
        squares[i].style.backgroundColor = colors[i];

        // add event listeners to square
        squares[i].addEventListener("click", function(){
            //grab color of picked color
            var clickedColor = this.style.background;
            // compare color to picked color
            console.log(clickedColor,pickedColor);           
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor); 
                h1.style.background =  clickedColor;     
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again."
            }
        });
    }

    function changeColors(color) {
        // loop through each square
            for(var i = 0; i < colors.length; i++){
                // change each color to match given color
                squares[i].style.background = color;
            }
    }

    function pickColor(){
        var random  = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandomColors(num){
        // make an array
        var arr = []
        // repeat num times
        for(var i = 0; i < num; i++){
            // get random color and push to arr
            arr.push(randomcolor());
        }
        // return the array
        return arr;
    }

    function randomcolor(){
        // pick a red from 0-255 
        var r = Math.floor(Math.random() * 256);
        // pick a green from 0-255         
        var g = Math.floor(Math.random() * 256);
        // pick a blue from 0-255         
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }