const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else {
      entry.target.classList.remove('show');
    }
  })

})

const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

var typed = new Typed("#element", {
  strings: ["Full Stack Developer", "Software Developer", "Computer Science Student"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true
})


var pic = [
  "hello",
  "./img/c++.png",
  "./img/CSS.png"
]
var celticColor = "#ffa001",
  indoIranianColor = "#535050";
  

  Highcharts.chart('skillcontainer', {

    chart: {
      type: 'networkgraph',
      marginTop: 70
    },
    title: {
      text: '',
    },


    plotOptions: {
      networkgraph: {
        keys: ['from', 'to'],
        layoutAlgorithm: {
          enableSimulation: true,
          integration: 'verlet',
          linkLength: 80
        }
      }
    },

    series: [{
      marker: {
        radius: 60,
      },
      dataLabels: {
        enabled: true,
        linkFormat: '',
        allowOverlap: true,

      },
      data: [
        ['HTML', 'CSS'],
        ['Javascript', 'ReactJS'],
        ['NodeJS', 'Expressjs'],
        ['MongoDB', 'MYSQL'],
        ['Github', 'C++']
      ],

      nodes: [{
        id: 'HTML',
        color: celticColor,

      }, {
        id: 'CSS',
        color: indoIranianColor
      }, {
        id: 'Javascript',
        color: celticColor
      }, {
        id: 'ReactJS',
        color: indoIranianColor
      }, {
        id: 'NodeJS',
        color: celticColor,
      }, {
        id: 'Expressjs',
        color: indoIranianColor
      }, {
        id: 'C++',
        color: celticColor
      }, {
        id: 'Github',
        color: indoIranianColor
      }, {
        id: 'MYSQL',
        color: celticColor
      }, {
        id: 'MongoDB',
        color: indoIranianColor
      }]
    }]
  });


const x = document.getElementsByClassName("carEdu");
const arr = ['school10', 'school12', 'clg'];
const seek = ['3.5', '7.5', '11.5'];

function svghover() {
    x[0].id = "carEdu";
    for (let i = 0; i < 3; i++) {
        const temp = document.getElementsByClassName(arr[i]);
        temp[0].style.animation = `educard ${seek[i]}s ease-in forwards`;
    }
}

function svghoverrem() {
    x[0].id = "";
    for (let i = 0; i < 3; i++) {
        const temp = document.getElementsByClassName(arr[i]);
        temp[0].style.animation = "";
        temp[0].style.opacity = "0";
    }
}


$(window).on("load", educationAddFadeIn());

$(window).scroll(function () {
    educationAddFadeIn(true);
});

function educationAddFadeIn(repeat) {
    var classToFadeIn = ".education-will-fadeIn";
    
    $(classToFadeIn).each(function (index) {
        var isElementInView = Utils.isElementInView($(this), false);
        if (isElementInView) {
            if (
                !$(this).hasClass("education-fadeInRight") &&
                !$(this).hasClass("education-fadeInLeft")
                ) {
                    if (index % 2 == 0) $(this).addClass("education-fadeInRight");
                    else $(this).addClass("education-fadeInLeft");
                }
            } else if (repeat) {
                $(this).removeClass("education-fadeInRight");
                $(this).removeClass("education-fadeInLeft");
            }
        });
    }
    
// function svgcarRestart() {
//     svghoverrem();
//     console.log("clicked");
// }
