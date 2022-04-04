

export const serverLogin = data => 
fetch ('https://loft-taxi.glitch.me/auth', {
    body: JSON.stringify(data),
    headers: {
        'Content-Type' : 'application/json'
    },
    method: 'POST'
}).then(res => res.json());

export const addCard = data => 
fetch ('https://loft-taxi.glitch.me/card', {
    body : JSON.stringify(data),
    headers : {
        'Content-Type' : 'application/json'
    },
    method: 'POST'
}).then(res => res.json());

export const getAddressRequest = () =>
  fetch("https://loft-taxi.glitch.me/addressList").then(res =>
    res.json()
  );

export const getRoute = (payload) => 
 fetch(
    `https://loft-taxi.glitch.me/route?address_1=${payload.address_1}&address_2=${payload.address_2}`
  ).then(res => res.json());