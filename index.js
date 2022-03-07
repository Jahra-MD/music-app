window.addEventListener('load',() =>{
    const sounds = document.querySelectorAll(".sound");
    const pads =document.querySelectorAll(".pads div");
    const visual =document.querySelector('.visual');
    const colors =[
        "darkmagenta",
        "orange",
        "yellow",
        "green",
        "cyan",
        "darkblue"
    ];

    //lets get going with the sound
    pads.forEach((pads,index) =>{
        pads.addEventListener('click',function(){
            sounds[index].currentTime =0;
            sounds[index].play();
            createBubbles(index);
        });
    });

    //create a function to make bubble
    const createBubbles =(index) =>{
        const bubble =document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor =colors[index];
        bubble.style.animation ='jump 1s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        });
    };
});

