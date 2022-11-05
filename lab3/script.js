let dragged;
let id;
let index;
let indexDrop;
let list;

  document.addEventListener("dragstart", ({target}) => {
      dragged = target;
      id = target.id;
      list = target.parentNode.children;
      for(let i = 0; i < list.length; i += 1) {
        if(list[i] === dragged){
          index = i;
        }
      }
  });

  document.addEventListener("dragover", (event) => {
      event.preventDefault();
  });

  document.addEventListener("drop", ({target}) => {
   if(target.className == "dropzone" && target.id !== id) {
       dragged.remove( dragged );
      for(let i = 0; i < list.length; i += 1) {
        if(list[i] === target){
          indexDrop = i;
        }
      }
      console.log(index, indexDrop);
      if(index > indexDrop) {
        target.before( dragged );
      } else {
       target.after( dragged );
      }
    }
  });
var buttonarea = document.querySelector('#button');
function generate_new_block() {
	var block = document.createElement('div');
	block.classList.add('block');
	var x=Math.round(0xffffff * Math.random()).toString(16);
	var y=(6-x.length);
	var z='000000';
	var z1 = z.substring(0,y);
	var color= '#' + z1 + x;
	block.style.backgroundColor = color;
	buttonarea.appendChild(block);
	dragElement(block);
}
function dragElement(elem) {
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	elem.onmousedown = dragMouseDown;

	function dragMouseDown(e) {
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		document.onmouseup = closeDragElement;
		document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;
		elem.style.top = (elem.offsetTop - pos2) + "px";
		elem.style.left = (elem.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
		document.onmouseup = null;
		document.onmousemove = null;
	}
}