window.onload = function(){
	var list = ["部门概况","法规制度","工作动态","工作动态1","工作动态2","工作动态3","文化建设","学习园地",
				"学习园地1","学习园地2","学习园地3","工作清单","信息公开","信息公开1","信息公开2"];
	var title_list = {"工作动态":["工作动态1","工作动态2","工作动态3"],
						"学习园地":["学习园地1","学习园地2","学习园地3"],
						"信息公开":["信息公开1","信息公开2"]};
	var str1 = "<a href=\"audit_list.html?id=";
	var str2 = "\">";
	var str3 = "</a>";
	function getQueryString(){
		var qs = location.search.length > 0 ? location.search.substring(1) : "" ;
		items = qs.length?qs.split("&"):[];
		var len = items.length;
		args = {};
		name = null;
		value = null;
		for(var i = 0 ; i<len ; i++){
			item = items[i].split("=");
			name = decodeURIComponent(item[0]);
			value = decodeURIComponent(item[1]);
			if(name.length){
				args[name] = value;
			}
		}
		return args;
	}
	var args = getQueryString();
	if(list[args.id]===undefined){
		window.location.href="audit.html";
		return;
	}
	var current_location_str = str1+args.id+str2+list[args.id]+str3;
	var current_location = document.getElementById("current_location");
	var new_current_location = current_location.innerHTML;
	current_location.innerHTML = new_current_location+current_location_str;
	var title_id = list[args.id];
	var content_text_title_ul = document.getElementById("content_text_title_ul");
	
};