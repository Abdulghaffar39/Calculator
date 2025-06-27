var output = document.getElementById('output');


function show(num) {

  output.innerText += num;
}

function equalto() {

  output.innerText = eval(output.innerText);
  
}

function ac() {
  output.innerText = '';
}

function del() {
  output.innerText = output.innerText.slice(0 , -1);
}




















