import { StyleSheet } from 'react-native';
import { Colors, FontFamily } from '../../../../rsc/theme';
import { size } from '../../../../rsc/theme/fonts';

export default StyleSheet.create({

  selectedTab: {
    width: '50%',
    paddingBottom: 15,
    borderColor: Colors.darkRed,
    borderBottomWidth: 3,
    alignItems: 'center'
  },
  tab: { width: '50%', paddingBottom: 15, borderBottomWidth: 1,
  borderColor: Colors.brownDusty,
   alignItems: 'center' },
  selectedTabText: { fontSize: size.size_16, fontFamily: FontFamily.bold, color: Colors.white },
  tabTxt: { fontSize: size.size_16, fontFamily: FontFamily.bold, color: Colors.white },

});
