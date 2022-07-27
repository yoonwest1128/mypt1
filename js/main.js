//접기/펼치기
$(".btn").click(function(e){
    e.preventDefault();
    $(".nav").slideToggle();
    $(".btn").toggleClass("open");
    //var btn = $(".btn").find(">i").attr("class");
    //alert(btn);

    if($(".btn").hasClass("open")){
        //open이 있을 때
        $(".btn").find(">i").attr("class","fa fa-angle-up");
    } else {
        //open이 없을 때
        $(".btn").find(">i").attr("class","fa fa-angle-down");
    }
});

$(window).resize(function(){
    var wWidth = $(window).width();
    if(wWidth > 600){
        $(".nav").removeAttr("style");
    }
});

//라이트 박스
$(".lightbox").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
}); 

//이미지 슬라이더
$(".slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                autoplay: false,
              }
        }
    ]
});
