const openPopUp=document.getElementById('open_pop_up');
console.log(openPopUp);
const closePopUp=document.getElementById('pop_up_close');
console.log(closePopUp);
const popUp=document.getElementById('pop_up');
console.log(popUp);
const nav=document.getElementById('nav');

openPopUp.addEventListener('click',function(e){
    // e.preventDefault();
    console.log('1');
    popUp.classList.add('active');
    nav.classList.add('hider');

})
closePopUp.addEventListener('click',()=>{
    popUp.classList.remove('active');
    nav.classList.remove('hider');
    console.log('1')
})

$(function(){
    $('.rev_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        responsive: [
            // {
            // //   breakpoint: 1024,
            // //   settings: {
            // //     slidesToShow: 3,
            // //     slidesToScroll: 3,
            // //     infinite: true,
            // //     dots: true
            // //   }
            // },
            // {
            //   breakpoint: 600,
            //   settings: {
            //     slidesToShow: 2,
            //     slidesToScroll: 2
            //   }
            // },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
        // autoplay:true,
        // autoplaySpeed:4000

    })
})

const filterBox=document.querySelectorAll('.box')

document.querySelector('ul').addEventListener('click',event=>{
    if (event.target.tagName!=='LI') return false;

    document.querySelectorAll('li').forEach(elem=>elem.classList.remove('cur-item'))

    let filterClass=event.target.dataset['f'];
    
    filterBox.forEach(elem=>{
        elem.classList.remove('hide'); 
        console.log(elem);
        event.target.classList.add('cur-item')
        
        if (!elem.classList.contains(filterClass) && filterClass!=='all'){
            elem.classList.add('hide');
            console.log(elem)

        }

    });

})

// const openPopUp=document.getElementById('open_pop_up');
// const closePopUp=document.getElementById('pop_up_close');
// const popUp=document.getElementById('pop_up');

// openPopUp.addEventListener('click',function(e){
//     console.log('1')
//     e.preventDefault();
//     popUp.class.add('active');

// })
// closePopUp.addEventListener('click',()=>{
//     popUp.classList.remove('active')
// })