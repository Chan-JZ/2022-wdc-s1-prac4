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

function updateLog() {
    let xhr3 = new XMLHttpRequest();
    xhr3.open('GET', '/log.html', true);
    xhr3.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let dateArr = JSON.parse(this.responseText);
            console.log(dateArr[0]);
            let list = document.getElementById("list");
            
            for (let i in dateArr) {
                let element = document.createElement("li");
                element.innerHTML = dateArr[i];
                list.appendChild(element);
            }
        }
    }
    xhr3.send();
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
