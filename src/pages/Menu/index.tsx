import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiCoffee } from 'react-icons/fi';
import { MenuContainer, GroupContainer, Title, OptionItemContainer, BackgroundImg } from './styles';

function Menu() {
    return (
        <>
            <BackgroundImg><FiCoffee /></BackgroundImg>
            <MenuContainer>
                <div>
                    <GroupContainer>
                        <Title>Lanche</Title>
                        <OptionItemContainer>
                            <div>
                                <label>X-Tudo</label>
                                <label>R$ 26,00</label>
                            </div>
                            <button>Adicionar</button>
                        </OptionItemContainer>
                        <OptionItemContainer>
                            <div>
                                <label>X-Frango</label>
                                <label>R$ 24,00</label>
                            </div>
                            <button>Adicionar</button>
                        </OptionItemContainer>
                    </GroupContainer>

                    <GroupContainer>
                        <Title>Bebidas</Title>
                        <OptionItemContainer>
                            <div>
                                <label>Coca-cola Lata</label>
                                <label>R$ 5,00</label>
                            </div>
                            <button>Adicionar</button>
                        </OptionItemContainer>
                        <OptionItemContainer>
                            <div>
                                <label>Pepsi 2L</label>
                                <label>R$ 10,00</label>
                            </div>
                            <button>Adicionar</button>
                        </OptionItemContainer>
                    </GroupContainer>
                </div>
                <Link to="/cart"><button><FiShoppingCart />Carrinho</button></Link>
            </MenuContainer>
        </>
    )
}

export default Menu;