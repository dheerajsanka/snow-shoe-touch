# snow-shoe-touch

A lightweight and flexible version of the [snowshoe JS library](https://github.com/snowshoestamp/snowshoe_jquery). This node module also doesn't depend on jQuery.

##Installation
> npm install snow-shoe-touch

##Usage
`var SnowShoe = require("snow-shoe-touch");`

Once your app is ready to interact with the snow shoe stamp just call the init function.

```
SnowShoe.init("stamp-screen", function(stampData){
		// your logic here
});
```
The first argument is the id of the element on which you are planning to listen for the stamp. Based on snow shoe's recommendation this should
be the id of the body tag.

The second argument is the callback function. This function is called whenever a stamp is detected and the stamp point data is passed along to it. The stampData is the point data that you can 
send over to the snow shoe API to get back the stamp serial number. 

You can learn more about snow shoe stamp [here](http://beta.snowshoestamp.com/) and find their docs [here](https://snowshoe.readme.io/v2.0/docs)
