//creating class
class LandingPage{
    constructor() {
    }
    all(){
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
            node.style.textDecoration = "none";
            //styling elements
            node.style.paddingRight="25";
            // node.style.paddingBottom="10";
            // node.style.paddingTop="20";
            node.appendChild(textnode);
            //link every nav bar element to specific section
            node.href = `#section${section}`;
            //append each nav bar element to unoreder list (nav bar )
            document.getElementById("navbar__list").appendChild(node);

            node.setAttribute("id", `sec${section}`);
            //case on click changing color of nav
            if(document.getElementById(`sec${section}`)!=""){
                document.getElementById(`sec${section}`).addEventListener("click",function(){
                    this.style.backgroundColor="black";
                    this.style.color="white";

                    this.addEventListener("mouseout", event => {
                        this.style.backgroundColor="white";
                        this.style.color="black";
                    });
                })
            }
            section++;
        }
    }
}
//work to refactor cod and moake it clean code
let Obj=LandingPage();
Obj.all();
//todo
//what i understand i have to add some animation and good styling and active for view port for every device support