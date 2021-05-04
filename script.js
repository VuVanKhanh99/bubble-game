
setInterval(() => {
  var  heightOrac = parseInt(Math.random() * 200 + 35);
  var  topOrac = parseInt(Math.random() * 300 + 30);
    
    
  $("#hidden-portion").css({
    top: topOrac,
    height: heightOrac,
  });
  
  var heightMouse = parseInt(500-topOrac-(heightOrac/2)+15);
 // alert(topOrac+" "+heightOrac+" "+heightMouse);

  $("#character").css({
      bottom: heightMouse
  })

}, 2000);

//$("#character").css({'bottom':'100px'});