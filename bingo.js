const CountArea = document.getElementById("count-area");
const Display = document.getElementById("display");
const StButton = document.getElementById("StartButton")

var a;
var Flag;
function change(){ //番号を変える処理
    a = Math.floor(Math.random() * 75) + 1;
    Display.innerHTML = a;
};

var speed = 10;
function slow(){ //表示をゆっくりにする処理
    if(speed <= 200){
        clearInterval(changing);
        speed = speed + 10;
        changing = setInterval(change, speed);
    }else{
        clearInterval(changing);
        clearInterval(slowing);
    };
};

function stop(){ //番号を決定する処理
    while(Flag){
        change();
        var number = a;
        if(numbers.indexOf(number) === -1){
            count = count + 1;
            numbers.push(number);
            Display.innerHTML = number;
            document.getElementById("a" + number).style.backgroundColor = "orange";
            Flag = false;
        };
    };
    if(count < 75){
        document.getElementById("StartButton").style.backgroundColor = "yellowgreen";
        document.getElementById("StartButton").disabled = false;
    }else{
        document.getElementById("StartButton").innerHTML = "ゲーム終了";
    }
};

var count = 0;
var numbers = [];
StButton.onclick = () => {
    if(StButton.id === "StartButton"){
        Flag = true;
        document.getElementById("StartButton").innerHTML = "ストップ";
        document.getElementById("StartButton").style.backgroundColor = "pink";
        document.getElementById("StartButton").id = "StopButton";
        CountArea.innerHTML = "(" + (count + 1) + ")";
        speed = 10;
        changing = setInterval(change, 10);
    }else{
        document.getElementById("StopButton").disabled = true;
        document.getElementById("StopButton").innerHTML = "スタート";
        document.getElementById("StopButton").style.backgroundColor = "white";
        document.getElementById("StopButton").id = "StartButton";
        slowing = setInterval(slow, 200);
        setTimeout("stop();", 4200);
    };
};