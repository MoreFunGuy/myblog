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
//杂七杂八中小图放大
var spiderMan = document.getElementById("spiderMan");
spiderMan.onmouseover = function(){
	document.getElementById("mdspiderMan").style.display = "block";
}
spiderMan.onmouseout = function(){
	document.getElementById("mdspiderMan").style.display = "none";
}

var madilyn = document.getElementById("madilyn");
madilyn.onmouseover = function(){
	document.getElementById("mdmadilyn").style.display = "block";
}
madilyn.onmouseout = function(){
	document.getElementById("mdmadilyn").style.display = "none";
}

var byx = document.getElementById("byx");
byx.onmouseover = function(){
	document.getElementById("mdbyx").style.display = "block";
}
byx.onmouseout = function(){
	document.getElementById("mdbyx").style.display = "none";
}
/****表单中文字获取焦点后消失****/
var userName = document.getElementsByTagName("input")[0];
var github = document.getElementsByTagName("input")[1];
var email = document.getElementsByTagName("input")[2];
var question = document.getElementsByTagName("textarea")[0];
question.defaultValue = "Your question...";
//姓名、github账号、邮箱
userName.onfocus = function(){
	if(this.value == "Your Name..."){
		this.value = "";
	}
};
userName.onblur = function(){
	if(this.value == ""){
		this.value = "Your Name..."
	}
};
github.onfocus = function(){
	if(this.value == "Your github..."){
		this.value = "";
	}
};
github.onblur = function(){
	if(this.value == ""){
		this.value = "Your github..."
	}
};
email.onfocus = function(){
	if(this.value == "Your Email..."){
		this.value = "";
	}
};
email.onblur = function(){
	if(this.value == ""){
		this.value = "Your Email..."
	}
};
//建议
question.onfocus = function(){
	if(this.value == "Your question..."){
		this.value = "";
	}
};
question.onblur = function(){
	if(this.value == ""){
		this.value = "Your question..."
	}
};




























