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
    if (window.innerWidth < 769) {
        Features.classList.toggle('list-features');
        SubNav.classList.toggle('list-features-nav');
    }
    
});

const company = document.getElementById("company"); // Spusok Company
const companyList = document.getElementById("companyList");

company.addEventListener('click',function(){
    if (window.innerWidth < 769) {
        company.classList.toggle('list-features');
        companyList.classList.toggle('list-features-nav');
    }
    
})