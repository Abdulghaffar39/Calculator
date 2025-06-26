var output = document.getElementById('output');


function show(num) {

  output.value += num;
}

function equalto() {

  output.value = eval(output.value);
  
}

function ac() {
  output.value = '';
}

function del() {
  output.value = output.value.slice(0 , -1);
}




















