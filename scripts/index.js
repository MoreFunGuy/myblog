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

//大轮播图	

var bt_l = document.querySelector("#rotation .bt_l");
var bt_r = document.querySelector("#rotation .bt_r");
//var bt_l = document.querySelector("#rotation .bt_r");
var moveCount = 0;
var  bg_pic_img = document.getElementById("bg_pic_img");
bt_r.onclick = function(){
		if(moveCount<3){			
			moveCount++;		
			moveElement("bg_pic_img",-930*moveCount,-30,10);
		}
};
bt_l.onclick = function(){
	if(moveCount>0){		
		moveCount--;
		moveElement("bg_pic_img",-930*moveCount,-30,10);
	}
};






