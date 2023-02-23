//examine the document object
//console.dir(document);
/*console.log(document);
console.log(document.domain);
console.log(document.url);
console.log(document.title);
document.title = 'Item lister'
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
//document.all[10].textContent = 'hello';
console.log(document.forms);
console.log(document.links);
console.log(document.images);
//

//console.log(document.getElementById('header-title'));
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'HELLO';
headerTitle.innerText = '<h3>ITEMS LISTER</h3>';
console.log(headerTitle.textContent);
headerTitle.innerHTML = '<h3>Items Lister</h3>';
console.log(headerTitle.innerHTML);
header.style.borderBottom = 'solid 3px #000';*/

//getElementByClassName
/*
var item = document.getElementsByClassName('list-group-item');
console.log(item);
console.log(item[1]);
item[1].style.fontWeight = 'bold';
item[1].style.backgroundColor = 'red';

//item.style.backgroundColor = 'red'
//it gives error

for(var i = 0 ;i<item.length;i++)
{
  item[i].style.backgroundColor = 'grey';
}

//getelementbytagname
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'red';
for(var i = 0 ;i<li.length;i++)
{
  li[i].style.backgroundColor = 'grey';
}

//queryselector -> it grab only one thing
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'hello word';

var submit = document.querySelector('input[type ="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
SecondItem.style.color = 'blue';

//queryselectorall
var title = document.querySelectorAll('.title')
console.log(title);

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;i<odd.length;i++)
{
  odd[i].style.backgroundColor = 'grey';
}

var even =document.querySelectorAll('li:nth-child(even)');
for(var i = 0;i<even.length;i++)
{
  even[i].style.backgroundColor = 'pink';
}*/


//var itemList = document.querySelector('#items');
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);*/
//parentElement
/*console.log(itemList.parentElement.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);*/

//childNode

//console.log(itemList.childNodes);

/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
/*console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild);
//console.log(itemList.secondElementChild);
itemList.firstElementChild.style.backgroundColor = 'orange';
itemList.children[2].style.backgroundColor = 'pink';
itemList.children[3].style.backgroundColor = 'lightblue';


//nextSiblings
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//priviousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';
//createElement
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//add attr
newDiv.setAttribute('title','hello div');
//setAttribute(name,value)
//create text node
var newDivText = document.createTextNode('HELLO WORLD');
newDiv.appendChild(newDivText);
//console.log(newDiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);*/

/*var button = document.getElementById('button').addEventListener('click',buttonClick);

*/

//function buttonClick(e){
  //console.log('button clicked');
  /*document.getElementById('header-title'). textContent = 'Changed';
  document.querySelector('main').style.backgroundColor = '#f4f4f4';
  console.log(e);
  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.className);
  console.log(e.target.classList);*/
  
  /*var output = document.getElementById('output');
  output.innerHTML = '<h3>'+e.target.id+'</h3>';*/
 // console.log(e.type);
  //console.log(e.clientX);
  //console.log(e.clientY);
 // console.log(e.clientZ);
  //console.log(e.offsetY);
 // console.log(e.offsetX);
 // console.log(e.altKey);
 // console.log(e.ctrlKey);
  //console.log(e.shiftKey);

//} 
//buttonClick();
//var button = document.//getElementById('button');//button.addEventListener('dblclick',runEvent)
//button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);
/*var button = document.getElementById('box');
box.addEventListener('mouseenter',runEvent);
box.addEventListener('mouseleave',runEvent);
box.addEventListener('mouseover',runEvent);
box.addEventListener('mouseout',runEvent).style.color = '';

function runEvent(e)
{
  console.log('EVENT TYPE:'+e.type);
}*/
var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit',addItem);

//delete item
itemList.addEventListener('click',removeItem);

//filter item
filter.addEventListener('keyup',filterItems);

function addItem(e)
{
  e.preventDefault();
  //console.log(1);
  //GET input value
  var newItem = document.getElementById('item').value;
  //create new li element
  var li = document.createElement('li');
  li.className = 'list-group-item';
  console.log(li);

  li.appendChild(document.createTextNode(newItem));

  //create delete button elemnet

  var deleteBtn = document.createElement('button');

  //add class to del button 
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //append text node
  deleteBtn.appendChild(document.createTextNode('X'));
   // append butto to li

   li.appendChild(deleteBtn);
  //append li to list
  itemList.appendChild(li);

}


function removeItem(e)
{
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure'))
    {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter Items
function filterItems(e)
{
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //console.log(text);
  //get list
  var items = itemList.getElementsByTagName('li');
  //convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    //console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    }
    else{
      item.style.display = 'none';
    }

  });
}


