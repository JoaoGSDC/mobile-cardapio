import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContainer, Title, OptionItemContainer, BackgroundImg } from './styles';

function Cart() {
    return (
        <> 
            <BackgroundImg><FiShoppingCart /></BackgroundImg>
            <CartContainer>
                <Title>Pedido</Title>
                <ul>
                    <OptionItemContainer><label>X-Tudo</label><label>R$ 26,00</label></OptionItemContainer>
                    <OptionItemContainer><label>Coca-cola lata</label><label>R$ 5,00</label></OptionItemContainer>
                </ul>
                <Link to="/"><button>Fazer pedido</button></Link>
            </CartContainer>
        </>
    )
}

export default Cart;