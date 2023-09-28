console.log('hello world');

function save(){
  let input = document.getElementById('textarea').value;
  let content = document.createTextNode(input);
  let list = document.createElement('li');
  list.appendChild(content);
  document.getElementById('display').appendChild(list);
  
}
