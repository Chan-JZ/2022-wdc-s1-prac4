function last() {
    let xhr1 = new XMLHttpRequest();
    xhr1.open('GET', '/last.txt', true);
    xhr1.onreadystatechange = function() {
        console.log(this.responseText);
        if (this.readyState == 4 && this.status == 200) {     
            let newDate =  new Date();
            document.getElementById("task4.1-p").innerText = `This page was last viewed ` + this.responseText.toString();
        }
    }
    xhr1.send();
}


function changeColor2() {
    let xhr2 = new XMLHttpRequest();
    xhr2.open('GET', '/color.txt', true);
    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            document.getElementById("task4.2-h1").innerHTML = this.responseText;
            document.getElementById("task4.2-h1").style.color = this.responseText;
        }
    }
    xhr2.send();
}

function timerStart() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/log.json', true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let dateArr = JSON.parse(this.responseText);
            console.log(dateArr[0]);
            let list = document.getElementById("list2");
            
            for (let i in dateArr) {
                let element = document.createElement("li");
                element.innerHTML = dateArr[i];
                list.appendChild(element);
            }
        }
    }
    xhr.send();
    setTimeout(updateLog2, 10000);
}

function updateLog2() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/log-ro.json', true);
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let dateArr = JSON.parse(this.responseText);
            console.log(dateArr[0]);
            let list = document.getElementById("list2");
            
            let child = list.lastElementChild;
            while (child) {
                list.removeChild(child);
                child = list.lastElementChild;
            }

            for (let i in dateArr) {
                let element = document.createElement("li");
                element.innerHTML = dateArr[i];
                list.appendChild(element);
            }
        }
    }
    xhr.send();
}

function testFunc() {

}

function callContentAjax() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/content.ajax', true);
    xhr.onreadystatechange = function() {
        console.log(this.status);
        console.log(this.responseText);

        let main = document.getElementById("body");
        if (this.readyState == 4 && this.status == 200) {
            let lastChild = main.lastElementChild;
            while (lastChild) {
                main.removeChild(lastChild);
                lastChild = main.lastElementChild;
            }
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let paragraphsArr = JSON.parse(this.responseText);
            p1.innerHTML = paragraphsArr[0];
            p2.innerHTML = paragraphsArr[1];
            main.appendChild(p1);
            main.appendChild(p2);       
        } else if (this.readyState == 4 && this.status == 403) {
            console.log("This page is forbidden");
            let terms = document.createElement("p");
            terms.innerHTML = "Do you agree to the Terms and Conditions?"
            let button = document.createElement("button");
            button.innerHTML = "Agree";
            button.addEventListener("click", function() {
                let xhr2 = new XMLHttpRequest();
                xhr2.open('GET', '/accept', true);
                xhr2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        callContentAjax();
                    }
                }
                xhr2.send(); 
            });
            main.appendChild(terms);
            main.appendChild(button);
        }
    }
    xhr.send(); 
}