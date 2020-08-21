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
const navItems = ["Section 1", "Section 2", "Section 3"];
const sectionsIds = ["section1", "section2", "section3"];

const listItemClickListener = function onItemClicked(event,navItem){
    console.log(`click on item ${navItem.getAttribute('data-nav')}`);
    const navData = navItem.getAttribute('data-nav');
    const sectionToScrollTo = document.querySelector(`section#${navItem.id}`);
    console.log(sectionToScrollTo);
    sectionToScrollTo.scrollIntoView();
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addItemsToNavMenu(navItems,sectionsIds){
    const documentFragment = document.createDocumentFragment()
    for(let navItem of navItems){
        const navListItemElement = document.createElement('li')
        navListItemElement.id = sectionsIds[navItems.indexOf(navItem)]
        navListItemElement.textContent = navItem
        navListItemElement.setAttribute('data-nav',navItem)
        navListItemElement.addEventListener('click',(event)=>listItemClickListener(event,navListItemElement));
        documentFragment.appendChild(navListItemElement);
    }
    const navbarUnorderListElement = document.querySelector('#navbar__list')
    navbarUnorderListElement.appendChild(documentFragment)
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
addItemsToNavMenu(navItems,sectionsIds);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


