import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../modal/slice/counterSlice';
import { getCounterValue } from '../modal/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1
        // eslint-disable-next-line i18next/no-literal-string
        data-testId="value-title"
      >
        {counterValue}
      </h1>
      <button data-testId="increment-btn" type="button" onClick={increment}>
        {t('increment')}
      </button>
      <button data-testId="decrement-btn" type="button" onClick={decrement}>
        {t('decrement')}
      </button>
    </div>
  );
};
