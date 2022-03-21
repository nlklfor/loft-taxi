// import React, { useEffect, useMemo, useState } from "react";
// import { createPortal } from "react-dom";
// import { ProfileWithLog } from "./Profile/Profile";
// import style from "./Profile/style.module.css";



// const modalElement = document.querySelector('#modal');

// export const ProfileModal = (props) => {
//     const {marker,open,setOpen} = props;
//     // const [open, setOpen] = useState(false);
    

//     const element = useMemo(() => {
//     const element = document.createElement("div")
//     element.dataset.marker = marker
//     return element;
//     }, [marker]);
    

//     useEffect(() => {
//         modalElement.appendChild(element);

//         return() => {
//             modalElement.removeChild(element);
//         }
//     });

//     if (open) {
//         return createPortal(
//             <div className={style.modal__background}>
//                 <div className={style.modal__card}><ProfileWithLog /></div>
//             </div>,
//              element
//         );
//     }
// };