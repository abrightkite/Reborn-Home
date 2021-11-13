window.onload = function() {
    var area = document.querySelectorAll('.area');

    // 타이틀 클릭 이벤트
    for (var i = 0; i < area.length; i++) {

        area[i].addEventListener('click', function(e){
            e.preventDefault();
            
    
            for (var y = 0; y < area.length; y++) {
                area[y].classList.remove('active');
                e.target.classList.add('active');
            }
        })
    }

}
