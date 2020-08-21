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

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function onAnchorClicked(event,anchor){
    const currentSelectedSectionElement = document.querySelector('.your-active-class')
    if(currentSelectedSectionElement!=null){
        currentSelectedSectionElement.classList.remove('your-active-class')
    }
    const sectionId = anchor.href.split("#")[1]
    const selectedSectionElement = document.querySelector(`#${sectionId}`)
    selectedSectionElement.classList.add('your-active-class') 
    console.log(`add your-active-class to ${selectedSectionElement.id}`)
}

/**
 * 
 * @param {anchors' texts array that will appear to user} navItems 
 * @param {ids array added to list items to be used later in intersectionObserver to highlight/unhighlight list items} sectionsIds 
 */
function addItemsToNavMenu(navItems,sectionsIds){
    const documentFragment = document.createDocumentFragment()
    for(let index=0; index<navItems.length;index++){
        const navListItemElement = document.createElement('li')
        navListItemElement.id = `${sectionsIds[index]}li`
        const navListItemAnchor = document.createElement('a')
        navListItemAnchor.href = `#${sectionsIds[index]}`
        navListItemAnchor.textContent = navItems[index]
        navListItemAnchor.addEventListener('click',(event)=>onAnchorClicked(event,navListItemAnchor))
        navListItemElement.appendChild(navListItemAnchor)
        documentFragment.appendChild(navListItemElement);
    }
    const navbarUnorderListElement = document.querySelector('#navbar__list')
    navbarUnorderListElement.appendChild(documentFragment)
}

const intersectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry){
        if(entry['isIntersecting'] === true && entry['intersectionRatio'] > 0.5){ 
            document.querySelector(`li#${entry.target.id}li`).classList.add('selected_li')
            const selectedSectionElement = document.querySelector(`#${entry.target.id}`)
            selectedSectionElement.classList.add('your-active-class')
        }else{
            document.querySelector(`li#${entry.target.id}li`).classList.remove('selected_li')
            const currentSelectedSectionElement = document.querySelector(`#${entry.target.id}`)
            currentSelectedSectionElement.classList.remove('your-active-class')
        }
    })
}, { threshold: [0.5] });


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let index=0;index<sections.length;index++){//dynamic population of navItems and sectionsIds arrays
    navItems[index] = sections[index].getAttribute('data-nav')
    sectionsIds[index] = sections[index].id
}
addItemsToNavMenu(navItems,sectionsIds)
sections.forEach(function(section){
    intersectionObserver.observe(section)
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


