import styled from 'styled-components'

export const AdminContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    margin: 0 auto;
  }

  .login-form {
    margin: auto;
    text-align: center;
    width: 350px;

    .form-field {
      margin-top: 20px;
      width: width: 100%;
      text-align: left;

      label {
        margin-right: 15px;
      }

      input {
        height: 40px;
        width: 100%;
        border: none;
        margin-top: 10px;
      }

      button {
        width: 100%;
        height: 40px;
      }
    }
  }
`
