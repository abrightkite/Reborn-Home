$(document).ready(function(){
    $('#introBtn').click(function(e){
      e.preventDefault();
      var offset = $('#intro').offset(); //선택한 태그의 위치를 반환
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#storyBtn').click(function(e){
      e.preventDefault();
      var offset = $('#story').offset();
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#story2Btn').click(function(e){
      e.preventDefault();
      var offset = $('#story2').offset(); 
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#currentBtn').click(function(e){
      e.preventDefault();
      var offset = $('#current').offset();
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#causeBtn').click(function(e){
      e.preventDefault();
      var offset = $('#cause').offset(); 
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#story3Btn').click(function(e){
      e.preventDefault();
      var offset = $('#story3').offset(); 
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#story4Btn').click(function(e){
      e.preventDefault();
      var offset = $('#story4').offset();
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#story5Btn').click(function(e){
      e.preventDefault();
      var offset = $('#story5').offset(); 
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#story6Btn').click(function(e){
      e.preventDefault();
      var offset = $('#story6').offset(); 
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#story7Btn').click(function(e){
      e.preventDefault();
      var offset = $('#story7').offset();
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#galleryBtn').click(function(e){
      e.preventDefault();
      var offset = $('#gallery').offset(); 
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
    $('#presentBtn').click(function(e){
      e.preventDefault();
      var offset = $('#contact_form').offset();
      $('html, body').animate({scrollTop : offset.top}, 400);
    });
  });
//   네비게이션 depth 안보이는 상태
// #gnd 하위의 li 중 depth를 가진 li를 클릭했을 때 depth가 나타남