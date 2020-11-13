import React, {Component} from "react";
import "./MainSlide.css"
import Slide_list from "./Slidelist";

const slideImages = [
    {
        id: 1,
        content: 'https://ifh.cc/g/0d2g0L.jpg'
    },
    {
        id: 2,
        content: 'https://ifh.cc/g/rbnP1m.jpg'
    },
    {
        id: 3,
        content: 'https://ifh.cc/g/XmPku4.jpg'
    },
    {
        id: 4,
        content: 'https://ifh.cc/g/oPAmWp.jpg'
    },
    {
        id: 5,
        content: 'https://ifh.cc/g/QK7Yts.jpg'
    }
]

class MainSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            slides: []
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }

    stateRefresh() {
        this.state = {
            loading: false,
            slides: []
        }
    }

    render() {
        const {slideImage} = this.state;
        window.onload = function () {
            let slideWrapper = document.getElementById('slider-wrap');
            let slideIndex = 0;
            let slides = document.querySelectorAll('#slider-wrap ul li');
            let totalSlides = slides.length;
            let sliderWidth = slideWrapper.clientWidth;
            slides.forEach(function (element) {
                element.style.width = sliderWidth + 'px';
            })
            let slider = document.querySelector('#slider-wrap ul#slider');
            slider.style.width = sliderWidth * totalSlides + 'px';

// 다음, 이전
            let nextBtn = document.getElementById('next');
            let prevBtn = document.getElementById('previous');
            nextBtn.addEventListener('click', function () {
                plusSlides(1);
            });
            prevBtn.addEventListener('click', function () {
                plusSlides(-1);
            });

// hover
            slideWrapper.addEventListener('mouseover', function () {
                this.classList.add('active');
                clearInterval(autoSlider);
            });
            slideWrapper.addEventListener('mouseleave', function () {
                this.classList.remove('active');
                autoSlider = setInterval(function () {
                    plusSlides(1);
                }, 3000);
            });

            function plusSlides(n) {
                showSlides(slideIndex += n);
            }

            function showSlides(n) {
                slideIndex = n;
                if (slideIndex == -1) {
                    slideIndex = totalSlides - 1;
                } else if (slideIndex === totalSlides) {
                    slideIndex = 0;
                }

                slider.style.left = -(sliderWidth * slideIndex) + 'px';
            }

            slides.forEach(function () {
                let li = document.createElement('li');
                document.querySelector('#slider-pagination-wrap ul').appendChild(li);
            })


            let autoSlider = setInterval(function () {
                plusSlides(1);
            }, 3000);
        }
        return (
            <>
                <div id="main-wrap">
                    <div id="slider-wrap">
                        <ul id="slider">
                            {slideImages.map((s, index) => {
                                return (
                                    <Slide_list img={s.content} key={index}/>
                                );
                            })}
                        </ul>
                        <div className="slider-btns" id="next"><span>▶</span></div>
                        <div className="slider-btns" id="previous"><span>◀</span></div>
                        <div id="slider-pagination-wrap">
                            <ul>
                            </ul>
                        </div>
                    </div>
                </div>


                <br/>
                <p id="main-text"><b>당신만의 큐레이팅 PT 웹사이트, 큐피트!</b><br/><br/>
                매일 달라지는 <b>추천 운동</b>과 <b>자세교정 서비스</b>를 경험해보세요.<br/>
                운동할 때 고민했던 식단&옷까지 큐피트가 한 번에 추천할게요.<br/><br/>
                <b>이제 <a href="/login">시작</a> 해볼까요?</b><br/></p>

                </>
                );
                }
                }
                export default (MainSlide);