import './Header.css';
import React from "react";




class Header extends React.Component{

    render() {

        return(
            <header className="section-header">
                <nav className="header__nav">
                    <svg width="272" height="61" viewBox="0 0 272 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M92.6458 18.16L90.8458 24.172H82.1338L83.7898 18.232L92.6458 18.16ZM99.4138 36.844L94.3738 42.964H76.8777L81.5218 26.548H90.2698L87.3898 36.808L99.4138 36.844ZM127.083 24.208H103.359C103.839 22.576 104.655 21.196 105.807 20.068C107.223 18.7 108.687 18.016 110.199 18.016H122.439C125.535 18.016 127.083 19.66 127.083 22.948C127.083 23.764 127.083 24.184 127.083 24.208ZM126.579 26.512L126.435 27.088C126.051 28.336 125.391 30.616 124.455 33.928C123.855 36.016 122.931 37.768 121.683 39.184C119.427 41.728 116.403 43 112.611 43H108.327C106.023 43 104.199 42.568 102.855 41.704C101.199 40.672 100.371 39.076 100.371 36.916C100.371 35.764 100.551 34.54 100.911 33.244L102.711 26.584H111.099L108.615 35.332C108.519 35.74 108.471 36.052 108.471 36.268C108.471 36.748 108.687 37.048 109.119 37.168H114.339C114.987 37 115.467 36.388 115.779 35.332L118.371 26.548L126.579 26.512ZM152.515 18.16L150.787 24.208H127.423L131.275 18.16H152.515ZM150.283 26.548L148.303 33.136H136.747L134.047 42.964H124.579L129.151 26.548H150.283ZM178.46 18.16L176.804 24.136H152.828L156.644 18.16H178.46ZM169.136 26.548L164.78 42.964H156.536L161 26.548H169.136Z" fill="white"/>
                        <path d="M204.792 18.16L203.136 24.136H179.16L182.976 18.16H204.792ZM195.468 26.548L191.112 42.964H182.868L187.332 26.548H195.468ZM226.984 24.208H211.432L216.616 18.16H225.688L226.984 24.208ZM231.016 42.964H221.98L219.532 33.172H214.42L207.184 42.964H196.636L209.524 26.512H227.488L231.016 42.964ZM261.421 18.196L255.625 24.172L238.201 24.136L236.761 18.268H245.797L246.481 21.076L249.145 18.232L261.421 18.196ZM253.393 26.548L249.037 31.336L251.485 43L242.125 42.964L241.441 39.94L238.741 43H226.536L239.173 29.032L238.669 26.62L253.393 26.548ZM271.114 18.16L269.458 24.208H260.782L262.51 18.16H271.114ZM268.918 26.548L264.418 42.964H255.67L260.242 26.548H268.918Z" fill="#FDBF5A"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 61C47.3447 61 61 47.3447 61 30.5C61 26.9626 60.3978 23.5658 59.2903 20.4066L20.4066 59.2903C23.5658 60.3978 26.9626 61 30.5 61ZM5.8537 48.4705L20.8189 33.5053L3.53949 16.2258C1.27994 20.4847 0 25.3429 0 30.5C0 37.219 2.17264 43.4306 5.8537 48.4705ZM16.2258 3.53949L33.5053 20.8189L48.4705 5.85371C43.4306 2.17264 37.219 0 30.5 0C25.3429 0 20.4847 1.27994 16.2258 3.53949Z" fill="#FDBF5A"/>
                        <path d="M10.0534 10.1304L13.8274 13.9044" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M18.127 48.8897L14.3529 52.6637" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M24.8549 41.7133L21.0809 45.4873" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M31.5828 34.5367L27.8088 38.3108" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M45.0387 20.1838L41.2647 23.9579" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M51.7667 13.0073L47.9926 16.7813" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M17.0441 17.0441L20.8181 20.8181" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M24.6691 24.6691L28.4431 28.4431" stroke="#FDBF5A" stroke-width="4"/>
                        <path d="M38.3108 27.3604L34.5368 31.1344" stroke="#FDBF5A" stroke-width="4"/>
                    </svg>
                    <div className="header__list">
                        <ul className = "header__nav-list">
                            <li className = 'nav__list-item' onClick = {() =>{ this.props.generatePage("map")} }>
                                Карта
                            </li>
                            <li className = 'nav__list-item' onClick = {() =>{ this.props.generatePage("profile")} }>
                                Профиль
                            </li>
                            <li className = 'nav__list-item' onClick = {() =>{ this.props.generatePage("logform")} }>
                                Войти
                            </li>
                            <li className = 'nav__list-item' onClick = {() =>{ this.props.generatePage("regform")} }>
                                Зарегестрироваться
                            </li>
                        </ul>
                    </div>
                    
                </nav>
            </header>
        )

    }

}

// class PropTypeHeader extends React.Component{
//     render(){
//         return <Header />;
//     }
// }

export default Header;