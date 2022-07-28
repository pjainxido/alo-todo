import Input, { InputProps } from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { IDone } from '..';
import React from 'react';
import { StyledInput } from './TodoItem.style';

interface TodoInputProps extends InputProps, IDone {
  done?: boolean;
  isEdit: boolean;
  onChangeInput: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TodoInput = ({ onChangeInput, isEdit, value, done = false }: TodoInputProps) => {
  return (
    <StyledInput
      sx={done && isEdit ? { backgroundColor: '#DBE2EF' } : {}}
      disabled={done || !isEdit}
      disableUnderline
      value={value}
      placeholder='할일을 입력해주세요'
      onChange={onChangeInput}
    />
  );
};

export default TodoInput;
