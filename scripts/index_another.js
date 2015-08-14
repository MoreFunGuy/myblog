//给head加下拉菜单
var list_parent = document.getElementById("list_parent");
var list_head = document.querySelector("#list_head");
var list_body = document.querySelector("#list_body");
list_parent.onmouseover = function(){
	list_body.style.display = "block";
	
};
list_parent.onmouseout = function(){
	list_body.style.display = "none";
};
list_head.onmouseover = function(){
	list_head.style.boxShadow = "1px 1px 2px #152840 inset";
}
list_head.onmouseout = function(){
	list_head.style.boxShadow = "";
}

var lbp = document.querySelectorAll("#list_body .list_body_parent");
for(var i=0;i<lbp.length;i++){
	lbp[i].onmouseover = function(){
		this.childNodes[3].style.display = "block";
	};
	lbp[i].onmouseout = function(){
		this.childNodes[3].style.display = "none";
	};
}
//加几个链接
var listHeads = document.querySelectorAll(".list_body_head");
listHeads[0].onclick = function(){
	location.assign("http://www.syc1992.com/pages/resume.html");
};
listHeads[1].onclick = function(){
	location.assign("http://www.syc1992.com/pages/works.html");
};
listHeads[2].onclick = function(){
	location.assign("http://www.syc1992.com/pages/IT_technology.html");
};
listHeads[3].onclick = function(){
	location.assign("http://www.syc1992.com/pages/something.html");
};




