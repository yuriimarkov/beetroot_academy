//Створити сторінку, що показує нумерований список пісень:
const playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];


let content = document.querySelector('.contant');
content.innerHTML = " ";
playList.map((el) => {
    content.innerHTML += `<li>
        <span>Автор: <strong>${el.author}</strong></span>
        <br>
        <span>Пісня: <strong>${el.song}</strong></span>
    </li>
    <br>`
    ;
})

/// modal 
let modal = document.querySelector('.modal-window');
let openBtn = document.querySelector('.open-btn');
let closeBtn = document.querySelector('.close-btn');

openBtn.onclick = () => {
    modal.classList.toggle('open');
}
closeBtn.onclick = () => {
    modal.classList.remove('open');
}

///світлофор
let changeBtn = document.querySelector('.change-lights');
let trafficLightsDiv = document.querySelectorAll('.lights');
let i = 0;
changeBtn.onclick = () => {
    trafficLightsDiv.forEach((e) => {
        e.classList.remove('active');
    });
    if (i == 2) {
        i = 0;
    } else i++;
    trafficLightsDiv[i].classList.add("active");
}