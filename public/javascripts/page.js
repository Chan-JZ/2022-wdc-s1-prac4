// let xhr1 = new XMLHttpRequest();
// let date1 = new Date();


// xhr1.onreadystatechange = function() {
//     console.log(this.responseText);
//     if (this.readyState == 4 && this.status == 200) {
//         document.getElementById("task4.1-p").innerHTML = `This page was last viewed ` + date1;
//         date1 = new Date();
//     }
// }
// xhr1.open('GET', '/last.txt', true);
// xhr1.send();

let counter=0;
let color2 ="";
function changeColor2() {

      let xhr2 = new XMLHttpRequest();
      xhr2.open('GET', '/color.txt', true);
      xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            document.getElementById("task4.2-h1").innerHTML = this.responseText;
            document.getElementById("task4.2-h1").style.color = this.responseText;
            counter++;
        }
      }
      xhr2.send();
}