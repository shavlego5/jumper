let cover = document.getElementById("top");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let stars = document.getElementById("stars");

moon.style.animationPlayState = "paused";
setInterval(() => {
    moon.style.animationPlayState = "running";
    sun.style.animationPlayState = "paused";
    document.getElementById("body").style.backgroundColor = "black";
    stars.style.opacity = "1";
    cover.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}, 60000)

setInterval(() => {
    moon.style.animationPlayState = "paused";
    sun.style.animationPlayState = "running";
    document.getElementById("body").style.backgroundColor = "#529bff";
    stars.style.opacity = "0";
    cover.style.backgroundColor = "rgba(0, 0, 0, 0)";
}, 120000)

let container = document.getElementsByClassName("container");
let treeContainer = document.createElement("div");
treeContainer.classList.add("tree-container");

for (let i = 0; i < 19; i++) {
    let treeInnerContainer = document.createElement("div");
    treeInnerContainer.classList.add("tree-inner-container");
    for (let i = 0; i < 2; i++) {
        let tree = document.createElement("img")
        tree.setAttribute("src", `images/tree${Math.floor(Math.random() * 3)}.png`);
        tree.classList.add("tree");
        treeInnerContainer.appendChild(tree);
    }
    treeContainer.appendChild(treeInnerContainer)
}

container[0].appendChild(treeContainer);

let trees = document.getElementsByClassName("tree");

let treeInnerContainer = document.getElementsByClassName("tree-inner-container");

for (let i = 0; i < treeInnerContainer.length; i++) {
    treeInnerContainer[i].style.transform = `rotate(${i * 10}deg)`
}

for (let i = 0; i < trees.length; i++) {
    if (i % 2 == 0) {
        trees[i].style.transform = "rotate(-90deg)";
        trees[i].style.marginLeft = "15px";
    } else {
        trees[i].style.transform = "rotate(90deg)";
        trees[i].style.marginRight = "15px";
    }

    if (i % 9 == 0) {
        trees[i].style.height = "115px";
    } else if (i % 3 == 0) {
        trees[i].style.height = "155px";
    } else if (i % 8 == 0) {
        trees[i].style.height = "85px";
    } else if (i % 5 == 0) {
        trees[i].style.height = "255px";
    } else if (i % 6 == 0) {
        trees[i].style.height = "95px";
    } else if (i % 7 == 0) {
        trees[i].style.height = "105px";
    }
}


let buildingContainer = document.createElement("div");
buildingContainer.classList.add("building-container");

for (let i = 0; i < 18; i++) {
    let buildingInnerContainer = document.createElement("div");
    buildingInnerContainer.classList.add("building-inner-container");
    for (let i = 0; i < 2; i++) {
        let building = document.createElement("img")
        building.setAttribute("src", `images/building${Math.floor(Math.random() * 10)}.png`);
        building.classList.add("building");
        buildingInnerContainer.appendChild(building);
    }
    buildingContainer.appendChild(buildingInnerContainer)
}

container[0].appendChild(buildingContainer);

let buildings = document.getElementsByClassName("building");

let buildingInnerContainer = document.getElementsByClassName("building-inner-container");

for (let i = 0; i < buildingInnerContainer.length; i++) {
    buildingInnerContainer[i].style.transform = `rotate(${i * 10}deg)`
}

for (let i = 0; i < buildings.length; i++) {

    if (i % 2 == 0) {
        buildings[i].style.transform = "rotate(-90deg)";
    } else {
        buildings[i].style.transform = "rotate(90deg)";
    }

    if (i % 2 == 0) {
        buildings[i].style.marginLeft = `-${buildings[i].offsetHeight / 2}px`;
    } else {
        buildings[i].style.marginRight = `-${buildings[i].offsetHeight / 2}px`;
    }
}


let cloudContainer1 = document.getElementsByClassName("cloud-container-1");

for (let i = 0; i < 18; i++) {
    let cloudInnerContainer1 = document.createElement("div");
    cloudInnerContainer1.classList.add("cloud-inner-container-1");
    for (let i = 0; i < 2; i++) {
        let cloud = document.createElement("img")
        cloud.setAttribute("src", `images/cloud${Math.floor(Math.random() * 2)}.png`);
        cloud.classList.add("cloud");
        cloudInnerContainer1.appendChild(cloud);
    }
    cloudContainer1[0].appendChild(cloudInnerContainer1)
}


let clouds = document.getElementsByClassName("cloud");

let cloudInnerContainer1 = document.getElementsByClassName("cloud-inner-container-1");

for (let i = 0; i < cloudInnerContainer1.length; i++) {
    cloudInnerContainer1[i].style.transform = `rotate(${i * 10}deg)`
}

