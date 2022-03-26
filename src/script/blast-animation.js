const blastObjects = document.querySelectorAll(".blast");
blastObjects.forEach((element)=>{
    element.addEventListener("mouseenter" , ()=>{
        element.classList.add("rubberband-blast");
    })
    element.addEventListener('animationend' , ()=>{
        element.classList.remove("rubberband-blast");
    })
})