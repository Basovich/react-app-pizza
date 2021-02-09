import React from 'react';
import {useSelector} from "react-redux";
import ClassNames from "classnames";
import {hideSelectedPizza} from "../../redux/actions/selectPizzaModal";

import Button from "../Button";
import Modal from "../Modal";

const SelectPizza = () => {
    const {imageUrl, name, about, types, sizes, prices} = useSelector(({selectPizzaModal}) => {
        return {
            imageUrl: selectPizzaModal.pizza.imageUrl,
            name: selectPizzaModal.pizza.name,
            about: selectPizzaModal.pizza.about,
            types: selectPizzaModal.pizza.types,
            sizes: selectPizzaModal.pizza.sizes,
            prices: selectPizzaModal.pizza.prices,
        }
    });
    const [activeType, setActiveType] = React.useState(types.active);
    const [activeSize, setActiveSize] = React.useState(sizes.active);
    const [price, setPrice] = React.useState(0);

    // Change type & size pizza
    function toggleActiveTypes(index) {
        setActiveType(index);
    }

    function toggleActiveSize(index) {
        setActiveSize(index);
    }

    // Change price
    const getPrice = React.useCallback( (typeIndex, sizeIndex) => {
        return prices[typeIndex][sizeIndex];
    }, [prices])

    React.useEffect(() => {
        setPrice( getPrice(activeType, activeSize));
    }, [activeType, activeSize, getPrice]);

    return (
        <Modal actionHide={hideSelectedPizza} fade>
            <div className="pizza-block__modal">
                <div className="pizza-block__modal-img">
                    <img src={imageUrl} alt={`${name}`}/>
                </div>
                <div className="pizza-block__modal-content">
                    <div className="pizza-block__modal-info">
                        <h3 className="pizza-block__modal-title">{name}</h3>
                        <p className="pizza-block__modal-about">{about}</p>
                        <div className="pizza-block__selector">
                            <ul>
                                {types.names.map((name, index) => {
                                    return <li key={index}
                                               onClick={toggleActiveTypes.bind(null, index)}
                                               className={ClassNames('',
                                                   {'active': index === activeType},
                                                   {'disabled': index === types.disabled})}>
                                        {name}
                                    </li>
                                })}
                            </ul>
                            <ul>
                                {sizes.names.map((size, index) => {
                                    return <li key={index}
                                               onClick={toggleActiveSize.bind(null, index)}
                                               className={ClassNames('',
                                                   {'active': index === activeSize},
                                                   {'disabled':  sizes.disabled.includes(index) })}>
                                        {size}
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <Button cart>
                        <span>Добавить в корзину за {price} ₴</span>
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default SelectPizza;