for (let i = 0; i < clouds.length; i++) {

    if (i % 2 == 0) {
        clouds[i].style.transform = "rotate(-90deg)";
    } else {
        clouds[i].style.transform = "rotate(90deg)";
    }

    if (i % 9 == 0) {
        clouds[i].style.height = "115px";
    } else if (i % 3 == 0) {
        clouds[i].style.height = "155px";
    } else if (i % 8 == 0) {
        clouds[i].style.height = "185px";
    } else if (i % 5 == 0) {
        clouds[i].style.height = "255px";
    } else if (i % 6 == 0) {
        clouds[i].style.height = "95px";
    } else if (i % 7 == 0) {
        clouds[i].style.height = "105px";
    }

    if (i % 2 == 0) {
        clouds[i].style.marginLeft = `-${buildings[i].offsetHeight / 2}px`;
    } else {
        clouds[i].style.marginRight = `-${buildings[i].offsetHeight / 2}px`;
    }

}





let cloudContainer2 = document.getElementsByClassName("cloud-container-2");

for (let i = 0; i < 18; i++) {
    let cloudInnerContainer2 = document.createElement("div");
    cloudInnerContainer2.classList.add("cloud-inner-container-2");
    for (let i = 0; i < 2; i++) {
        let cloud = document.createElement("img")
        cloud.setAttribute("src", `images/cloud${Math.floor(Math.random() * 2)}.png`);
        cloud.classList.add("cloud");
        cloudInnerContainer2.appendChild(cloud);
    }
    cloudContainer2[0].appendChild(cloudInnerContainer2)
}



let cloudInnerContainer2 = document.getElementsByClassName("cloud-inner-container-2");

for (let i = 0; i < cloudInnerContainer2.length; i++) {
    cloudInnerContainer2[i].style.transform = `rotate(${i * 8}deg)`
}

for (let i = 0; i < clouds.length; i++) {

    if (i % 2 == 0) {
        clouds[i].style.transform = "rotate(-90deg)";
    } else {
        clouds[i].style.transform = "rotate(90deg)";
    }

}

let lines = document.getElementsByClassName("lines");


let linesContainer = document.createElement("div");
linesContainer.classList.add("lines-container");

for (let i = 0; i < 8; i++) {
    let linesInnerContainer = document.createElement("div");
    linesInnerContainer.classList.add("lines-inner-container");
    for (let i = 0; i < 2; i++) {
        let corona = document.createElement("img")
        corona.setAttribute("src", `images/corona.png`);
        corona.classList.add("corona");
        linesInnerContainer.appendChild(corona);
    }
    linesContainer.appendChild(linesInnerContainer)
}

lines[0].appendChild(linesContainer);

let coronas = document.getElementsByClassName("corona");

let linesInnerContainer = document.getElementsByClassName("lines-inner-container");

for (let i = 0; i < linesInnerContainer.length; i++) {
    linesInnerContainer[i].style.transform = `rotate(${i * 22}deg)`
}

for (let i = 0; i < 5; i++) {
    coronas[Math.floor(Math.random() * 16)].style.height = "200px";
}

for (let i = 0; i < coronas.length; i++) {

    if (i % 2 == 0) {
        coronas[i].style.transform = "rotate(-90deg)";
    } else {
        coronas[i].style.transform = "rotate(90deg)";
    }

    if (i % 2 == 0) {
        coronas[i].style.marginLeft = `-${coronas[i].offsetHeight / 2 + 30}px`;
    } else {
        coronas[i].style.marginRight = `-${coronas[i].offsetHeight / 2 + 30}px`;
    }

}


let ray = document.getElementById("ray");
let helicopter = document.getElementById("helicopter");

let clicks = 1;
function flying() {
    if (clicks === 1) {
        clicks = 2;
        helicopter.play();
        ray.style.transform = "translateY(-250px)";
        ray.setAttribute("src", "images/flying-ray.gif");
        ray.style.filter = "drop-shadow(0px 200px 20px #000000)";
        setTimeout(() => {
            ray.style.transform = "translateY(0px)";
            ray.style.filter = "drop-shadow(0px 20px 10px #000000)";
        }, 700)
        setTimeout(() => {
            ray.setAttribute("src", "images/ray.gif");
            clicks = 1;
        }, 1300)
    }
}


let score = document.getElementById("score");
let corona = document.getElementsByClassName("corona");

setInterval(() => {
    document.getElementById("funny0").play();
}, 33000)

setInterval(() => {
    document.getElementById("funny1").play();
}, 230000)

setInterval(() => {
    document.getElementById("funny2").play();
}, 50000)

setInterval(() => {
    document.getElementById("rooster").play();
}, 120000)

let music = document.getElementById("music");
let musicOn = document.getElementById("on");
let musicOff = document.getElementById("off");
let audio = document.getElementsByClassName("audio");

let onOff = "off";

function musicOnOff() {
    if (onOff === "off") {
        for (let i = 0; i < audio.length; i++) {
            audio[i].muted = false;
        }
        document.getElementById("background").play();
        musicOn.style.display = "none";
        musicOff.style.display = "block";
        onOff = "on";
    } else {
        for (let i = 0; i < audio.length; i++) {
            audio[i].muted = true;
        }
        document.getElementById("background").pause();
        onOff = "off";
        musicOn.style.display = "block";
        musicOff.style.display = "none";
    }
}