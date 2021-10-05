const FIELD_SIZE_X = 20;
const FIELD_SIZE_Y = 20;

let snake = [];

let gameIsRunning = false;
let direction = "y+";
let snakeSpeed = 300;
let snakeTimer;
let score = 0;



function init() {
    gameTable();

    document.getElementById("snake-start").addEventListener("click", startingGame);
    document.getElementById("snake-renew").addEventListener("click", refreshGame);

    addEventListener("keydown", changeDirection);
}


function startingGame() {
    gameIsRunning = true;
    replay();
    snakeTimer = setInterval(move, snakeSpeed);
    setTimeout(createFood, 3000);		// разбрасываем печеньки
}


function refreshGame() {
    location.reload();
}


function gameTable() {
    let gameTable = document.createElement("table");
    gameTable.setAttribute("class", "game-table");

    //в цикле генерируем ячейки игровой таблицы
    for (let i = 0; i < FIELD_SIZE_Y; i++) {
        let row = document.createElement("tr");
        row.setAttribute("class", "game-table-row row-" + i);

        for (let j = 0; j < FIELD_SIZE_X; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("class", "game-table-cell cell-" + j + "-" + i);

            row.appendChild(cell);
        }

        gameTable.appendChild(row);
    }

    document.getElementById("snake-field").appendChild(gameTable);
}


function replay() {

    let startCoordX = Math.floor(FIELD_SIZE_X / 2);
    let startCoordY = Math.floor(FIELD_SIZE_Y / 2);

    let snakeHead = document.getElementsByClassName("cell-" + startCoordX + "-" + startCoordY)[0];
    let prevSnakeHeadAttr = snakeHead.getAttribute("class");
    snakeHead.setAttribute("class", prevSnakeHeadAttr + " snake-unit");

    let snakeTail = document.getElementsByClassName("cell-" + startCoordX + "-" + (startCoordY - 1))[0];
    let prevSnakeTailAttr = snakeTail.getAttribute("class");
    snakeTail.setAttribute("class", prevSnakeTailAttr + " snake-unit");


    snake.push(snakeTail);

    snake.push(snakeHead);
}


function move() {

    let snakeHeadClasses = snake[snake.length - 1].getAttribute("class").split(" ");

    let newUnit;
    let snakeCoords = snakeHeadClasses[1].split("-");
    let coordX = parseInt(snakeCoords[1]);
    let coordY = parseInt(snakeCoords[2]);


    if (direction == "y+") {
        newUnit = document.getElementsByClassName("cell-" + coordX + "-" + (coordY + 1))[0];
    }
    else if (direction == "y-") {
        newUnit = document.getElementsByClassName("cell-" + coordX + "-" + (coordY - 1))[0];
    }
    else if (direction == "x+") {
        newUnit = document.getElementsByClassName("cell-" + (coordX + 1) + "-" + coordY)[0];
    }
    else if (direction == "x-") {
        newUnit = document.getElementsByClassName("cell-" + (coordX - 1) + "-" + coordY)[0];
    }

    if (!isSnakeUnit(newUnit) && newUnit !== undefined) {

        newUnit.setAttribute("class", newUnit.getAttribute("class") + " snake-unit");
        snake.push(newUnit);

        getScoreInHtml()

        if (!haveFood(newUnit)) {

            let removed = snake.splice(0, 1)[0];
            let classes = removed.getAttribute("class").split(" ");

            removed.setAttribute("class", classes[0] + " " + classes[1]);
        }

    }
    else {
        finishTheGame();
    }
}

function isSnakeUnit(unit) {
    let check = false;

    if (snake.includes(unit)) {
        check = true;
    }

    return check;
}


function haveFood(unit) {
    let check = false;
    let unitClasses = unit.getAttribute("class").split(" ");

 
    if (unitClasses.includes("food-unit")) {
        check = true;

        unit.setAttribute("class", unitClasses[0] + " " + unitClasses[1] + " " + unitClasses[3]);

       
        createFood();

  
        score++;
    }

    return check;
}

function createFood() {
    let foodCreated = false;

    while (!foodCreated) {
      
        let foodX = Math.floor(Math.random() * (FIELD_SIZE_X));
        let foodY = Math.floor(Math.random() * (FIELD_SIZE_Y));

        let foodCell = document.getElementsByClassName("cell-" + foodX + "-" + foodY)[0];
        let foodCellClasses = foodCell.getAttribute("class").split(" ");

    
        if (!foodCellClasses.includes("snake-unit")) {
       
            let classes = "";
            for (let i = 0; i < foodCellClasses.length; i++) {
                classes += foodCellClasses[i] + " ";
            }

            foodCell.setAttribute("class", classes + "food-unit");
            foodCreated = true;
        }
    }
}


function changeDirection(e) {
    switch (e.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
            //если нажата клавиша влево если до этого двигались вправо, то ничего не произойдет            
            if (direction != "x+")
                direction = "x-";
            break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
            if (direction != "y+")
                direction = "y-";
            break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
            //если нажата клавиша вправо
            if (direction != "x-")
                direction = "x+";
            break;
        case "Down": // IE/Edge specific value
        case "ArrowDown":
            //если нажата клавиша вниз
            if (direction != "y-")
                direction = "y+";
            break;
    }
}



function getScoreInHtml() {
    let scoreInHtml = document.getElementById('score');
    scoreInHtml.innerHTML = ("Ваш счет: " + score);
}




function finishTheGame() {
    gameIsRunning = false;
    createFood = false;
    clearInterval(snakeTimer);
    console.log("Игра закончена, Вы собрали " + score + " очков");
    alert("Игра закончена, Вы набрали " + score + " очков");
}



window.onload = init;