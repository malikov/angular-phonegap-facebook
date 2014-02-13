# angular-phonegap-facebook
Helper for using PhoneGap's facebook plugin. Dependencie : [angular-phonegap-ready](https://github.com/btford/hitch-a-ride-client/tree/master/app/components/angular-phonegap-ready) by Brian Ford

## How to use
1. Create a facebook app
2. Create a key for your app (android or ios)
3. For ANDROID APPS ONLY hash that key using the following line :
On OSX : 

	keytool -exportcert -alias androiddebugkey -keystore ~/.android/debug.keystore | openssl sha1 -binary | openssl base64

On Windows :

	keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%\.android\debug.keystore | openssl sha1 -binary | openssl base64

4. Add it to your facebook app (Apps > [your app's name] > Settings then click on add platform, select android and add it in Key Hashes)

5. Add the facebook plugin to your app :
	
	<gap:plugin name="com.phonegap.plugins.facebookconnect">
    	<param name="APP_ID" value="..." />
    	<param name="APP_NAME" value="..." />
	</gap:plugin>

6. Get the [angular-phonegap-ready](https://github.com/btford/hitch-a-ride-client/tree/master/app/components/angular-phonegap-ready) component

7. Include both this component and angular-phonegap-facebook

8. In the app.module().run function add the injected component and call facebook.init([AppId])


## Example 
To be added

## License
MIT
