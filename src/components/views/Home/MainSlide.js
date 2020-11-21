import React, {Component} from "react";
import "./MainSlide.css"
import Slide_list from "./Slidelist";

const slideImages = [
    {
        id: 1,
        content: 'https://ifh.cc/g/gqCtlV.png'
    },
    {
        id: 2,
        content: 'https://ifh.cc/g/zZulnP.png'
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


                <p id="main-text"><b>ABOUT</b><br/></p>

                <div id="introduction">
                    환영합니다!<br/><br/>
                    큐피트는 운동할 때 신경써야 하는 모든 것들에 대한 고민을 줄이고자 만들었습니다.<br/>
                    매일 달라지는 추천 운동과 자세교정 서비스를 경험해보세요.<br/><br/>
                    이런 운동엔 어떤 옷을 입어야 하지? 어떻게 먹어야 효과적이지?<br/>
                    운동을 시작할 때 운동만 고민되는게 아니죠. 큐피트가 모두 추천해 드릴게요. <br/><br/>
                    마음만 가지고 오세요! 큐피트가 당신의 시작을 응원합니다. <br/>
                        ·<br/>  ·<br/>
                    이제 <a href="/login">시작</a> 해볼까요?<br/>
                </div>

                </>
                );
                }


                }



                export default (MainSlide);