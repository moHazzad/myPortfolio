// const text = document.querySelector(`.sec-text`);

// const TextLoad =() =>{
//   setTimeout(() => {
    
//     text.textContent = `Freelancer`;


//   }, 0);
//   setTimeout(() => {
    
//     text.textContent = `Web developer`;


//   }, 4000);
//   setTimeout(() => {
    
//     text.textContent = `Web Designer`;


//   }, 8000);
  
// }
// TextLoad();
// setInterval(TextLoad, 12000);

let hero = document.querySelector(`#hero`);
let about = document.querySelector(`#about`);
let resume = document.querySelector(`#resume`);
let blog = document.querySelector(`#blog`);
let contact = document.querySelector(`#contact`);


let aboutSection = document.querySelector(`#aboutSection`);
let resumeSection = document.querySelector(`#resumeSection`);
let blogSection = document.querySelector(`#blogSection`);
let contactSection = document.querySelector(`#contactSection`);

let closeContact = document.querySelector(`#close-contact`)
let closeResume = document.querySelector(`#close-resume`)
let closeblog = document.querySelector(`#close-blog`)
let closeSection = document.querySelector(`#close`)

about.addEventListener(`click`, function(){
    aboutSection.style.display = `block`
    hero.style.display = `none`
})
closeSection.addEventListener(`click`, function(){
    aboutSection.style.display = `none`
    hero.style.display = `block`
})

resume.addEventListener(`click`, function(){
    resumeSection.style.display = `block`
    hero.style.display = `none`
})
closeResume.addEventListener(`click`, function(){
    resumeSection.style.display = `none`
    hero.style.display = `block`
})

blog.addEventListener(`click`,function(){
    blogSection.style.display = `block`
    hero.style.display = `none`
})
closeblog.addEventListener(`click`, function(){
    blogSection.style.display = `none`
    hero.style.display = `block`
})

contact.addEventListener(`click`, function(){
    contactSection.style.display = `block`
    hero.style.display = `none`
})
closeContact.addEventListener(`click`, function(){
    contactSection.style.display = `none`
    hero.style.display = `block`
})


