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
const sections = document.querySelectorAll('section')
let sectionIds = Array(sections.length)
let navItems =  Array(sections.length)

for(const index=0;index<sections.length;index++){
    navItems[index] = sections[index].getAttribute('data-nav')
    sectionsIds[index] = sections[index].id
}

const listItemClickListener = function onItemClicked(event,navItem){
    console.log(`click on item ${navItem.getAttribute('data-nav')}`)
    const navData = navItem.getAttribute('data-nav')
    const sectionToScrollTo = document.querySelector(`section#${navItem.id}`)
    console.log(sectionToScrollTo)
    sectionToScrollTo.scrollIntoView()
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addItemsToNavMenu(navItems,sectionsIds){
    const documentFragment = document.createDocumentFragment()
    for(const index=0; index<navItems.length;index++){
        const navListItemElement = document.createElement('li')
        const navListItemAnchor = document.createElement('a')
        navListItemAnchor.href = `#${sectionsIds[index]}`
        navListItemAnchor.textContent = navItem
        navListItemElement.appendChild(navListItemAnchor)
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
addItemsToNavMenu(navItems,sectionsIds)

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


