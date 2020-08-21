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
    const currentSelectedSectionElement = document.querySelector('.your-active-class')
    console.log(currentSelectedSectionElement)
    if(currentSelectedSectionElement!=null){
        currentSelectedSectionElement.classList.remove('your-active-class')
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
        navListItemElement.id = sectionsIds[index]
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

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
        if(entry['isIntersecting'] === true && entry['intersectionRatio'] > 0.5){
            console.log(`entry with id ${entry.target.id} is visible`)

        }else{
            console.log(`entry with id ${entry.target.id} is hidding`)
        }
    })
	// if(entries[0]['isIntersecting'] === true) {
	// 	if(entries[0]['intersectionRatio'] === 1)
	// 		console.log('Target is fully visible in the screen');
	// 	else if(entries[0]['intersectionRatio'] > 0.5)
	// 		console.log('More than 50% of target is visible in the screen');
	// 	else 
	// 		console.log('Less than 50% of target is visible in the screen');
	// }
	// else {
	// 	console.log('Target is not visible in the screen');
    // }
}, { threshold: [0.5] });


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
addItemsToNavMenu(navItems,sectionsIds)
sections.forEach(function(section){
    console.log(section) 
    observer.observe(section)
})

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


