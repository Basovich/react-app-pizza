import React from 'react';
import PropTypes from 'prop-types'
import {useLocation, Link} from "react-router-dom";

import {page} from "../../router";

import Button from "../Button";

const PizzaCard = ({imageUrl, name, price, about, id}) => {
    let location = useLocation();

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
                <Link
                    to={{
                        pathname: `${page.pizza}${id}`,
                        state: { background: location }
                    }}
                >
                    <Button outline add>
                        <span>Выбрать</span>
                    </Button>
                </Link>
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
