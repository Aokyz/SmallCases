window.onload=prepareGallery();
function showPic(whichpic){
	if(!document.getElementById("placeholder"))return false;
	var source=whichpic.getAttribute("href");
	var placeholder=document.getElementById("placeholder");
	placeholder.setAttribute("src",source); 
	if(document.getElementById("description")){
	var text=whichpic.getAttribute("title");
	var description=document.getElementById("description");
	description.childNodes[0].nodeValue=text;/*description是代表着p这个元素结点，如果p.nodeValue,那返回的将是null，因为nodeValue是文本结点的内容，而P是一个元素节点，所以先找到它的子节点，这里P只有一个文本节点*/
}
return true;
}
function prepareGallery(){

	// if(!document.getElementById)return false;
	// if(!document.getElementsByName)return false;
	// if(!document.getElementById("imageallery")) return false;

	var gallery=document.getElementById("imagegallery");
	// alert(gallery);
	var links=gallery.getElementsByTagName("a");

	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			showPic(this);

			return false;
			 
		}
	}

}
/*把现有的window.onload事件处理函数的值存入变量oldonload,如果在这个处理函数上还没有绑定任何函数，那么像平时那样
把新函数添加给他；如果已经绑定了一些函数，就把新函数追加到现有指令的末尾*/
// function addLoadEvent(func){
// 	var oldonload=window.onload;
// 	if(typeof window.onload!='function'){
// 		window.onload=func;
// 	}else {
// 		window.onload=function(){
// 			oldonload();
// 			func();
// 		}
// 	}
// }