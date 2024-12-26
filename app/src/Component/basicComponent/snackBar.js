import Snackbar from 'react-native-snackbar';
import {useToast} from 'react-native-toast-notifications';

export const SnackBarMessage = (toast, message, slug: '') => {
  toast.show(message, {
    type:
      slug === 'error' ? 'danger' : slug === 'success' ? 'success' : 'normal',
    // offsetTop: 200,
    offsetBottom: 400,
    duration: 2000,
    animationType: 'slide-in',
    placement: 'bottom',
  });
};
// export const SnackBarMessage = (
//   message,
//   slug = '',
//   duration = 'LENGTH_INDEFINITE',
// ) => {
//   if (message !== undefined) {
//     Snackbar.show({
//       text: message,
//       duration:
//         duration === 'LENGTH_INDEFINITE'
//           ? Snackbar.LENGTH_LONG
//           : Snackbar.LENGTH_LONG,
//       numberOfLines: 5,
//       backgroundColor:
//         slug === 'error'
//           ? Colors.error
//           : slug === 'success'
//           ? Colors.success
//           : slug === 'message'
//           ? Colors.statusbar
//           : Colors.statusbar,
//     });
//   }
// };
