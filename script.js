    var colors = [
        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",
        "rgb(255, 0, 255)",
        ]
    var squares = document.querySelectorAll(".square");

    for (var i = 0; i < squares.length; i++){
        var pickedColor = colors[3];
        var colorDisplay = document.getElementById("colorDisplay");

        colorDisplay.textContent = pickedColor;
        // add initial colors to sqaures
        squares[i].style.backgroundColor = colors[i];

        // add event listeners to square
        squares[i].addEventListener("click", function(){
            //grab color of picked color
            var clickedColor = this.style.background;
            // compare 
            if (clickedColor === pickedColor){
                alert("correct!!");
            } else {
                alert("Wrong!!");
            }
        });
    }