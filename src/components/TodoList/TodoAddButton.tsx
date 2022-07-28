import { RoundButton } from './TodoList.style';

interface TodoAddButtonProps {
  disabled: boolean;
  onClick: () => void;
}

export const TodoAddButton = ({ disabled, onClick }: TodoAddButtonProps) => {
  return (
    <RoundButton disabled={disabled} variant='contained' onClick={onClick}>
      +
    </RoundButton>
  );
};
