setInterval(()=>{
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let date = new Date();
  var hh=date.getHours();
  var mm=date.getMinutes();
  var ss=date.getSeconds();
  var dd=date.toLocaleDateString(undefined,options);
  document.getElementById('time').innerHTML=hh+':'+mm+':'+ss;
  document.getElementById('date').innerHTML=dd+"<br>"+"\t\t~Tharki Coder";
},1000);
