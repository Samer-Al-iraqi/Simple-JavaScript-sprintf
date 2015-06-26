String.prototype.sprintf = function () {
	if(!arguments.length) return this.split('%s').join('');
	var text=this.split('%s'),result=text.shift();
	$.each(arguments, function(i, value){
		if(!text.length) return result;
		result = result + value+text.shift();
	});
	if(text.length) result=result+text.join('');
	return result;
};
