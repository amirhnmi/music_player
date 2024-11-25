let musics= [
    {
        name: "gharibe Ebi-littles",
        cover: "images/image.jpg" ,
        audio: new Audio("./music/gharibe.mp3")
    },
    {
        name: "goleyakh Kourosh-Yaghmaei",
        cover: "images/image.jpg" ,
        audio: new Audio("./music/goleyakh.mp3")
    }
]

let range= document.querySelector("#music-time");
let playBtn= document.querySelector("#play-btn");
let nextBtn= document.querySelector("#next-btn");
let preBtn= document.querySelector("#pre-btn");

let musicCover= document.querySelector("#music-cover");
let musicName= document.querySelector("#music-name");

let currentMusic = 0;
let audio= musics[currentMusic].audio

musicCover.src= musics[currentMusic].cover
musicName.innerText= musics[currentMusic].name

audio.addEventListener("canplay",()=>{
    range.max = audio.duration // in property tool music ro miare
})

audio.addEventListener("timeupdate",()=>{
    range.value = audio.currentTime //zaman feli music ro bar migardoone , megdar range ro ba in set mikone
})

range.addEventListener("input",()=>{
    audio.currentTime = range.value
})

playBtn.addEventListener("click",()=>{
    if(audio.paused){
        audio.play()
        musicCover.style.animationPlayState = "running"
        playBtn.classList.replace("fa-play", "fa-pause")
    }else{
        audio.pause()
        musicCover.style.animationPlayState = "paused"
        playBtn.classList.replace("fa-pause","fa-play")
    }
})

preBtn.addEventListener("click",()=>{
    changeMusic("pre")
})

nextBtn.addEventListener("click",()=>{
    changeMusic("next")
})

function changeMusic(state){
    audio.pause();
    range.value = 0;
    playBtn.classList.replace("fa-pause","fa-play")
    musicCover.style.animationPlayState = "paused"
    audio.currentTime = 0
    if(state == "next"){
        if(currentMusic == musics.length -1){
            currentMusic = 0
        }else{
            currentMusic += 1
        }
    }else{
        if(currentMusic == 0){
            currentMusic = musics.length -1
        }else{
            currentMusic -= 1
        }
    }

    audio= musics[currentMusic].audio
    musicCover.src= musics[currentMusic].cover
    musicName.innerText= musics[currentMusic].name

    audio.addEventListener("timeupdate",()=>{
        range.value = audio.currentTime //zaman feli music ro bar migardoone , megdar range ro ba in set mikone
    })
}







