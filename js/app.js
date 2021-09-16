//global variable for ul
const navbarUl = document.getElementById('navbar__list');

//global variable for sections
const sections = document.querySelectorAll('section');
for(let i =1; i <= sections.length; i++) {

//defining variables

const fragment = document.createDocumentFragment();

const list =document.createElement('li');

const anchor = document.createElement('a');

let dataNav = section.getAttribute('data-nav');

anchor.setAttribute('href', `"#section${sections.length}"`);
//appending

anchor.innerHTML = dataNav;

anchor.classList.add('menu__link');

list.appendChild(anchor);

fragment.appendChild(list);
//eventlistener to scroll when clicked

const sections = document.querySelectorAll('section');

anchor.addEventListener('click', function(event){

    event.preventDefault()

    sections[i].scrollIntoView({behavior:"smooth"});

});

};
navbarUl.appendChild(fragment);