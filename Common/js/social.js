//facebook sharing start

var description = "";
var redirectURL = "https://specials.manoramaonline.com/News/2018/rain-special/index.html";
var picture = 'https://specials.manoramaonline.com/News/2018/rain-special/images/fb-share.jpg';
var fb_appId = "1412725395647953";
var title = "Fifa World Cup 2018 | Onmanorama";

if((typeof(fb_appId) == "undefined") || (null == fb_appId) || ("undefined" == fb_appId) || ("" == fb_appId)) fb_appId = '1412725395647953';//www.Onmanorama.com facebook id
fb_appId="1412725395647953";
FB.init({
	appId:fb_appId,
	version    : 'v2.0',
	status: true, 
	cookie: true
});
	
function postToFb(text,urll,image) { 	
	// calling the API ... 		
	if(text=="")text="Fifa World Cup 2018 | Onmanorama";
	if(image=="")image=picture;
	if(urll=="")urll=redirectURL;
	var obj = { 
		method: 'feed', 
		display: "popup",		
		link:urll , 
		picture: image,
		name: title, 
		caption: '', 
		description: text
	}; 
	
	function callback(response) { 		
		//document.getElementById('msg').innerHTML = fb_appId + response['post_id'];
	} 
	FB.ui(obj, callback);	
}
//facebook sharing end

//twitter sharing start
function twitterShare(text,URL,image){
	if(text=="")text="Fifa World Cup 2018 | Onmanorama";
	if(URL=="")URL=image;
    window.open(encodeURI("http://twitter.com/intent/tweet?text="+text+"&url="+URL+"&url="+image+"&related=Manorma"),'abc','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
}
//twitter sharing end


function whatsappShareBtn(text,url){
			if(text=="")text="Fifa World Cup 2018 | Onmanorama";
			if(url==null){
				url = redirectURL;
			}
			var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);

			var whatsapp_url = "https://api.whatsapp.com/send?text=" + message;
            //window.location.href = whatsapp_url;
			window.open(whatsapp_url);

}

function sharegoogleplusthruURL(page_url)
		{
			execute = 'https://plus.google.com/share?url=' + page_url;
			window.open(execute,'_blank');
		}