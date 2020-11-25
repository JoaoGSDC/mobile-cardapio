import styled from 'styled-components';

export const MenuContainer = styled.div`
    height: 100%;
    padding: 20px;
    margin-top: 150px;
    margin-bottom: 95px;
    background-color: #f5f5f5;
    border-radius: 50px 50px 0px 0px;
    box-shadow: 0px -15px 50px rgb(0, 0, 0, 0.2);

    a {
        position: fixed;
        width: 100%;
        margin-left: -20px;
        bottom: 0;

        button {
            height: 60px;
            border: none;
            background: #0e0e0e;
            color: #ffa500;
            font-size: 22px;
            border-radius: 45px 45px 0px 0px;

            svg {
                margin-right: 15px;
            }
        }
    }
`

export const BackgroundImg = styled.div`
    svg {
        font-size: 250px;
        color: #000000;
        position: absolute;
        top: 15px;
        left: 15%;
        z-index: -1;
        filter: opacity(0.75);
    }
`

export const GroupContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.div`
    border-bottom: 1px solid #181818;
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-size: 20px;
    margin-top: 50px;
    font-weight: bold;
`

export const OptionItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
    border-bottom: 1px solid #a7a7a7;
    margin-bottom: 20px;

    div {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        margin-right: 20px;
    }

    button {
        width: 90px;
        background: #181818;
        color: #ffffff;
    }
`

