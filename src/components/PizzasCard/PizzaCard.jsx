import React from 'react';
import PropTypes from 'prop-types'
import Button from "../Button";
import {useDispatch} from "react-redux";
import {fetchAllPizzas} from "../../redux/actions/selectPizzaModal";

const PizzaCard = ({imageUrl, name, price, about, id}) => {
    const dispatch = useDispatch();

    function onClickHandler(id) {
        dispatch(fetchAllPizzas(id));
    }

    return (
        <div className="pizza-block">
            <div className="pizza-block__content">
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
                <h4 className="pizza-block__title">{name}</h4>
                <p className="pizza-block__about">{about}</p>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₴</div>
                <Button outline add onClickHandler={onClickHandler.bind(null, id)}>
                    <span>Выбрать</span>
                </Button>
            </div>
        </div>
    );
};

PizzaCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    about: PropTypes.string.isRequired,
}

export default PizzaCard;
