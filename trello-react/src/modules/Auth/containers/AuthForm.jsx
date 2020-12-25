import React, { useState, useRef, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../../TrelloStyle';
import ErrorMessage from '../components/ErrorMessage';
import { UserContext } from '../../../stores';

const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  padding: .5em;
  margin-bottom: 20px;
  border: 2px solid #DFE1E6;
  border-radius: 4px;
  border-color: ${(props) => (props.isError ? props.theme.palette.error : '#DFE1E6')};
  background-color: #FAFBFC;
`;
const InputGroup = styled.div``;

const AuthForm = observer(({ type }) => {
  const user = useContext(UserContext);
  const emailGroupEl = useRef(null);
  const passwordGroupEl = useRef(null);
  const nameGroupEl = useRef(null);

  const {
    register, errors, handleSubmit, clearErrors,
  } = useForm({ mode: 'onChange' });
  const [submitError, setSubmitError] = useState('');

  const onSubmitSuccess = (data) => {
    clearErrors(['email', 'password', 'name']);
    setSubmitError('');
    user.setToken(data.email, data.password);
  };

  const onSubmitError = () => {
    setSubmitError('입력 폼을 확인해주세요.');
  };

  const onInputBlur = (target) => {
    clearErrors(target);
  };

  const buildForm = () => (
    <>
      {/* Email */}
      <InputGroup ref={emailGroupEl}>
        <StyledInput
          id="email"
          name="email"
          type="text"
          placeholder="Enter email address"
          onBlur={() => onInputBlur('email')}
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          isError={errors.email}
        />
        {errors.email && errors.email.type === 'required' && (
          <ErrorMessage parent={emailGroupEl.current}>
            필수항목입니다.
          </ErrorMessage>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <ErrorMessage parent={emailGroupEl.current}>
            이메일 형식이 아닙니다.
          </ErrorMessage>
        )}
      </InputGroup>

      {/* Name */}
      {type === 'signup' ? (
        <InputGroup ref={nameGroupEl}>
          <StyledInput
            id="name"
            name="name"
            type="text"
            placeholder="Enter full name"
            onBlur={() => onInputBlur('name')}
            ref={register({ required: true, maxLength: 12 })}
          />
          {errors.name && errors.name.type === 'required' && (
            <ErrorMessage parent={nameGroupEl.current}>
              필수항목입니다.
            </ErrorMessage>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <ErrorMessage parent={nameGroupEl.current}>
              최대 12글자의 이름을 입력해주세요.
            </ErrorMessage>
          )}
        </InputGroup>
      ) : null}

      {/* Password */}
      <InputGroup ref={passwordGroupEl}>
        <StyledInput
          id="password"
          name="password"
          type="password"
          placeholder="Create password"
          onBlur={() => onInputBlur('password')}
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <ErrorMessage parent={passwordGroupEl.current}>
            필수항목입니다.
          </ErrorMessage>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <ErrorMessage parent={passwordGroupEl.current}>
            최소 6글자 이상의 비밀번호를 입력해주세요.
          </ErrorMessage>
        )}
      </InputGroup>
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmitSuccess, onSubmitError)}>
      {buildForm()}
      {submitError && (
        <ErrorMessage>{submitError}</ErrorMessage>
      )}
      <Button
        type="submit"
        color={type === 'signin' ? 'green' : 'blue'}
        size="medium"
        fullWidth
      >
        {type === 'signin' ? 'Sign in' : 'Sign up'}
      </Button>
    </form>
  );
});

export default AuthForm;
