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

      //set the appid in the init function
      init : phonegapReady(function (appId,options) {
        //default options include some permissions

        appId = typeof appId !== 'undefined' ? appId : false;
        options = options || {permissions:[]};

        if(!appId)
          return console.log('No appId was provided please add your appId');

        angular.extend(this.options,options);
        this.appId = appId;

        FB.init({
              appId: this.appId,
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

        FB.Event(event,callbackFct);

      },
      login : function(callbackFct){

        if(typeof callbackFct !== 'function')
          return console.log('Argument should be a function');

        FB.login(callbackFct);
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
      me : function(){
        // used to interact with fb's api
      }

    };

    return facebook; 

  });