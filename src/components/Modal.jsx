import React from 'react';
import ClassNames from "classnames";
import {enableScroll} from "../js/scroll-locker";
import {useDispatch} from "react-redux";

const Modal = ({actionHide, fade, children}) => {
    const dispatch = useDispatch();
    const refModal = React.useRef();

    // Close Modal function
    const closeModal = React.useCallback( () => {
        dispatch(actionHide());
        // enable after fade animation
        setTimeout(() => {
            enableScroll();
        }, 400)
    }, [dispatch, actionHide]);

    const closeOnClick = React.useCallback( e => {
        // e.path none in Safari/Firefox
        let path = e.path || (e.composedPath && e.composedPath());

        if (!path.includes(refModal.current)) {
            closeModal();
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
            closeModal();
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
            {'fade': fade})}>
            <div ref={refModal} className="modal__container">
                <button className="modal__close" aria-label="Close" onClick={closeModal}></button>
                {children}
            </div>
        </section>
    );
};

export default Modal;
