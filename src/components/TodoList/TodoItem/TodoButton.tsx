import React from 'react';
import { StyledButton } from './TodoItem.style';

interface Props {
  type: 'delete' | 'edit' | 'complete';
  onClick: () => void;
  disabled?: boolean;
}

const TodoButton = ({ type, onClick, disabled }: Props) => {
  const renderLabel = (type: string) => {
    switch (type) {
      case 'complete':
        return '완료';
      case 'delete':
        return '삭제';
      case 'edit':
        return '수정';
      default:
        return type;
    }
  };
  return (
    <StyledButton
      color={type === 'delete' ? 'error' : type === 'complete' ? 'primary' : 'info'}
      variant={type === 'complete' ? 'contained' : 'text'}
      onClick={onClick}
      disabled={disabled}
    >
      {renderLabel(type)}
    </StyledButton>
  );
};

export default TodoButton;
