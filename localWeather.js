$(document).ready(function() 
{
  var cloud ="https://c2.staticflickr.com/6/5693/30822839202_152c0ee367_o.png";
 var drizzle = "https://pixabay.com/p-1081979/?no_redirect";
 var windy = "https://c2.staticflickr.com/6/5674/22760978548_0ac6809a81_o.png";
var storm = "https://c2.staticflickr.com/6/5450/30903481696_d8ccdb3448_o.png";
var snow = "https://c2.staticflickr.com/6/5675/30903481206_4dbb1446ed_o.png";
var rain = "https://c2.staticflickr.com/6/5802/22760974588_ee7034a8ee_o.png";
 var clear = "https://c2.staticflickr.com/6/5450/30903475186_b7d26bf0bd_o.png"; 
  
 var clearimg ='url("https://crystalseye.files.wordpress.com/2011/08/dsc_0724.jpg")';
 var drizzleimg ='url("http://bloximages.chicago2.vip.townnews.com/cumberlink.com/content/tncms/assets/v3/editorial/c/2b/c2b35358-b107-11e2-96e6-001a4bcf887a/517ed1e66451c.image.jpg")';
 var windyimg = 'url("https://s-media-cache-ak0.pinimg.com/736x/45/00/4a/45004a2e704e7f8a8999a15e95f8bd9f.jpg")';
 var stormimg = 'url("https://kimgosselinblog.files.wordpress.com/2015/05/stormy-weather.jpg")';
 var snowimg = 'url("http://images.naldzgraphics.net/2012/10/16-blue-background-nice-hi-resolution-snowing-texture.jpg")';
 var rainimg = 'url("http://img15.deviantart.net/e677/i/2013/010/f/d/its_raining__x_by_just_love_life-d5r24je.jpg")';
 var cloudimg= 'url("http://www.gannett-cdn.com/-mm-/35b11fa2b7523365ba63c7edde194b885d6036b0/c=0-49-2059-1598&r=x404&c=534x401/local/-/media/MIGroup/PortHuron/2014/08/27/1409139184000-Cloudy.jpg")'; 
  
 function loadWeather()
    {
     var $local = $('#location');
     var $temp = $('#weather');
     var $weather= $('.weather');
    var isCelsius = true;
     var $celsius = $("#tempTog");
     var $fahr = $("#tempTogF") 
      
	if(!navigator.geolocation){
		$local.html("<p>Geolocation is not supported by your browser</p>");
		return;
	}  
	function sucess(position)
		 {
		
 
      var yourLat = position.coords.latitude;
      var yourLong= position.coords.longitude;
      console.log(yourLong+" and "+yourLat);
		
		 
  var openWeatherAppUrl = 'https://fcc-weather-api.glitch.me/api/current?lat='+ yourLat + '&lon=' + yourLong;
        $.getJSON(openWeatherAppUrl, function(wdata)
        {
 var currentWeather = wdata.weather[0].description;
 var temp = Math.floor(wdata.main.temp); 
 var yourCity=wdata.name;         
 var yourCountry = wdata.sys.country;         
 console.log(wdata);
 var yourIcon = wdata.weather[0].main;
 console.log(yourIcon);         
          
          
          
      $local.html('<h2 class="text-center">'+yourCity+', '+yourCountry+'</h2>');
      $weather.html('<h2 class="text-center">'+currentWeather+'</h2>');
      $temp.html(temp).append("&deg;C"); 
          
     $celsius.click(function(){
     if(isCelsius==true){
      var tempF= (temp*9/5)+32;
     temp=tempF;
     $temp.html(Math.floor(temp)).append("&deg;F");
     isCelsius=false; 
     };   
        });
      $fahr.click(function(){
     if(isCelsius==false){
       var tempC= (temp-32)*(5/9);
     temp=tempC;
     $temp.html(Math.floor(temp)).append("&deg;C");
     isCelsius=true;
     };   
   
        }); 
          
          
          
       switch(yourIcon){
         case "Thunderstorm":
         document.getElementById("weatherIcon").src= storm;
$('body').css('background-image',stormimg);           
          break; 
                     
          case "Clouds":
         document.getElementById("weatherIcon").src= cloud;
$('body').css('background-image',cloudimg);            
          break;
          case "Drizzle":
         document.getElementById("weatherIcon").src= drizzle;
$('body').css('background-image',drizzleimg);   
          break; 
          case "Rain":
         document.getElementById("weatherIcon").src= rain;
$('body').css('background-image',rainimg);   
          break;
          case "Snow":
         document.getElementById("weatherIcon").src= snow;
  $('body').css('background-image',snowimg); 
           
         break;
          case "Atomosphere":
         document.getElementById("weatherIcon").src= windy;
$('body').css('background-image',windyimg);  
        break;
          case "Clear":
         document.getElementById("weatherIcon").src= clear;
  $('body').css('background-image',clearimg); 
          break;
          case "Extreme":
         document.getElementById("weatherIcon").src= storm;
$('body').css('background-image',stormimg);            
          break;
          case "Additional":
         document.getElementById("weatherIcon").src= windy;
$('body').css('background-image',windyimg);   
          break; 
         default:
          console.log("sorry something is wrong"); 
    }; 
          
   });
   }
   function error(){
	   $local.html("Unable to retrieve your location");
   };
   $local.html("<p>Locating...</p>");
   navigator.geolocation.getCurrentPosition(sucess,error);
   
    };
	
	
   
loadWeather();



});