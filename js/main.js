

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerReady(event) {
    console.log('onPlayerReady', event);
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        console.log(event.target);
        console.log(event.target.getDuration());
        // event.target.seekTo(30, true);
        // event.target.setVolume(50); // 0 - 100
    }
}  

window.onYouTubePlayerAPIReady = function(){
    console.log('onYouTubePlayerAPIReady');
    $(document).ready(function() {
        $('.starter').click(function(e){
            e.preventDefault();
            console.log('go');
            $('.starter').hide();
            init();
        });
    }); 
}

// var leftSources = [ 'rVLpDz43lnQ', '7gqB2gqwN8o', 'KNuoGeD9Qeo', 'dztvutuN3V0', 'x0Do7I3kLjg', '1j41yNsI9yA', 'KKKId0LDwVc', 'gpvznAiKblU', 'co7KgV2edvI']; // fans
// var rightSources = ['Y6QTdvbu0uI', 'hdmvMc7TZn0', 'Xq_xOibJBDc', 'WPni755-Krg', '2ER2a-RlFs4', 'gq8snFSEwlU', 'I_FpVaV1pHc', '1MPRbX7ACh8'];

// backlog

// - bara 10 timmars
// - bara spirit i ena och fx i andra
// - no controls

// - kosmos vs insekter
// - amibnance vvs freqs

// - some silent? or no?

var vids = [
    { id: 'aXEl7QmXTMk', volume: 100, duration: 43000 }, // ambient fan
    { id: 'rVLpDz43lnQ', volume: 30, duration: 30000 }, // Data Center White Noise | 1000s of Fans | For Sleep or Focus | 10 Hours
    { id: '7gqB2gqwN8o', volume: 100, duration: 3600 }, // silence
    { id: 'WPni755-Krg', volume: 100, duration: 200 }, // Study Music Alpha Waves: Relaxing Studying Music, Brain Power, Focus Conce
    { id: 'NeESf9aCZHQ', volume: 100, duration: 2400 }, // scifi
    { id: '5DWusPgTjiw', volume: 100, duration: 1800 }, // playground
    { id: 'lLBVKWC2jAQ', volume: 100, duration: 30000 }, // baby laughing
    { id: '5AfEBjvfDYc', volume: 50, duration: 30000 }, // laughing
    { id: 'Gy_RHdE7zsc', volume: 70, duration: 1800 }, // computer fan
    { id: '4P_dm6Voupk', volume: 100, duration: 30000 }, // tinnitus
    { id: 'tfmHSUVLhVw', volume: 100, duration: 30000 }, // ▶️ MOSQUITO SOUND EFFECT. MOSQUITO BUZZING SOUND. MOSQUITO NOISE. 12 HOURS. 📢
    { id: 'Nbbhz6ovRUc', volume: 100, duration: 20000 }, // fly buzzing
    { id: 'WbEGmghn_jo', volume: 100, duration: 20000 }, // airplane white npose    
    
    { id: 'KG8f-EV8vDo', volume: 60, duration: 20000 }, // bees    
    { id: 'dztvutuN3V0', volume: 100, duration: 20000 }, // mouseclicking    
    { id: '1j41yNsI9yA', volume: 100, duration: 3600*2 }, // server room scifi    
    { id: 'co7KgV2edvI', volume: 30, duration: 20000 }, // airplane cabin    
    { id: 'L_LUpnjgPso', volume: 100, duration: 20000 }, // fireplace    
    { id: '4KzFe50RQkQ', volume: 100, duration: 20000 }, // wind    

    { id: 'KKKId0LDwVc', volume: 90, duration: 3600 }, // weeping    
    { id: 'TvUHt54Ucrg', volume: 100, duration: 20000 }, // spacesound    
    { id: 'olsGjU2GhIU', volume: 100, duration: 20000 }, // cracked screen    
    { id: 'BDHk7SYW0qY', volume: 100, duration: 40000 }, // greenscreen    

    { id: 's1V3XOrXtuo', volume: 70, duration: 3600 }, // cheering    
    { id: 'BDHk7SYW0qY', volume: 100, duration: 40000 }, // greenscreen    
    { id: 'BDHk7SYW0qY', volume: 100, duration: 40000 }, // greenscreen    
    { id: 'BDHk7SYW0qY', volume: 100, duration: 40000 }, // greenscreen    

    { id: 'SFhztah2aVA', volume: 25, duration: 6400 }, // data center    
    { id: 'gLLvXi1Usrc', volume: 80, duration: 6400 }, // data center    


    { id: '4wtG01ymIjE', volume: 100, duration: 9000 }, // 432    
    { id: 'UkM-FjfN6Mc', volume: 100, duration: 6000 }, // 528    
    { id: 'H1zGk4GcuqQ', volume: 100, duration: 3600 }, // 639

    { id: 'I_FpVaV1pHc', volume: 100, duration: 3600 }, // energis
    { id: 'cjuZgLQdupk', volume: 100, duration: 3600 }, // solfeg
    { id: '2ER2a-RlFs4', volume: 100, duration: 3600*4 }, // 639
    { id: 'zsHJHcGCGU8', volume: 100, duration: 3600*2 }, // 639
    { id: '1MPRbX7ACh8', volume: 100, duration: 3600*9 }, // 639
    { id: 'j9Mzyf_B8rQ', volume: 100, duration: 3600 }, // 639
    { id: 'uAbUeZfZNOI', volume: 100, duration: 20*60 }, // 639
    { id: 'S8bFPK8HSzA', volume: 100, duration: 3600 }, // 639

    
    { id: 'w6sbrmcrSuo', volume: 100, duration: 4000 }, // aura cleaningse    
    { id: 'dJoXVILGeKQ', volume: 100, duration: 3600 }, // allthemtones    
    { id: 'a7JY4EnXbpU', volume: 100, duration: 3600 }, // morebowls    
    { id: '5sbRuUC6ocE', volume: 100, duration: 3600 }, // morebowls    
    { id: 'Y6QTdvbu0uI', volume: 100, duration: 3600 }, // singing bowls    
    { id: '2X4RKVwvP0g', volume: 100, duration: 3600 }, // singing bowls    

    { id: '1x_BwvG19ag', volume: 100, duration: 3600*10 }, // clapping   
    { id: 'HNOEt2eWYLI', volume: 70, duration: 3600*10 }, // moo  
    { id: 'ChdpflTAvok', volume: 25, duration: 3600 }, // applause  

    { id: '9pJheICAck4', volume: 100, duration: 3600*3 }, // genius    

    { id: '5YmURoB8eXc', volume: 80, duration: 3600*10 }, // michale    

    { id: 'b6YBBLVMgD4', volume: 100, duration: 3600 }, // manifest    
    { id: 'kn1sRMewWxg', volume: 100, duration: 3600 }, // manifest money    
    { id: 'hTUJfmeJ1MU', volume: 100, duration: 3600 }, // money magnet    
    { id: 'BfUVq5nlE_I', volume: 100, duration: 3600 }, // money vibration    
    { id: 'azoM-E7D7PI', volume: 100, duration: 3600 }, // abundance    

// ZXYcOcUkbNQ //dolphins

//tTHKyJUqP44 // rain

// u2nbCtN_AaQ BSOD
// r3y-6NLR5mo // bluscreen
// whales, dolphins, seagulls, man crying, sobbing

// https://www.youtube.com/watch?v=utpacWu-bzI fortnite deaths oudns
// rain sounds

];

