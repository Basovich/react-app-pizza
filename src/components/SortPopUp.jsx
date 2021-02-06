import React from 'react';
import ClassNames from 'classnames';


const SortPopUp = React.memo(({items}) => {
    const [visiblePopUp, setVisiblePopUp] = React.useState(false);
    const [activeSort, setActiveSort] = React.useState(0);
    const refSort= React.useRef();
    const activeSortLabel = items[activeSort].name;

    React.useEffect(() => {
        document.body.addEventListener('click', handlerOutsideClick);

        return () => {
            document.body.removeEventListener('click', handlerOutsideClick);
        };
    }, []);

    function togglePopUp() {
        setVisiblePopUp(!visiblePopUp)
    }

    function handlerOutsideClick(e) {
        // e.path none in Safari
        let path = e.path || (e.composedPath && e.composedPath());

        if (!path.includes(refSort.current)) {
            setVisiblePopUp(false)
        }
    }

    function setActiveIndex(index) {
        setActiveSort(index);
        setVisiblePopUp(false);
    }

    return (
        <div ref={refSort} className="sort">
            <div className="sort__label" >
                <svg className={ClassNames('',
                    {'is-open': visiblePopUp})}
                     width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/></svg>
                <b>Сортировка по:</b>
                <span className="sort__toggle" onClick={togglePopUp}>{activeSortLabel}</span>
            </div>
            {visiblePopUp &&
            <div className="sort__popup">
                <ul>
                    {items.map( (item, index) => (
                        <li key={item.type}
                            onClick={() => {
                                setActiveIndex(index)
                            }}
                            className={ClassNames('',
                                {'active': index === activeSort})}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            }
        </div>
    );
});

export default SortPopUp;