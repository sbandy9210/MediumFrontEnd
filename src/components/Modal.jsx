import React from 'react';

function Modal(props) {

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modal-content'onClick={event => event.stopPropagation()}>
                <div className='modal-header'>
                    <h2 className='modal-title'>{props.title}</h2>
                </div>
                <div className='modal-body'>
                    {props.children}
                </div>
                <div className='modal-footer'>
                    {/* <button className='button' onClick={props.onClose}>Close</button> */}
                </div>
            </div>
        </div>

    );
}

export default Modal;