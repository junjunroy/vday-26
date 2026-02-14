var rose1Obj = document.querySelector(".obj_rose1")
var rose2Obj = document.querySelector(".obj_rose2")
var bebuObj = document.querySelector(".obj_bebu")
var greetObj = document.querySelector(".obj_greet")

rose1Obj.addEventListener('load', () => {
    const rose1SVG = rose1Obj.contentDocument
    const rose1Path = rose1SVG.getElementById("path_rose1")
    const rose1PathLength = rose1Path.getTotalLength()

    rose1Path.style.strokeDasharray = rose1PathLength
    rose1Path.style.strokeDashoffset = rose1PathLength

    rose1Path.style.animation = "draw_rose1 4s ease-in forwards"
})

rose2Obj.addEventListener('load', () => {
    const rose2SVG = rose2Obj.contentDocument

    //path of the main rose
    const rose2Path = rose2SVG.getElementById("path_rose2")
    const rose2PathLength = rose2Path.getTotalLength()

    //path of the leaves
    const rose2LeafPath = rose2SVG.getElementById("path_rose2_leaf")
    const rose2LeafPathLength = rose2LeafPath.getTotalLength()

    //set both rose and leaf path invisible
    rose2Path.style.strokeDasharray = rose2PathLength
    rose2Path.style.strokeDashoffset = rose2PathLength
    rose2LeafPath.style.strokeDasharray = rose2LeafPathLength
    rose2LeafPath.style.strokeDashoffset = rose2LeafPathLength

    //set animations defined in rose2.css
    rose2Path.style.animation = "draw_rose2 2s ease-in 1.6s forwards"
    rose2LeafPath.style.animation = "draw_rose2 2s ease-in forwards"
})

bebuObj.addEventListener('load', () => {
    const bebuSVG = bebuObj.contentDocument
    const bebuPaths = bebuSVG.querySelectorAll("path")

    console.log(bebuPaths.length)

    bebuPaths.forEach(path => {
        
        var totLength = path.getTotalLength()
        
        path.style.strokeDasharray = totLength
        path.style.strokeDashoffset = totLength
        
        if(path.id == "path17") {
            path.style.animation = "anm_fill 2s ease-in-out forwards"
        } else {
            path.style.animation = "invis 1s ease-in forwards"
        }
    });
})

greetObj.addEventListener('load', () => {
    const greetSVG = greetObj.contentDocument
    const greetPath = greetSVG.querySelector("path")
    const greetPathLength = greetPath.getTotalLength()

    greetPath.style.strokeDasharray = greetPathLength
    greetPath.style.strokeDashoffset = greetPathLength

    greetPath.style.animation = "invis 10s ease-in-out forwards"
})