const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })

})

const hidden= document.querySelectorAll('.hidden');
hidden.forEach((el)=>observer.observe(el));

var typed = new Typed("#element", {
    strings: ["Full Stack Developer","Software Developer","Computer Science Student"],
    typeSpeed: 80,
    backSpeed: 80,
 loop: true
})


