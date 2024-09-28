// swuper js (testimonial section) 
const swiper = new Swiper('.swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

//hamburger button
const menuBtn = document.querySelector('#menu-btn')
//close button on menu
const closeBtn = document.querySelector('#close-btn')
//menu items - sidebar
const menu = document.querySelector('nav .container ul')

// show menu
menuBtn.addEventListener('click', () => {
  menu.style.display = 'block';
  //hamburger become none and close button shows
  menuBtn.style.display = 'none';
  closeBtn.style.display = 'inline-block';
})

//hide menu
closeBtn.addEventListener('click', () => {
  //menu disapear
  menu.style.display = 'none';
  //hamburger apear
  menuBtn.style.display = 'inline-block';
  //close button disapear
  closeBtn.style.display = 'none';
})

// remove active class on not selected nav items - remove style change on non active li
const navItems = menu.querySelectorAll('li');

const changeActiveItem = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

// add active class to clicked nav item
navItems.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItem();
    link.classList.add('active')
  })
})

//read more about show/hide - .read-more-content - is  displayed none in css 
const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
  //toggle class show-content on click
  if(readMoreContent.classList.toggle('show-content')){
    readMoreBtn.textContent = "Show less";
    }else {
      readMoreBtn.textContent = "Show more";
    };
})

// show/hide skills items
const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
  // head is orange container  with name of  Skill ,  on click dispaly block (.show-items), defoult (.items) is none 
  skill.querySelector('.head').addEventListener('click', () => {
  skill.querySelector('.items').classList.toggle('show-items');
  })
})


// add box shadow on scroll 
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('show-box-shadow',window.scrollY> 0)
})