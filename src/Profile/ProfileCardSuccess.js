// import React from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import Profile from './Profile';
// import { addCardAction } from "../actions";



// const ProfileCardSuccess = (props) => {
//     const handleSubmit = (number, name ,date, cvc) => {
//         props.addCard({
//             number,
//             name,
//             date,
//             cvc,
//         });
//     };

//     return (
//         <div className="card__success">
//             <h3 className="card__success-title">Профиль</h3>
//             <h4 className="card__success-payment">Способ оплаты</h4>
//                 {props.cardIsExist ? (
//                     <>
//                     <p>Платежные данные обновлены. Теперь вы можете сделать заказ!</p>
//                     <button>
//                         Перейти на карту
//                     </button>
//                     </>
//                 ) : (
//                     <Profile handleSubmit={handleSubmit} />
//                 )}
//         </div>
//     );
// };
// ProfileCardSuccess.propTypes = {
//     addCard: PropTypes.func,
//     cardIsExist: PropsTypes.bool,
// };

// Profile.defaultProps = {
//     addCard: () => {},
//     cardIsExist: false,
// }

// const mapStateProps = (state) => ({
//     cardIsExist: state.card.cardIsExist,
// });
// const mapDispatchToProps = (dispatch) => ({
//     addCard: (card) => dispatch(addCardAction(card)),
// });

// export const ProfileWithLog = connect(mapStateProps, mapDispatchToProps)(ProfileCardSuccess);


