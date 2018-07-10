

$(document).ready(function(){
  
{
     $('.btn.p1').on('click',function(){
    
var productName = $('.p1').text();
productName= productName.split(" ")[1];
$.ajax({
    type : 'POST',
    url : '/shop/' + productName,
    success : function(data){
        location.reload();

    }
});
 });

 $('.btn.p2').on('click',function(){  
  var productName = $('.p2').text();
  productName= productName.split(" ")[1];
  newdata = {product :productName}; 
  $.ajax({
    type : 'POST',
    url : '/shop/' + productName,
    success : function(data){
        location.reload();
    }
});
   });

   $('.btn.p3').on('click',function(){
  var productName = $('.p3').text();
  productName= productName.split(" ")[1];
  newdata = {product :productName};
  $.ajax({
    type : 'POST',
    url : '/shop/' + productName,
    success : function(data){
       location.reload();
    }
});
   });
 
   $('.li-selected').on('click',function(){
      var item = $(this).text();
    $.ajax({
        type :'DELETE',
        url : '/shop/' +item,
        success : function(data){
            location.reload();
        }
    });
 });


}});