import React from 'react';
import { StyleSheet } from 'react-native';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../components/safe-area-layout.component';
import { ArrowIosBackIcon } from '../components/icons';
import ContentView from './feed-2';

export const Feed2Screen = ({ navigation }): React.ReactElement => {

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title='Feed'
        leftControl={renderBackAction()}
      />
      <ContentView/>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
