const Order = React.memo(props => {
    const { orderIsAccepted , resetRoute} = props;
    const classes = useStyles();


    useEffect(() => {
        if (!cardAdded) {
            fetchCardRequest();
        }
    }, []);

    const onNewOrder = () =>{
        resetRoute();
    }

    function Content() {
        if(!cardAdded) {
            return (
                <div className="order__unavailable">
                    <h1 className="order__card">Пожалуйста заполните данные банковской карты</h1>
                    <button type="submit" className="button__unavailable" to="/profile">Перейти в профиль</button>
                </div>
            )
        } else if(orderIsAccepted) {
            return (
                <div className="order__available">
                    <h1 className="order__success">Ваш заказ принял , ожидайте</h1>
                    <button className={classes.button} onClick={onNewOrder}>Сделать новый заказ</button>
                </div>
            )
        }
    }
}) 