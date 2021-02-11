import React from 'react';
import './Modal.scss'
import ClassNames from "classnames";
import {enableScroll} from "../../js/scroll-locker";

const Modal = ({back, fade, children}) => {
    const refModal = React.useRef();

    // Close Modal function
    const closeModal = React.useCallback( (e) => {
        back(e);
        setTimeout(() => {
            enableScroll();
        }, 50)
    }, [back]);

    const closeOnClick = React.useCallback( e => {
        // e.path none in Safari/Firefox
        let path = e.path || (e.composedPath && e.composedPath());

        if (!path.includes(refModal.current)) {
            closeModal(e);
        }
    }, [closeModal]);

    const closeOnESC = React.useCallback( e => {
        e = e || window.e;
        let isEscape = false;

        if ("key" in e) {
            isEscape = (e.key === "Escape" || e.key === "Esc");
        } else {
            isEscape = (e.keyCode === 27);
        }

        if (isEscape) {
            closeModal(e);
        }
    }, [closeModal])

    React.useEffect(() => {
        document.body.addEventListener('click', closeOnClick);
        document.body.addEventListener('keydown', closeOnESC);

        return () => {
            document.body.removeEventListener('click', closeOnClick);
            document.body.removeEventListener('keydown', closeOnESC);
        };
    }, [closeOnClick, closeOnESC]);

    return (
        <section className={ClassNames('modal',
            {'fade-in': fade})}>
            <div ref={refModal} className="modal__container">
                <button className="modal__close" aria-label="Close" onClick={closeModal}></button>
                {children}
            </div>
        </section>
    );
};

export default Modal;
