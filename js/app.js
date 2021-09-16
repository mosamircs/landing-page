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

const navBarMake=()=>{
    //add nav bar sections as links to each section  
    var section=1;
    while(section<5){
        //create nav bar element
        var node = document.createElement("a");   
        //the text inside each nav bar element         
        var textnode = document.createTextNode(`section${section}`);
        //style nav bar as white back ground
        node.style.backgroundColor = "white";
        //remove underline form anchor

        node.appendChild(textnode);
        //link every nav bar element to specific section
        node.href = `#section${section}`; 
        //append each nav bar element to unoreder list (nav bar )
        document.getElementById("navbar__list").appendChild(node);
        section++;
    }

}
navBarMake();

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

// build the nav


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


