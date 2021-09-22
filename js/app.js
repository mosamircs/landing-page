

/**function navBarMake work: 
 * 
 * this function creates the nav bar 
 * and gives it the styles 
 */
function navBarMake(){
    const sectionsList =document.querySelectorAll("section");//to get number of sections
    var sectionCounter=1;//start count for while loop
    let sectionsLength=sectionsList.length;//number of sections
    while(sectionCounter<=sectionsLength) {
        var link=document.createElement("a");//created to be in list of navbar
        link.href = `#section${sectionCounter}`;//the link in the navbar refer to specific section
        link.className="menu__link";    
        var navBarText = document.createTextNode(`Section ${sectionCounter}`);//text inside each navbar element 
        var navBarItem = document.createElement("li");
        navBarItem.appendChild(link);//adds each link to list element  unordered list
        document.getElementById('navbar__list').appendChild(navBarItem);//adds linkelement  to navbar unordered list
        link.appendChild(navBarText);
        navBarItem.setAttribute("id", `sec${sectionCounter}`);
        if (document.getElementById(`sec${sectionCounter}`) != "") {
            document.getElementById(`sec${sectionCounter}`).addEventListener("click", function () {
                this.style.backgroundColor = "black";
                this.style.color = "white";
                this.addEventListener("mouseout", event => {
                    this.style.backgroundColor = "white";
                    this.style.color = "black";
                });
            })
            sectionCounter++;
        }
    } 
}

/**chooseActiveClass
 * focus on active class in viewport which you are in 
 */
function viewPort(section){
    let sectionPosition=section.getBoundingClientRect();
    return (sectionPosition.top>=0);
}
//creates the nav bar
navBarMake();
//add class "active" to section when near to viewport
document.addEventListener("scroll",document.querySelectorAll('section').forEach(section => {   
        //checks if the section in viewport and it d
        if(viewPort(section)){
            if(!section.classList.contains('your-active-class')){
                section.classList.add("your-active-class");
            }else{
                section.classList.remove("your-active-class");
            }
}
}));