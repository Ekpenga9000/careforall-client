type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const handleFormChange = (
  e: FormEvent,
  state: T,
  setterFunction: SetState<T>
) => {
  setterFunction({ ...state, [e.target.name]: e.target.value });
};

//Send email function


