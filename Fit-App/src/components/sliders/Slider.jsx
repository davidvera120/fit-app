import React from 'react'
import {TextIntro2, Container1, Container2, Buttonfilter, ButtonHome, ButtonLink, ButtonIntro2} from "../../styles/PagIntro"
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'


export const Slider = () => {

    function siguiente() {
        let sliderSectionLast = document.querySelectorAll(".slider__section")[0];
        const slider = document.querySelector("#slider");
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('beforeend', sliderSectionLast);
            slider.style.marginLeft = "0";
        }, 500);
    }
    
     function anterior() {
        let sliderSection = document.querySelectorAll(".slider__section");
        const slider = document.querySelector("#slider");
        let sliderSectionFirst = sliderSection[sliderSection.length - 1];
        slider.style.marginLeft = "0";
        slider.style.transition = "all 0.5s";
        setTimeout(function() {
            slider.style.transition = "none";
            slider.insertAdjacentElement('afterbegin', sliderSectionFirst);
            slider.style.marginLeft = "0";
        }, 500);
    }

  return (
   
    <div className="col-12">
<div className="container d-flex" Style="justify-content: center;align-items:center;">
<div className="slider__contenedor">
<div className="slider" id="slider" Style="background:none;">

<div className="slider__section">
<div className="row">
<div className="col-6">
<TextIntro2>
<h1>warm up</h1>
<p Style="font-size:10px;">Before Training, be sure to warm up, give it 5 - 10 minutes</p>
</TextIntro2>
</div>
<div className="col-6">
<img Style="background:none;" className="imgPortada" src={img2} alt=""/>
</div>
</div>
</div>

<div className="slider__section">
<div className="row">
<div className="col-6">
<TextIntro2>
<h1>Stretching</h1>
<p Style="font-size:10px;">Perform the stretching exercise statically, maintaining the position, without bouncing or sudden movements</p>
</TextIntro2>
</div>
<div className="col-6">
<img Style="background:none;" className="imgPortada" src={img3} alt=""/>
</div>
</div>
</div>

<div className="slider__section">
<div className="row">
<div className="col-6">
<TextIntro2>
<h1>Exercise with weights</h1>
<p Style="font-size:10px;">Never start an exercise with your maximum weight. The first series should be light and comfortable for your muscles and joints to prepare</p>
</TextIntro2>
</div>
<div className="col-6">
<img Style="background:none;" className="imgPortada" src={img4} alt=""/>
</div>
</div>
</div>

<div className="slider__section">
<div className="row">
<div className="col-6">
<TextIntro2>
<h1>ABS</h1>
<p Style="font-size:10px;">No matter what type of sit-up you perform, your back and especially your lower back must be straight. It is a very common mistake to arch the spine.</p>
</TextIntro2>
</div>
<div className="col-6">
<img Style="background:none;" className="imgPortada" src={img5} alt=""/>
</div>
</div>
</div>

<div className="slider__section">
<div className="row">
<div className="col-6">
<TextIntro2>
<h1>Functional exercises</h1>
<p Style="font-size:10px;">Functional training has the great quality that it can be adapted to anyone, and that it perfectly complements all sports and strength training</p>
</TextIntro2>
</div>
<div className="col-6">
<img Style="background:none;" className="imgPortada" src={img6} alt=""/>
</div>
</div>
</div>
<button  id="btnSiguiente" className="slider__btn slider__btn--right" onClick={()=>{siguiente()}}><i Style="background:none;" className='bx bxs-chevron-right' ></i></button>
<button id="btnAtras" className="slider__btn slider__btn--left" onClick={()=>{anterior()}}><i Style="background:none;" className='bx bxs-chevron-left'></i></button>
</div>

</div>              
</div>
</div> 
    
  )
}

export default Slider