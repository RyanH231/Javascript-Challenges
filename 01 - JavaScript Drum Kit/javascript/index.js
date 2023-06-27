let audio = document.getElementsByTagName("audio");
let keys = document.querySelectorAll(".key");

document.addEventListener("keypress", (event) => {
  let key = event.key;
  console.log(key);
  switch(event.key)
  {
    case 'a':
        audio[0].play();
        keys[0].classList.add("playing");
        setTimeout(() => {keys[0].classList.remove("playing")}, 100);
        console.log(audio[0].classList);
        break;
    case 's':
        audio[1].play();
        keys[1].classList.add("playing");
        setTimeout(() => {keys[1].classList.remove("playing")}, 100);
        console.log(audio[1]);
        break;
    case 'd':
        audio[2].play();
        keys[2].classList.add("playing");
        setTimeout(() => {keys[2].classList.remove("playing")}, 100);
        console.log(audio[2]);
        break;
    case 'f':
        audio[3].play();
        keys[3].classList.add("playing");
        setTimeout(() => {keys[3].classList.remove("playing")}, 100);
        console.log(audio[3]);
        
        break;
    case 'g':
        audio[4].play();
        keys[4].classList.add("playing");
        setTimeout(() => {keys[4].classList.remove("playing")}, 100);
        console.log(audio[4]);
        break;
    case 'h':
        audio[5].play();
        keys[5].classList.add("playing");
        setTimeout(() => {keys[5].classList.remove("playing")}, 100);
        console.log(audio[5]);
        break;
    case 'j':
        audio[6].play();
        keys[6].classList.add("playing");
        setTimeout(() => {keys[6].classList.remove("playing")}, 100);
        console.log(audio[6]);
        break;
    case 'k':
        audio[7].play();
        keys[7].classList.add("playing");
        setTimeout(() => {keys[7].classList.remove("playing")}, 100);
        console.log(audio[7]);
        break;
    case 'l':
        audio[8].play();
        keys[8].classList.add("playing");
        setTimeout(() => {keys[8].classList.remove("playing")}, 100);
        console.log(audio[8]);
        break;
    default:      
        break;
  }
})