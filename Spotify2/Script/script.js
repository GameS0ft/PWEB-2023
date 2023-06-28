var audioPlayer = document.getElementById('audio-player');
var loaded = false;

var playBtn = document.getElementById('play-btn');
var pauseBtn = document.getElementById('pause-btn');

var teste = document.getElementById('teste');
var progresso = document.getElementById('progress');


function barraProgresso()
{
    var duracao = audioPlayer.duration;
    var tempoAtual = audioPlayer.currentTime;
    var tempoPorcento = duracao/100;
    porcentoAtual = Math.floor(tempoAtual/tempoPorcento);
    progresso.style.width = +porcentoAtual+`%`;


}

 
pauseBtn.addEventListener('click',(e)=>
{
    e.preventDefault();
    playBtn.style.display = "inline";
    pauseBtn.style.display = "none";
    audioPlayer.pause();
    barraProgresso();

    return false;
});

playBtn.addEventListener('click',(e)=>
{
    e.preventDefault();
    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    audioPlayer.play();
    barraProgresso();

});

const playSong = (file) => {
    if (loaded == false){

        audioPlayer.innerHTML = `<source src="`+file+`">`;
        loaded = true;
    }
    audioPlayer.play();


    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
}


document.querySelectorAll('.main-col').forEach(item=>
{
    item.addEventListener('click', event =>{
        let image = item.getAttribute('data-image');
        let artist = item.getAttribute('data-artist');
        let song = item.getAttribute('data-song');
        let File = item.getAttribute('data-file');


        let playerArtistComponet = document.getElementsByClassName('player-artist');
        playerArtistComponet[0].innerHTML = `
            <img src= "`+image+`" />
            <h3>`+artist+`<br/><span>`+song+`</span></h3`;

            playSong(File);

    });
});