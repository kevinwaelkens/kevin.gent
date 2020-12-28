import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1 0 auto;
  overflow: auto;
  justify-content: center;
`;

export const ContactContainer = styled.form`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 30px;

  flex-shrink: 0;

  input {
    min-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.82);
    border-radius: 4px;
    padding: 0 6px;
    outline-color: rgba(0, 0, 0, 0.82);
  }

  textarea {
    min-height: 120px;
    resize: none;
    border: 1px solid rgba(0, 0, 0, 0.82);
    border-radius: 4px;
    padding: 6px;
    outline-color: rgba(0, 0, 0, 0.82);
  }
`;

export const Label = styled.label`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 140px;
  height: 40px;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  display: grid;
  flex-shrink: 0;
  border-radius: 4px;
  outline-color: rgba(0, 0, 0, 0.82);
  font-size: 14px;

  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.82);
  }
`;

// export const Response = ({ children, hasPosted }) => {
//     return (
//         <p styled.div={styled.div`
//         padding: 0 30px;
//         display: ${hasPosted ? 'block' : 'none'};
//     `}>{children}</p>
//     );
// }

export const Response = styled.p`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
