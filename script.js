const message = `Hey :)

I just wanted to say...

I missed you a bit today.`;

let typing=false;

/* -------- REAL TIME CLOCK -------- */
function updateTime(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    minutes = minutes < 10 ? "0"+minutes : minutes;
    hours = hours % 12 || 12;

    document.getElementById("time").innerText = `${hours}:${minutes}`;
}

setInterval(updateTime,1000);
updateTime();
/* --------------------------------- */

/* open chat message */
function openMessage(){
    document.getElementById("lockscreen").style.display="none";
    document.getElementById("chat").classList.remove("hidden");
    typeText();
}

/* typing animation */
function typeText(){
    const el=document.getElementById("text");
    let i=0;
    typing=true;
    el.innerHTML="";

    function type(){
        if(i<message.length){
            el.innerHTML+=message[i]==="\n"?"<br>":message[i];
            i++;
            setTimeout(type,35);
        }else{
            typing=false;
            document.getElementById("cursor").style.display="none";
        }
    }
    type();
}

/* close chat */
function closeMessage(){
    if(typing) return;

    document.getElementById("chat").classList.add("hidden");
    document.getElementById("lockscreen").style.display="flex";
    document.getElementById("cursor").style.display="inline";
}
