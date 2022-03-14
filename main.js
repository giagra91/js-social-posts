const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=160",
        "author": {
            "name": "Luca Rossi",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 41,
        "created": "2021-01-25"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=199",
        "author": {
            "name": "Marta Bianchi",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 150,
        "created": "2021-05-03"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=256",
        "author": {
            "name": "Veronica De Rossi",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 91,
        "created": "2021-07-01"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=290",
        "author": {
            "name": "Giovanni Salvemini",
            "image": null
        },
        "likes": 255,
        "created": "2021-09-15"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=467",
        "author": {
            "name": "Alessandro Grande",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 90,
        "created": "2021-12-09"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Marco Rossi",
            "image": "https://unsplash.it/300/300?image=415"
        },
        "likes": 89,
        "created": "2021-01-21"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=611",
        "author": {
            "name": "Maria Romano",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 19,
        "created": "2021-04-23"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=354",
        "author": {
            "name": "Francesco Dimaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 99,
        "created": "2021-03-25"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=300",
        "author": {
            "name": "Matteo Rossi",
            "image": null
        },
        "likes": 126,
        "created": "2021-11-09"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=410",
        "author": {
            "name": "Alessandro Mattei",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 215,
        "created": "2021-10-01"
    }
];

function reverseDate(date){
    return date.split("-").reverse().join(`-`);
}

const mainContainer = document.getElementById(`container`);

for (let i = 0 ; i < posts.length ; i++){
    posts[i].created = reverseDate(posts[i].created);
    mainContainer.innerHTML +=`
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${posts[i].author.image}" alt="${posts[i].author.name}">
                        <div class="profile-pic" id="user-letters${i+1}"></div>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src="${posts[i].media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${posts[i].id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${[i+1]}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
    </div>
    `

    if (!posts[i].author.image){
        document.getElementById(`user-letters${i+1}`).innerHTML= firstLettersName(posts[i].author.name, posts[i].author.name);
    }
};

const likedId = [];

// Ciclo for aggiungere la classe liked al bottone
for (let i = 0 ; i < posts.length ; i++){
    const likeButtons = document.getElementsByClassName(`js-like-button`);
    likeButtons[i].addEventListener(`click`, function(){
        // Aggiungo il valore uno ai like appena si clicca e poi modifico l'HTML
        posts[i].likes++;
        document.getElementById(`like-counter-${i+1}`).innerHTML=`${posts[i].likes}`;
        // Aggiungo la classe per il click
        this.classList.add(`like-button--liked`);
        // Aggiungo all'array creato in precendenza l'id del post a cui è stato aggiunto il like
        likedId.push(posts[i].id);
        console.log(likedId)
    })
}

console.log((posts[0].author.name).split(` `)[0].charAt(0) + (posts[0].author.name).split(` `)[1].charAt(0) );

// Funzione per recuperare le inziali del nome e cognome di due stringhe
function firstLettersName (firstName, lastName){
    return (firstName).split(` `)[0].charAt(0) + (lastName).split(` `)[1].charAt(0);
}

