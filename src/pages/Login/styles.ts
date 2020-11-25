import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .MuiFormControl-root {
        width: 100%;
        margin: 40px 0px 20px 0px;
    }
`

export const TitleContainer = styled.div`
    font-size: 24px;
    font-weight: bold;
`

export const FieldContainer = styled.div`
    background: #f7f7f7;
    padding: 75px 25px;
    border-radius: 10px;
    border: 1px solid #c1c1c1;
    text-align: center;
    margin: 0px 15px;
    box-shadow: 0px 0px 100px rgba(0,0,0,0.4);
`