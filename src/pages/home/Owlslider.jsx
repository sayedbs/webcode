import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import owlImg1 from '/images/members/person1.png'
import owlImg2 from '/images/members/person2.png'
import owlImg3 from '/images/members/person3.png'
import owlImg4 from '/images/members/person4.png'
// import owlImg1 from '../../assets/banner.png'

const Owlslider = () => {

    // const options = {
    //     items: 5,
    //     margin: 60,
    //     loop: true,
    //     autoplay: true,
    //     mouseDrag: true,
    //     touchDrag: true,
    //     navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'], // HTML allowed.
    //     nav: false,
    //     dotsEach: false,
    //     smartSpeed: 750,
    //     dots: false,
    //     lazyLoad:true,
    //     responsive: {
    //         0:{
    //             items: 2,
    //             margin: 20
    //         },480:{
    //             items: 3,
    //             margin: 30
    //         },767:{
    //             items: 4,
    //             margin: 40
    //         },991:{
    //             items: 5,
    //             margin: 50
    //         }
    //     }

    // }

  return (
    <div className='section-container bg-colorBg'>
        {/* Owlslider */}
        <OwlCarousel className='owl-theme' loop margin={25} nav>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg1} alt='' />
                </div>
            </div>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg2} alt='' />
                </div>
            </div>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg3} alt='' />
                </div>
            </div>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg4} alt='' />
                </div>
            </div>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg1} alt='' />
                </div>
            </div>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg2} alt='' />
                </div>
            </div>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg3} alt='' />
                </div>
            </div>
            <div class='item'>
                <h4 className='text-3xl font-bold text-center text-black pb-5'>Owl Carusel Item</h4>
                <div>
                    <img src={owlImg4} alt='' />
                </div>
            </div>
        </OwlCarousel>
    </div>
  )
}

export default Owlslider