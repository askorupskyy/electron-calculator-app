var result = 0;
var leng = 0;
var numm = 0;
var clear = 0;

function insert(num) {
    if (clear != 0) {
        document.getElementsByClassName("textview")[0].style.fontSize = '45px';
        document.getElementsByClassName("textview")[0].value = '';
    }
    document.getElementsByClassName("textview")[0].value += num;
    clear = 0;
    var length = document.getElementsByClassName("textview")[0].value.length;
    if (length == 11){
        document.getElementsByClassName("textview")[0].style.fontSize = '30px';
    }
    else if (length == 18) {
        document.getElementsByClassName("textview")[0].style.fontSize = '25px';
    }
    else if (length >= 22) {
        document.getElementsByClassName("textview")[0].value = 'Overload';
        document.getElementsByClassName("textview")[0].style.fontSize = '45px';
        clear = 1;
    }
}

function clr() {
    document.getElementsByClassName("textview")[0].style.fontSize = '45px';
    document.getElementsByClassName("textview")[0].value = '';
}

function equal() {
  var exp = document.getElementsByClassName("textview")[0].value;
  if (exp) {
    exp = eval(exp);
    document.getElementsByClassName("textview")[0].value = exp;
    clear = 1;
  }
  if (length >= 22) {
  document.getElementsByClassName("textview")[0].value = 'Overload';
  }
}

function op(oper) {
    leng = document.getElementsByClassName("textview")[0].value.length;
    var txt = document.getElementsByClassName("textview")[0].value;
    if (leng != 0) {
        document.getElementsByClassName("textview")[0].value =
        document.getElementsByClassName("textview")[0].value + oper;
        if (
        txt.charAt(leng - 1) == oper ||
        txt.charAt(leng - 1) == "/" ||
        txt.charAt(leng - 1) == "+" ||
        txt.charAt(leng - 1) == "%" ||
        txt.charAt(leng - 1) == "-" ||
        txt.charAt(leng - 1) == "*"
        ) {
            txt = txt.replace(txt.charAt(leng - 1), oper);
            document.getElementsByClassName("textview")[0].value = txt;
        }
    }
    clear = 0;
}

window.addEventListener('load', ()=> {
    var buttons = document.getElementsByTagName('button');
    Array.prototype.forEach.call(buttons, function(b){
        b.addEventListener('mousedown', createripple)
    })
})

function createripple(e) {
    var ripple = document.createElement('div');
    var d = Math.max(this.clientWidth, this.clientHeight);
    ripple.style.width = ripple.style.height = d + 'px';
    ripple.style.left = e.clientX - this.offsetLeft - d/2 + 'px';
    ripple.style.top = e.clientY - this.offsetTop - d/2 + 'px';
    ripple.classList.add('ripple');
    this.appendChild(ripple);
    window.setTimeout(()=>{
        this.removeChild(ripple)
    }, 480)
}