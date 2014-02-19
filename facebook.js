'use strict';
/*
  angular component for using PhoneGap's facebook plugin

  Dependencies : 
    angular-phonegap-ready by Brian Ford
*/
angular.module('malikov.phonegap.facebook',
  ['btford.phonegap.ready']).
  factory('facebook', function (phonegapReady) {
    //warn if none of this elements are present

    if(typeof CDV == 'undefined')
      return console.log('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');

    if(typeof FB == 'undefined')
      return console.log('FB variable does not exist. Check that you have included the Facebook JS SDK file');
    
    var facebook = {
      apiUrl : '',
      appId : null,
      options : {},
      scope : { scope: "email" },
      
      //set the appid in the init function
      init : function(appId,options){
        console.log("facebook init function");

        appId = typeof appId !== 'undefined' ? appId : false;
        options = options || {permissions:[]};

        if(!appId)
          return console.log('No appId was provided please add your appId');

        angular.extend(this.options,options);
        this.appId = appId;

        this.initFb(this.appId);
        
      },
      initFb : phonegapReady(function(appId){
        FB.init({
                appId: appId,
                nativeInterface: CDV.FB,
                useCachedDialogs: false
        });
      }),
      eventSubscribe : function(event,callbackFct){
        event = typeof event !== 'undefined' ? event : false;

        if(!event)
          return console.log("Argument event can't be empty");

        if(typeof callbackFct !== 'function')
          return console.log('Argument should be a function');

        FB.Event.subscribe(event,callbackFct);

      },
      login : function(callbackFct,scope){
        // ideally you wanna create the scope with the permissions passed in the init function
        
        if(typeof callbackFct !== 'function')
          return console.log('Argument should be a function');
        
        scope = scope || this.scope;

        FB.login(callbackFct,scope);
      },
      logout : function(callbackFct){
        if(typeof callbackFct !== 'function')
          return console.log('Argument should be a function');

        Fb.logout(callbackFct);
      },
      getLoginStatus : function(callbackFct){
        if(typeof callbackFct !== 'function')
          return console.log('Argument should be a function');

        FB.getLoginStatus(callbackFct);
      },
      me : function(callbackFct){
        // used to get your facebook profile
        FB.api('/me',callbackFct);
      },
      getFriends : function(callbackFct){

      }

    };

    return facebook; 

  });