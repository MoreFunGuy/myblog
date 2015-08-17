/***用jQuery实现下拉菜单***/

	$("#content .nav>ul>li:eq(0)").hover(function(){
		$("#content .nav ul li .nav_body:eq(0)").slideDown(500);
		$("#content .nav ul li .nav_header span:eq(0)").css("transform","rotate(90deg)");
	},function(){
		$("#content .nav ul li .nav_body:eq(0)").slideUp(500);
		$("#content .nav ul li .nav_header span:eq(0)").css("transform","rotate(0deg)");
	})
	$("#content .nav>ul>li:eq(1)").hover(function(){
		$("#content .nav ul li .nav_body:eq(1)").slideDown(500);
		$("#content .nav ul li .nav_header span:eq(1)").css("transform","rotate(90deg)");
	},function(){
		$("#content .nav ul li .nav_body:eq(1)").slideUp(500);
		$("#content .nav ul li .nav_header span:eq(1)").css("transform","rotate(0deg)");
	})
	$("#content .nav>ul>li:eq(2)").hover(function(){
		$("#content .nav ul li .nav_body:eq(2)").slideDown(500);
		$("#content .nav ul li .nav_header span:eq(2)").css("transform","rotate(90deg)");
	},function(){
		$("#content .nav ul li .nav_body:eq(2)").slideUp(500);
		$("#content .nav ul li .nav_header span:eq(2)").css("transform","rotate(0deg)");
	})

	
	
	