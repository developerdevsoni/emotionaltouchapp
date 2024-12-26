import Snackbar from 'react-native-snackbar';
import {Color} from '../../rsc/theme';
export function SnackBarMessage(message, slug = '') {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
    numberOfLines: 1,
    backgroundColor:
      slug === 'error'
        ? Color.error
        : slug === 'success'
        ? Color.success
        : Color.blue,
  });
}
