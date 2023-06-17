var interval;
let c=1,t=0;
let arr=[];
let color=["green","red", "yellow","blue"];
var max=0;

function numberGen(){
    $("h1").text("Level "+c);
    let n=Math.floor(4*Math.random());
    if(t!=0 && arr[t-1]==n)
    numberGen();
    arr.push(n);
    glow(n);
}

function glow(n){
    $("div."+color[n]).addClass("pressed");
    setTimeout(()=>{$("div."+color[n]).removeClass("pressed");},200);
}

function wrong(){
    interval=setInterval(()=>{
        $("body").toggleClass("game-over");
    },100);
    arr=arr.splice();
    $("h1").text("Game over. Press any key to Restart");
    
}

$("div.btn").click(()=>{
    if(color[arr[t]]==event.target.id)
    {
        glow(arr[t]);
        t++;
        if(t==arr.length)
        { 
            
            t=0;
            c++;
            setTimeout(numberGen, 1000);
        }
    }
    else
    {
    if(max<=c)
    max=c;
    $("#high").text("Your highscore is: "+max);
        c=1;
        t=0;
        wrong();
    }
    
});
document.addEventListener("keypress",()=>{
    clearInterval(interval);
    $("body").removeClass("game-over");
    $("h1").text("Level "+c);
    setTimeout(()=>{numberGen()},400);
});