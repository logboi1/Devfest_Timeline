import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {useTheme} from '../utils/theme';
import {RFValue} from 'react-native-responsive-fontsize';

const MainLayout = ({children, topBar, bottomBar}) => {
  const colors = useTheme();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, {backgroundColor: colors.background}]}>
        {topBar}
        <View style={styles.content}>{children}</View>
        {bottomBar && <View style={styles.bottomBar}>{bottomBar}</View>}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: RFValue(15),
  },
});

export default MainLayout;
