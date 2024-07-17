function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    gsap.to(".nav_bottom", {
      height: "29.5vh",
    });
    gsap.to(".nav_part2 h5", {
      display: "block",
    });
    gsap.to(".nav_part2 h5 span", {
      y: 0,
      stagger: { amount: 0.6 },
    });
  });
  nav.addEventListener("mouseleave", function () {
    gsap.to(".nav_part2 h5 span", {
      y: 25,
      stagger: { amount: 0.2 },
    });
    gsap.to(".nav_bottom", {
      height: 0,
      duration: 0.2,
    });
    gsap.to(".nav_part2 h5", {
      display: "none",
      duration: 0.05,
    });
  });
}
 function right_elem()
 {
  const right_elems = document.querySelectorAll(".right_elem");

right_elems.forEach((elem)=>
{
    elem.addEventListener("mouseenter" , ()=>
    {
     gsap.to(elem.childNodes[3],{
      opacity:1,
      scale:1

     })
      
    })
    elem.addEventListener("mouseleave" , ()=>
      {
        gsap.to(elem.childNodes[3],{
          opacity:0,
          scale:0
        })
      })
      elem.addEventListener("mousemove" , (dets)=>
        {
          gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-40,
            y:dets.y - elem.getBoundingClientRect().y-125
          })
        })
})
}

function main_3(){
const page_center = document.querySelector(".page_center");
const video = document.querySelector(".main_3 video")

page_center.addEventListener("click" , ()=>
{
  video.play();
  gsap.to(video,{
    opacity:1,
    transform:"scaleX(1) scaleY(1)"
  })
})
video.addEventListener("click" , ()=>
{
  video.pause();
  gsap.to(video,{
    opacity:0,
    transform:"scaleX(0.7) scaleY(0)",
    borderRadius:"10px"
  })
})
}
navAnimation();
right_elem();
main_3();
