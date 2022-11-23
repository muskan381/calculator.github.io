let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        //clear
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        //delete
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1)
            document.querySelector('input').value = string;
        }

        //multiplier
        else if (e.target.innerHTML == 'x') {
            string = string * e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        //percentage
        else if (e.target.innerHTML == '%') {
            string = string / 100;
            document.querySelector('input').value = string;
        }

        //divides
        else if (e.target.innerHTML == '%') {
            string = string / e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        //adds
        else {
            console.log(e.target.innerHTML == '+')
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})