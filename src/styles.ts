import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-color: #ffa500;
  }
  body {
    font-family: 'Roboto', sans-serif;

    div#root {
      height: 100%;

      .App {
        height: 100%;
      }
    }

    a {
      color: #ffffff;
      text-decoration: none;
      cursor: pointer;
    }

    .MuiFormLabel-root.Mui-focused {
      color: #ffa500;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: #ffa500;
    }
  }

  button {
    height: 45px;
    width: 100%;
    border: 1px solid #121212;
    background-color: #181818;
    color: #ffffff;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      background-color: #272727;
    }
  }

`

export const Card = styled.div`
  display: flex;
  background: #202020;
  height: calc(100% - 210px);
  width: calc(100% - 170px);
  margin: 15px 0 0 0;
  margin-left: 115px;
  border-radius: 3px;
  padding: 100px 20px 20px 20px;
  position: relative;

  .makeStyles-paper-2 {
    color: #ffffff;
    background-color: transparent;
  }

  .MuiTableCell-head {
    color: #ffffff;
  }

  .MuiTableCell-body {
    color: #ffffff;
  }

  .MuiTableSortLabel-root.MuiTableSortLabel-active {
    color: #ffffff;
  }

  .MuiTableRow-root.Mui-selected, .MuiTableRow-root.Mui-selected:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .makeStyles-highlight-6 {
    color: #ffffff;
    background-color: rgb(255, 255, 255, 0.1);
  }

  .MuiCheckbox-root {
    color: rgba(0, 0, 0, 0.54);
  }

  .MuiCheckbox-colorSecondary.Mui-checked {
    color: rgba(0, 0, 0, 0.54);
  }

  .MuiTablePagination-root {
    color: #ffffff;
  }

  .MuiTableCell-root {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  //input
  .MuiFormLabel-root {
    color: #ffffff;
  }

  .MuiInputBase-input {
    color: #ffffff;
  }

  .MuiFormControl-root {
    margin: 5px;
    background: #121212;
  }

  .MuiFormLabel-root.Mui-focused {
    color: #ffffff;
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ffffff;
  }
`

export const CardHeader = styled.div`
  display: flex;
  height: 40px;
  background-color: #121212;
  width: calc(100% - 40px);
  padding: 20px;
  margin-top: -100px;
  margin-left: -20px;
  position: absolute;
  border-radius: 3px;
  align-items: center;
  font-size: 20px;
`