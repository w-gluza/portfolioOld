function showHide1() {
        var about1 = document.getElementById("showHideDiv1");
        var about2 = document.getElementById("showHideDiv2").style.display = 'none';
        var about3 = document.getElementById("showHideDiv3").style.display = 'none';
        if(about1.style.display == "flex") {
                about1.style.display = "none";
          }
        else {
            about1.style.display = "flex";
        }
    }

    function showHide2() {
        var about1 = document.getElementById("showHideDiv1").style.display = 'none';
        var about2 = document.getElementById("showHideDiv2");
        var about3 = document.getElementById("showHideDiv3").style.display = 'none';

        if(about2.style.display == "flex") {
                about2.style.display = "none";
          }
        else {
            about2.style.display = "flex";
        }
    }

    function showHide3() {
        var about1 = document.getElementById("showHideDiv1").style.display = 'none';
        var about2 = document.getElementById("showHideDiv2").style.display = 'none';
        var about3 = document.getElementById("showHideDiv3");
        if(about3.style.display == "flex") {
                about3.style.display = "none";
          }
        else {
            about3.style.display = "flex";
        }
    }


    let aboutButtons = document.querySelectorAll('.radio');
let labels = document.querySelectorAll('.label');
let dot = document.querySelector('.dot');
let prevRadio, prevLabel;
aboutButtons.forEach((radio, index) => {
  radio.addEventListener('click', function(e) {
    if (prevRadio) prevRadio.classList.toggle('active');
    if (prevLabel) prevLabel.classList.toggle('active');
    radio.classList.toggle('active');
    prevRadio = radio;
    labels[index].classList.toggle('active');
    prevLabel = labels[index];
    dot.className = `dot pos${index}`;
  });
});
