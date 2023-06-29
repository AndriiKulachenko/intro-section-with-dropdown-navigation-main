const burger = document.querySelector('.burger');// burger button
const menuContainer = document.querySelector('.menu-container');
const overlayDiv = document.querySelector('.mobile-menu-overlay'); // overlay div

burger.addEventListener('click', function(){
    this.classList.toggle('active');
    menuContainer.classList.toggle('open');
    overlayDiv.classList.toggle('on');
});

overlayDiv.addEventListener('click', function(){
     overlayDiv.classList.remove('on');
     menuContainer.classList.remove('open');
     burger.classList.remove('active');   
 });


const Features = document.getElementById("features");   // Spusok Features
const SubNav = document.querySelector('.sub-nav');



Features.addEventListener('click', function(){
    
        Features.classList.toggle('list-features');
        SubNav.classList.toggle('list-features-nav');
    
    
});

const company = document.getElementById("company"); // Spusok Company
const companyList = document.getElementById("companyList");

company.addEventListener('click',function(){
    
        company.classList.toggle('list-features');
        companyList.classList.toggle('list-features-nav');
    
    
});

const MainMenu = document.getElementById("main-menu");
const Gallery  = document.getElementById("gallery");

const Content = document.querySelector('.content');
const gallery = document.querySelector('.gallery');


Gallery.addEventListener('click',function(){

    Gallery.classList.add('is-active');
    MainMenu.classList.remove('is-active');
    gallery.classList.add('active-tab');
    Content.classList.remove('active-tab');
    Content.classList.add('of-tab');
    gallery.classList.remove('of-tab');   
});

MainMenu.addEventListener('click', function(){

    MainMenu.classList.add('is-active');
    Gallery.classList.remove('is-active');
    gallery.classList.remove('active-tab');
    gallery.classList.add('of-tab');
    Content.classList.add('active-tab');
    Content.classList.remove('of-tab');  
});

