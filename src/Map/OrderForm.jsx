import React, { useState } from "react";
import { Button, Paper, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { useEffect } from "react";
import { fetchAddressRequest, fetchRoute } from "../address/actions";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getAddressList } from "../address/selectors";
import { useSelector } from "react-redux";



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
                  <InputLabel htmlFor="from">Откуда</InputLabel>
                  <Select className="order__input" id="address1" placeholder="Откуда"
                    value={route.from || ""}
                    name={from}
                    inputProps={{ name: 'from', id: 'from' }}
                    autoWidth
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
                  <InputLabel htmlFor="to">Куда</InputLabel>
                  <Select className="order__input" id="address2" placeholder="Куда"
                    value={route.to || ""}
                    name={to}
                    inputProps={{ name: 'to', id: 'to' }}
                    autoWidth
                    onChange={handleChange}
                  >{
                      addressList && addressList.filter(item => item !== route.from).map(item => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                      ))
                    }</Select>
                </FormControl>
              </div>

            </div>
            <Paper elevation={4} className="order__bottom">
              <Button variant="contained" color="primary" type="submit" className="f24">Заказать</Button>
            </Paper>
          </form>
        </Paper>
      ) : (
        <Paper elevation={4} className="order">
        <div>Ваш заказ успешно сделан. Ожидайте </div>
        <Button variant="contained" color="primary" type="submit" className="f24">Сделать новый заказ</Button>
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