// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { createPortal } from "react-dom";
// import { ProfileWithLog } from "./Profile/Profile";
// import style from "./Profile/style.module.css";
// export class ModalPortal extends Component {
//     state = {
//         isShowModal: false,
//     };

//     toggleModal = () => {
//         this.setState(state => ({
//             isShowModal: !state.isShowModal,
//         }));
//     };

//     render(){
//         const {isShowModal} = this.state;
//         return (
//             <div>
//                 {isShowModal &&(
//                     <Modal show={isShowModal}>
//                         <p>
//                             MODAL
//                         </p>
//                     </Modal>
//                 )}
//             </div>
//         );
//     }
// }

// class Modal extends Component {
//     constructor(props){
//         super(props);
//         this.id = 'modalPortal';
//         this.div = document.createElement("div");
//         this.div.id = this.id;

//         document.body.insertAdjacentElement(
//             'beforeend',
//             this.div,
//         );
//     }
//     componentWillUnmount(){
//         this.div.parentNode.removeChild(this.div);
//     }


//     render(){
//         const {show, children} = this.props;

//         return show
//             ? ReactDOM.createPortal(
//                 children,
//                 document.getElementById(this.id)
//             )
//             : null;
//     }
// }
// export default ModalPortal;


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