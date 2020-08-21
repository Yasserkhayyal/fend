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
const sectionsIds = Array(sections.length)
const navItems =  Array(sections.length)

for(let index=0;index<sections.length;index++){
    navItems[index] = sections[index].getAttribute('data-nav')
    sectionsIds[index] = sections[index].id
}

const onAnchorClickedListener = function onItemClicked(event,anchor){
    const currentSelectedSectionElement = document.querySelector('your-active-class')
    if(currentSelectedSectionElement!=null){
        currentSelectedSectionElement.remove('your-active-class')
    }
    const sectionId = anchor.href.split("#")[1]
    console.log(sectionId)
    const selectedSectionElement = document.querySelector(`#${sectionId}`)
    selectedSectionElement.classList.add('your-active-class') 
}

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addItemsToNavMenu(navItems,sectionsIds){
    const documentFragment = document.createDocumentFragment()
    for(let index=0; index<navItems.length;index++){
        const navListItemElement = document.createElement('li')
        const navListItemAnchor = document.createElement('a')
        console.log(`#${sectionsIds[index]}`)
        navListItemAnchor.href = `#${sectionsIds[index]}`
        navListItemAnchor.textContent = navItems[index]
        navListItemAnchor.addEventListener('click',(event)=>onAnchorClickedListener(event,navListItemAnchor))
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


