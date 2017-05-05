/**
 *
 * On load:
 1. Create square div containerSize * containerSize size.
 2. Create inside it numberOfChildren square divs which:
 - do no overlap each other
 - are fully contained within the container div
 - do not stretch container and cause showing scroll
 - has size childSize * childSize
 - has random background color
 - when you hover it longer than 2 seconds it disappears
 3. Use only pure Javascript (no jQuery etc.).
 4. In case container cannot fit numberOfChildren,
 render as much children as container can fit and show message
 for user about actual rendered number of children inside container.


 Example how it should look: https://goo.gl/ikveME
 */
function drawContainer(containerSize, childSize, numberOfChildren) {
    var mainsquare = document.getElementById("mainSquare");
    mainsquare.style.width = containerSize + "px";
    mainsquare.style.height = containerSize + "px";
    mainsquare.style.background = " #f3f3f3";//set the Background color of mainSquare
    //find out number of rows and columns
    var row = Math.floor(containerSize / childSize);
    var column = row;
    var numChild = 0;
    for (var x = 0; x < row; x++) {
        if (numChild == numberOfChildren) {
            break;
        }
        for (var y = 0; y < column; y++) {
            if (numChild == numberOfChildren) {
                break;
            }
            var ele = document.createElement("div");
            mainsquare.appendChild(ele);
            ele.className = "unit";
            ele.addEventListener("mouseover", mouseOver);
            ele.style.height = childSize + "px";
            ele.style.width = childSize + "px";
            ran_col(ele);
            numChild++;
        }
    }
    document.getElementById("message").innerHTML = "only " + numChild + " will be rendered";
}
//On mouse over
function mouseOver(e) {
    window.setTimeout(function () {
        //disappear Element after 2 seconds
        e.target.style.visibility = "hidden";
    }, 2000);
}
//Random color
function ran_col(element) {
    var color = '#'; // hexadecimal starting symbol
    var letters = ['000000', 'FF0000', '00FF00', '0000FF', 'FFFF00', '00FFFF', 'FF00FF', 'C0C0C0']; //Set your colors here
    color += letters[Math.floor(Math.random() * letters.length)];
    element.style.background = color; // Setting the random color on your div element.
}
drawContainer(200, 50, 20);


//     .unit {
//     display: inline-block;
//     float: left
// }


/**
 * Test set
 *
 * drawContainer(310, 200, 4);
 * drawContainer(413, 42, 30);
 * drawContainer(200, 300, 2);
 */
