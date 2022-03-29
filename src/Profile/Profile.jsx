import React from "react";
import Header from "../Header/Header";
import {connect} from 'react-redux';
import {logOut} from '../actions';
import './Profile.css'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { addCard } from "../actions";







export class Profile extends React.Component{
    addCard = (event) => {
        event.preventDefault()
        const {cardName, cardNumber, expiryDate, cvc} = event.target;
        this.props.addCard(cardName.value, cardNumber.value, expiryDate.value , cvc.value)
    }
        
    render(){
        console.log(this.props.card)
        return(
            
            <>
            <Header />
            {!this.props.cardAdded ? (
                <section className="profile">
                
                    <div className="card__profile">
                        <div className="card__header">
                            <h1 className="card__title">
                                Профиль
                            </h1>
                            <p className="card__subtitle">Введите платежные данные</p>
                        </div>
                        <form onSubmit={this.addCard}>
                            <div className="card__info">
                                <div className="card__data">
                                    <label className='name'>
                                            Имя владельца
                                            <input name = "cardName" type = "cardName" id = "cardName" placeholder='Имя владельца'></input>
                                    </label>
                                    <label className='card__number'> 
                                        Номер карты
                                        <input name = "cardNumber" type = "cardNumber" id = "cardNumber" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{14,23}" ></input>
                                    </label>
                                    <div className="private__data">
                                        <label className='mmyy'>
                                            MM/YY
                                            <input name = "expiryDate" type = "expiryDate" id = "expiryDate" placeholder='**/**'></input>
                                        </label>
                                        <label className='cvc'>
                                            CVC
                                            <input name = "cvc" type = "cvc" id = "cvc" placeholder='***'></input>
                                        </label>
                                    </div>
                                    
                                </div>
                                <div className="card__image">
                                    <div className="card__header-info">
                                        <svg id="loft" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 33C25.6127 33 33 25.6127 33 16.5C33 14.5863 32.6742 12.7487 32.0751 11.0396L11.0396 32.0751C12.7487 32.6742 14.5863 33 16.5 33ZM3.16676 26.2217L11.2627 18.1258L1.91481 8.7779C0.692428 11.0819 0 13.7101 0 16.5C0 20.1349 1.17536 23.4952 3.16676 26.2217ZM8.7779 1.91481L18.1258 11.2627L26.2217 3.16676C23.4952 1.17536 20.1349 0 16.5 0C13.7101 0 11.0819 0.692428 8.7779 1.91481Z" fill="#FDBF5A"/>
                                            <path d="M5.43872 5.48035L7.4804 7.52203" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M9.8064 26.4485L7.76471 28.4902" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M13.446 22.5662L11.4044 24.6078" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M17.0859 18.6838L15.0443 20.7255" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M24.3652 10.9191L22.3235 12.9608" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M28.0049 7.0368L25.9632 9.07849" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M9.2207 9.22058L11.2624 11.2623" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M13.3457 13.3456L15.3874 15.3873" stroke="#FDBF5A" stroke-width="2"/>
                                            <path d="M20.7256 14.8015L18.6839 16.8431" stroke="#FDBF5A" stroke-width="2"/>
                                        </svg>
                                        <label className='mmyy'>
                                            <input name = "mmyy" type = "mmyy" id = "mmyy__info" placeholder='**/**'></input>
                                        </label>
                                    </div>
                                        <label className='card__number'> 
                                            <input name = "cardnumber" type = "cardnumber" id = "cardnumber__info" placeholder="XXXX XXXX XXXX XXXX" pattern="[0-9]{14,23}" ></input>
                                        </label>
                                    <div className="card__logos">
                                        <svg id="sim" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.5 26.5H17.5V4.5H29C29.1667 3.33333 28.5 0.8 24.5 0H11.5V26.5Z" fill="#E1E1E1"/>
                                            <path d="M3 0H9V4.5H0C0 3.33333 0.6 0.8 3 0Z" fill="#E1E1E1"/>
                                            <path d="M3 26H9V21.5H0C0 22.6667 0.6 25.2 3 26Z" fill="#E1E1E1"/>
                                            <path d="M26 26H20V21.5H29C29 22.6667 28.4 25.2 26 26Z" fill="#E1E1E1"/>
                                            <path d="M0 6.5H9V11.5H0V6.5Z" fill="#E1E1E1"/>
                                            <path d="M20 6.5H29V11.5H20V6.5Z" fill="#E1E1E1"/>
                                            <path d="M0 13.5H9V18.5H0V13.5Z" fill="#E1E1E1"/>
                                            <path d="M20 13.5H29V18.5H20V13.5Z" fill="#E1E1E1"/>
                                        </svg>
                                    </div>
                                </div>
                                
                            </div>
                        </form>   
                         
                            <button type = "submit" className = 'btn__save'>Сохранить</button>
                    </div>
               
            </section>
            ):(
                <div>
                  <h4 className="card__success-title">Профиль</h4>
                  <p className="card__success-desc">Платежные данные обновлены. Теперь вы можете сделать заказ</p> 
                  <Link to="/map"><button>Перейти на карту</button></Link> 
                </div>
            )}
            </>
           
        ); 
    }
}
Profile.propTypes = {
    addCard: PropTypes.func,
    cardAdded: PropTypes.bool,
};

export const ProfileWithLog = connect(
    state => ({card: state.card, cardAdded:state.card.cardAdded}),
    { addCard }
)(Profile);