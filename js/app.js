/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// navigation global variable to store unordered list
const navigation = document.querySelector('#navbar__list');
// all the section of the page
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// creating a fragment to append all the list items and links keeping in mind the performance of the code
const navFragment = document.createDocumentFragment();

// build the navbar using buildNavBar function
const buildNavBar = function(sections) {
	sections.forEach( function(section) {
		const li = document.createElement('li');
		const link = document.createElement('a');
		link.setAttribute('href', `#${section.id}`);
		link.setAttribute('class', 'menu__link');
		const linkName = `${section.dataset.nav}`;
		link.textContent = linkName;
		li.appendChild(link);
		navFragment.appendChild(li);
	});
	navigation.appendChild(navFragment);
};

buildNavBar(sections);
// Add class 'active' to section when near top of viewport

// adding active class function
function addActiveClass(section) {
	section.classList.add('your-active-class');
};

// removing active class function
function removeActiveClass(section) {
	section.classList.remove('your-active-class');
};

// setting the active class to a section based on its position
function setActiveClass() {
	sections.forEach(function(section) {
		let sectionBoundary = Math.floor(section.getBoundingClientRect().top);
		removeActiveClass(section);
		if (sectionBoundary < 150 && sectionBoundary >= -150) {
			addActiveClass(section);
		}
	});
};

// adding event listener to run the setActiveClass function on scrolling the page
window.addEventListener('scroll', setActiveClass);

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// adding smooth scrolling effect using scrollIntoView() method
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Set sections as active


//scroll to top of the page

const topButton = document.querySelector('#fixedButton');

const scrollToTop = () => {
	topButton.addEventListener('click', function() {
		scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
};

scrollToTop();

window.addEventListener('scroll', function() {

	topButton.style.visibility = 'visible';
	let timeout = window.setTimeout(function () {
		topButton.style.visibility = 'hidden';
	}, 2000);
});