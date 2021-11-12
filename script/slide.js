$(function(){

    // 변수 설정
    var $slideShow = $('.slideShow'),
        $slideGroup = $slideShow.find('.slideArea'),
        $slide = $slideGroup.find('.slide'),
        $nav = $slideShow.find('.slideNav'),
        $indicator = $slideShow.find('.slideIndicator'),
        indicatorHTML = '',
        slideCount = $slide.length,
        curIndex = 0,
        timer; 

    // HTML 요소 생성 및 배치 ???
    $slide.each(function(i){
        $(this).css({left: 50 * i + '%'});
        indicatorHTML += '<a href="#">' + (i+1) +'</a>'
    })
    $indicator.html(indicatorHTML);

    // 모든 슬라이드 표시 (슬라이드 이동함수)
    function goToSlide(index) {
        $slideGroup.animate({left:-50 * index + '%'}, 500);
        curIndex = index;

        updateNav();
    }
    // 슬라이드 상태에 따라 탐색 및 표시를 업데이트
    function updateNav() {
        // 인디게이터 현재 슬라이드 표시 해제
        $indicator.find('a').removeClass('active').eq(curIndex).addClass('active');
    }

    // 인디게이터 클릭시 해당 슬라이드 표시
    $indicator.find('a').click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        goToSlide(idx);
    })

    // 인디게이터 클릭시 해당 슬라이드 표시
    $indicator.find('a').click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        goToSlide(idx);
    })
    
    // 네비게이션(좌우버튼) 클릭시 해당 슬라이드 표시
    $nav.find('a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('prev')) {
            goToSlide(curIndex-1);
        } else {
            goToSlide(curIndex+1);
        }
    })

    // 첫번째 슬라이드 표시
    goToSlide(curIndex);

    /* ------------자동슬라이드------------ */ 
    function startTimer() {
        timer = setInterval(function(){
            var nextIndex = (curIndex + 1) % slideCount
            goToSlide(nextIndex);
        }, 2000)
    }
    function stopTimer() {
        clearInterval(timer);
    }

    // $slideShow.mouseenter(function(){
    //     stopTimer();
    // }).mouseleave(function(){
    //     startTimer();
    // })
    $slideShow.on({
        mouseenter : stopTimer,
        mouseleave : startTimer
    })


    startTimer();

})