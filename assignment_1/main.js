function changeTitle(){
    indextitle = document.getElementById("indextitle");
    if (indextitle) {
        indextitle.innerHTML = "Webprogramming (LIX019P05) - Index";
    }
    secondtitle = document.getElementById("secondtitle");
    if (secondtitle) {
        secondtitle.innerHTML = "Webprogramming (LIX019P05) - Second";
    }
}
changeTitle();

function addArticle(){
    let article2 = document.createElement("article");
    let header2 = document.createElement("h1");
    let textheader2 = document.createTextNode("Second Article");
    header2.appendChild(textheader2);
    let paragraph2 = document.createElement("p");
    let textparagraph2 = document.createTextNode(
        "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself."
    );
    paragraph2.appendChild(textparagraph2);
    article2.appendChild(header2);
    article2.appendChild(paragraph2);
    let articlelist = document.getElementById("indexarticles");
    if (articlelist) {
        articlelist.appendChild(article2);
    }
}
addArticle();

function addLink(){
    let link1 = document.getElementById("links").firstElementChild.firstElementChild.firstElementChild;
    link1.setAttribute("href", "https://google.com");
    link1.setAttribute("target", "_blank");
}
addLink();

function changeColor(){
    let elements = document.getElementsByClassName("nav-item");
    for (var i = 0; i < elements.length; i++) {
        elements[i].firstElementChild.style.color = "red";
    }
}
changeColor();

function addSchedule() {
    let artschedule = document.createElement("article");
    let header3 = document.createElement("h1");
    let textheader3 = document.createTextNode("Schedule");
    header3.appendChild(textheader3);
    let list3 = document.createElement("ul");
    artschedule.appendChild(header3);
    artschedule.appendChild(list3);
    const schedule = {
        week1: 'Assignment 1',
        week2: 'No lecture',
        week3: 'Assignment 2',
        week4: '-',
        week5: 'Assignment 3',
        week6: '-',
        week7: 'Guest Lecture'
    };
    for (i in schedule) {
        let week = document.createElement("li");
        let textweek = document.createTextNode(schedule[i]);
        week.appendChild(textweek);
        list3.appendChild(week);
    }
    let articlelist = document.getElementById("indexarticles");
    if (articlelist) {
        articlelist.appendChild(artschedule);
    }
}
addSchedule();

function addSidebar() {
    let col = document.getElementsByClassName("col-md-12");
    col.className = "col-md-8";
    let col2 = document.createElement("div");
    col2.className = "col-md-4";
    let headercol2 = document.createElement("h1");
    headercol2.appendChild(document.createTextNode("Sidebar"));
    let container = document.getElementsByClassName("container");
    container.appendChild(col2);
}
addSidebar();