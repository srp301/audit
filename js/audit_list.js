window.onload = function(){
	var list = {
				"nav1":"部门概况","nav11":"部门简介","nav12":"部门领导","nav13":"内设机构","nav14":"计划总结",
				"nav2":"法规制度","nav21":"国家法律","nav22":"部门法规","nav23":"学校制度","nav24":"审计制度",
				"nav3":"工作动态",
				"nav4":"文化建设","nav41":"支部建设","nav42":"工会活动","nav43":"文化生活",
				"nav5":"学习园地","nav51":"他山之石","nav52":"业务交流","nav53":"案例研讨",
				"nav6":"工作清单","nav61":"责任清单","nav62":"负面清单","nav63":"服务清单",
				"nav7":"信息公开"
				};
	var str1 = "<a href=\"audit_list.html?nav=";
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
	var args2;
	var current_location_str;
	if(list[args.nav]===undefined){
		window.location.href="audit.html";
		return;
	}
	var a = args.nav+"1";
	if(list[a]===undefined){
		current_location_str = str1+args.nav+str2+list[args.nav]+str3;
	}else{
		if(document.querySelector(".content")){
			window.location.href="audit_content.html?nav="+a;
		}else{
			window.location.href="audit_list.html?nav="+a;
		}
		return;
	}
	if(args.nav.length==5){
		args2 = args.nav.slice(0,4);
		if(document.querySelector(".content")){
			current_location_str = str1+args2+str2+list[args2]+str3+" > "+
								   str1+args.nav+str2+list[args.nav]+str3+" > 正文";
		}else{
			current_location_str = str1+args2+str2+list[args2]+str3+" > "+str1+args.nav+str2+list[args.nav]+str3;
		}
	}
	var current_location = document.getElementById("current_location");
	var new_current_location = current_location.innerHTML;
	current_location.innerHTML = new_current_location+current_location_str;
};