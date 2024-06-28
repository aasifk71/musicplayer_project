var arr = [
    { songName: "Jale 2", url: "./songs/Jale 2.mp3", img: "./images/jale.jpg" },
    { songName: "Pehle Bhi main", url: "./songs/Pehle Bhi Main.mp3", img: "./images/animal.jpg" },
    { songName: "Ram siya ram", url: "./songs/Ram Siya Ram.mp3", img: "./images/ram.jpg" },
    { songName: "Arjan Valley", url: "./songs/Arjan Vailly Ne.mp3", img: "./images/animal.jpg" }
]

var allSong = document.querySelector("#all-song")
var audio= new Audio()
var selectedSong = 0
 function mainFunction(){
    var clutter=``;
    arr.forEach(function(elem,index){
        clutter = clutter + `<div class="song-card" id=${index}>
        <div class="part1">
            <img src=${elem.img} alt="">
            <h2>${elem.songName}</h2>
        </div>
        <h6>3:56</h6>
    </div>`
    })
    
    allSong.innerHTML=clutter

    audio.src = arr[selectedSong].url
}
mainFunction()

allSong.addEventListener("click",function(dets){
          selectedSong=dets.target.id
          mainFunction()
audio.play()
    
})


