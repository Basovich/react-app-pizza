import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import ClassNames from "classnames";

import {addCartPizza} from "../../redux/actions/cart";

import Button from "../Button";
import Modal from "../Modal";

import {disableScroll} from "../../js/scroll-locker";



const SelectPizza = () => {
    const dispatch = useDispatch();
    const [activeType, setActiveType] = React.useState('');
    const [activeSize, setActiveSize] = React.useState('');
    const [price, setPrice] = React.useState(0);
    const { id } = useParams();
    const history = useHistory();
    const pizzas = useSelector(({pizzas}) => pizzas);

    let imageUrl, name, about, types, sizes, prices;
    if (pizzas.items.length) {
        const pizza = pizzas.items.filter(pizza => pizza.id === +id);
        imageUrl = pizza[0].imageUrl;
        name = pizza[0].name;
        about = pizza[0].about;
        types = pizza[0].types;
        sizes = pizza[0].sizes;
        prices = pizza[0].prices;
    }

    React.useEffect(() => {
        if (pizzas.items.length) {
            setActiveType(types.active);
            setActiveSize(sizes.active);
        }
    }, [pizzas, types, sizes]);

    React.useEffect(() => {
        if (pizzas.items.length && activeType !== '' && activeSize !== '') {
            setPrice(prices[activeType][activeSize]);
        }
    }, [activeType, activeSize, prices, pizzas]);

    const back = e => {
        e.stopPropagation();
        history.goBack();
    };

    disableScroll();

    // Change type & size pizza
    function toggleActiveTypes(index) {
        setActiveType(index);
    }

    function toggleActiveSize(index) {
        setActiveSize(index);
    }

    function addPizzaToCart() {
        const pizza = {
            [`${id}:${activeType}:${activeSize}`]: [{
                imageUrl: imageUrl,
                name: name,
                type: types.names[activeType],
                sizes: sizes.names[activeSize],
                price: price
            }]
        }
        dispatch(addCartPizza(pizza, price, 1));
    }

    if (!pizzas.items.length) return null;

    return (
        <Modal fade back={back}>
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
                    <Button cart onClickHandler={addPizzaToCart}>
                        <span>Добавить в корзину за {price} ₴</span>
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default SelectPizza;