var interval = 30000;

var leftPlayer;
var rightPlayer;

var leftCurrentlyPlaying = {};
var rightCurrentlyPlaying = {};

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var switchVideo = function(sources, player, currentlyPlaying){
    console.log('switchVideo');
    var selected = sources.randomElement();
    while(currentlyPlaying.id === selected.id){
        selected = sources.randomElement();
    }
    currentlyPlaying = selected;
    player.loadVideoById(selected.id, getRandomInt(selected.duration));
    player.setVolume(selected.volume);
};

var init = function() {

    console.log('init');

    var events = {  'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange };
    leftPlayer = new YT.Player('left', {
        videoId: vids.randomElement().id, 
        events: events,
        // host: 'https://www.youtube.com',
        // playerVars: { 'origin': 'http://localhost:8000', 'enablejsapi': 1 }
    });

    rightPlayer = new YT.Player('right', { 
        videoId: vids.randomElement().id,
        events: events,
        // host: 'https://www.youtube.com',
        // playerVars: { 'autoplay': 0, 'controls': 0, 'autohide':1, 'wmode':'opaque', 'origin':'http://localhost:8000', 'enablejsapi': 1 },
    });

    setInterval(function(){
        switchVideo(vids, leftPlayer, leftCurrentlyPlaying)
    }, interval);

    setTimeout(function(){
        setInterval(function(){
            switchVideo(vids, rightPlayer, rightCurrentlyPlaying)
        }, interval);
    }, interval/2);

    // <iframe id="left" src='https://www.youtube.com/embed/aXEl7QmXTMk?theme=dark&autoplay=0&autohide=0&rel=0&enablejsapi=1' frameborder='0' allowfullscreen></iframe>
}