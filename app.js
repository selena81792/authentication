'use strict';

function onLoadFunction(){

    gapi.client.setApiKey('AIzaSyCLC2odraxbfJe2XgYVWgv7XZEcP-68OJs');
    gapi.client.load('plus','v1', function() {});
}

window.fbAsyncInit = function() {
    FB.init({
        appId            : '101330020683633',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.11',
        status           : true
    });


FB.getLoginStatus(function(response){

    if(response.status === 'connected'){
    }  else if(response.status === 'not_authorized'){
        // You are not authorized
    }else{
        // You are not logged in
  }
});
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

