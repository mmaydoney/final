$(document).ready({

  $.ajax({
  url:'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kona%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', success: function(json_weather){

https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys

  $('<h1>').text(json_weather.query.results.channel.title ).appendTo('#main');
  $('<h2>').text('Date: ').appendTo('#main');
  $('#main').append(json_weather.query.results.channel.item.condition.date);
  $('<h2>').text('Temperature: ').appendTo('#main');
  $('#main').append(json_weather.query.results.channel.item.condition.temp);
  $('<h2>').text('Wind Chill: ').appendTo('#main');
  $('#main').append(json_weather.query.results.channel.wind.chill);
  }

  });



});
