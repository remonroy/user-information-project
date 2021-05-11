// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// // import { useForm } from "react-hook-form";
// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)',
//     text:'center'
//   }
// };
// Modal.setAppElement('#root')
// const ModalOpen = ({modalIsOpen,closeModal,inf}) => {
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const onSubmit = data => {
//         console.log(data)
//     };
    
//     return (
//         <div className="styling text-center">
        
//         <Modal
//           isOpen={modalIsOpen}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >

//           <div>Edit information</div>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <input className="form-control" defaultValue={inf.firstName} {...register("firstName")} />
//             <input className="form-control" defaultValue={inf.lastName} {...register("lastName")} />
//             <input className="form-control" defaultValue={inf.email} {...register("email")} />
//             <input type="submit" value="save" />
//             </form>
//         </Modal>
//       </div>
//     );
// };

// export default ModalOpen;