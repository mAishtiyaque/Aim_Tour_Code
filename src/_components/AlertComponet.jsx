import { useSelector, useDispatch } from 'react-redux';
import { userActions } from './../_actions';

function AlertComponent() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch();
  if (alert.alertClass) setTimeout(() => dispatch(userActions.resetAlert()), 2500);

  return (
      <div className='alertBox col-7 offset-2 col-md-5 offset-md-3'>
        {alert.alertClass && <div className={`alert ${alert.alertClass}`}>
          {alert.message}
        </div>}
      </div>
  );
}

export default AlertComponent;