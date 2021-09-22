function navBarMake(){
    var section=1;
    while(section<5) {
        var a=document.createElement("a");
        a.href = `#section${section}`;
        var textnode = document.createTextNode(`Section${section}`);
        var li = document.createElement("li");
        li.appendChild(a);
        document.getElementById('navbar__list').appendChild(li);
        a.style.backgroundColor = "white";
        a.style.fontFamily="serif";
        a.style.fontSize="25";
        a.style.textDecoration = "none";
        a.style.paddingRight = "25";
        a.appendChild(textnode);
        li.setAttribute("id", `sec${section}`);
        if (document.getElementById(`sec${section}`) != "") {
            document.getElementById(`sec${section}`).addEventListener("click", function () {
                this.style.backgroundColor = "black";
                this.style.color = "white";
                this.addEventListener("mouseout", event => {
                    this.style.backgroundColor = "white";
                    this.style.color = "black";
                });
            })
            section++;
        }
    }
}
navBarMake();