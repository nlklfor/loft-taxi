import React, { useState } from "react";
import { Button, Paper, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useEffect } from "react";
import { fetchAddressRequest, fetchRoute } from "../actions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getAddressList } from "../address/selectors";
import { useSelector } from "react-redux";
import "./OrderForm.css";



const OrderForm = React.memo(props => {
  const { fetchAddressRequest, fetchRoute } = props;
  const addressList = useSelector(getAddressList)
  const [route, setRoute] = useState({ from: '', to: '' })
  const [showOrderForm, setShowOrderForm] = useState(true);



  useEffect(() => {
    fetchAddressRequest();
  }, [])

  const { from, to } = props;

  const handleChange = event => {
    const input = event.target

    setRoute({ ...route, [input.name]: input.value });
  }



  const drawRoute = event => {
    event.preventDefault();

    fetchRoute(route.from, route.to);
    setShowOrderForm(false);
  };



  return (
    <>
      {showOrderForm ? (
        <Paper className="order">
          <form onSubmit={drawRoute}>
            <div className="order__top">
              <div className="order__wrapper">
                <FormControl className='formControl'>
                  <InputLabel id="from" htmlFor="from">Откуда</InputLabel>
                  <Select className="order__input" id="address1" placeholder="Откуда"
                    value={route.from || ""}
                    name={from}
                    inputProps={{ name: 'from', id: 'from' }}
                    onChange={handleChange}
                  >{
                      addressList && addressList.filter(item => item !== route.to).map(item => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))
                    }</Select>
                </FormControl>
              </div>
              <div className="order__wrapper">
                <FormControl className='formControl'>
                  <InputLabel id="to" htmlFor="to">Куда</InputLabel>
                  <Select className="order__input" id="address2" placeholder="Куда"
                    value={route.to || ""}
                    name={to}
                    inputProps={{ name: 'to', id: 'to' }}
                    onChange={handleChange}
                  >{
                      addressList && addressList.filter(item => item !== route.from).map(item => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))
                    }</Select>
                </FormControl>
              </div>

            </div>
            <Paper className="order__bottom">
              <div className="order__choice">
                <button className="button__choice" disabled="disabled">
                    <div className="order__name">Стандарт</div>
                    <p className="order__cost">Стоимость</p>
                    <div className="order__price">150 ₽</div>
                    <div id="car_1" className="order__car"><img src="https://www.seekpng.com/png/detail/355-3556484_bmw-2-series-front-view-png-clipart-download.png" alt="" /></div>
                </button>
                <button className="button__choice" disabled="disabled">
                    <div className="order__name">Премиум</div>
                    <p className="order__cost">Стоимость</p>
                    <div className="order__price">250 ₽</div>
                    <div id="car_2" className="order__car"><img src="https://png.pngitem.com/pimgs/s/525-5257950_tesla-model-x-white-back-hd-png-download.png" alt="" /></div>
                </button>
                <button className="button__choice" disabled="disabled">
                    <div className="order__name">Бизнес</div>
                    <p className="order__cost">Стоимость</p>
                    <div className="order__price">300 ₽</div>
                    <div id="car_3" className="order__car"><img src="https://www.pngitem.com/pimgs/m/126-1268281_mercedes-car-png-fromt-view-of-mercedes-car.png" alt="" /></div>
                </button>
              </div>
              <button variant="contained" color="primary" type="submit" className="make__order">Заказать</button>
            </Paper>
            
          </form>
        </Paper>
      ) : (
        <Paper className="order__success">
          <h1 className="order__info-success">Заказ размещен</h1>
            <p className="order__desc-success">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
          <button variant="contained" color="primary" type="submit" className="finish__order">Сделать новый заказ</button>
        </Paper>
      )}
    </>
        
  );

}
)

OrderForm.propTypes = {
  cardAdded: PropTypes.bool,
  addressList: PropTypes.array,
  fetchAddressRequest: PropTypes.func,
  fetchRoute: PropTypes.func,
}

const mapStateToProps = state => ({
  addressList: getAddressList(state),
  route: state.route,
});

const mapDispatchToProps = {
    fetchAddressRequest, fetchRoute
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)