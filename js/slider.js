
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__lista'),{
        slidesToShow:1,
        slidesToScroll:1,
        type:'slider',
        autoplay:1000,
        dots:'.carousel__indicadores',
        arrows:{
            prev: '.carousel__anterior', 
            next: '.carousel__siguiente'
        }
    });
});