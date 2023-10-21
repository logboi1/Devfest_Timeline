import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '../utils/theme';
import BoldText from '../utils/boldText';
import RegularText from '../utils/regularText';
import CButton from './button';

const CustomAlert = ({visible, type, message, onClose, title, btntitle}) => {
  const colors = useTheme();

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'white';
      case 'failure':
        return colors.background;
      case 'error':
        return colors.background;
      default:
        return 'white';
    }
  };

  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <View style={styles.outerContainer}>
        <View
          style={[styles.container, {backgroundColor: getBackgroundColor()}]}>
          <View style={styles.alert}>
            <BoldText
              customColor={type === 'success' ? colors.accent : 'red'}
              customStyle={styles.title}>
              {title}
            </BoldText>
            <RegularText
              customColor={colors.placeholder}
              customStyle={styles.message}>
              {message}
            </RegularText>
            <CButton
              title={btntitle}
              onPress={onClose}
              style={styles.closeButton}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(22),
  },
  alert: {
    padding: 20,
    width: RFValue(273),
  },
  title: {
    fontSize: RFValue(20),
    // marginBottom: RFSize(5),
    textAlign: 'center',
  },
  message: {
    fontSize: RFValue(12),
    marginBottom: RFValue(18),
    textAlign: 'center',
  },
  closeButton: {
    height: RFValue(40),
  },
});

export default CustomAlert;
