// style操作 获取设置style
function getStyle(obj,name){
	return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj,false)[name];
}
function setStyle(){
	var obj = arguments[0];
	if(arguments.length == 3){
		var name = arguments[1];
		var value = arguments[2];
		obj.style[name] = value;
	}else{
		var json = arguments[1];
		for(var name in json){
			obj.style[name] =json[name];
		}
	}
};
// class操作  
function getByClass(oParent,sClass){
	if(oParent.getElementByClassName){
		return oParent.getElementByClassName(sClass);
	}else{
		var arr = [];
		var aEle = oParent.getElementsByTagName('*');
		var re = new RegExp('\\b' + sClass + '\\b');
		for(var i = 0; i < aEle.length; i++){
			if(re.test(aEle[i].className)){
				arr.push(aEle[i].className);
			}
		}
		return arr;
	}
}
function hasClass(obj,sClass){
	var re = new RegExp('\\b' + sClass + '\\b');
	return re.test(obj.className);
}

function addClass(obj,sClass){
	if(obj.className){
		if(!hasClass(obj,sClass)){
			obj.className += ' ' + sClass; 
		}
	}else{
		obj.className = sClass;
	}
}

function removeClass(obj,sClass){
	var re = new RegExp('\\b' + sClass + '\\b');
	if(hasClass(obj,sClass)){
		obj.className = obj.className.replace(re,'').replace(/^\s|\s$/g,'').replace(/\s+/g,' ');
	}
}

// 事件绑定与解绑
function addEvent(obj,sEv,fn){
	return obj.addEventListener?obj.addEventListener(sEv,fn,false):obj.attachEvent('on' + sEv,fn);
};

function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}