import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Settings} from '../../components/settings';
import {myColors} from '../../styles/colors';

const SettingsPage = () => {
  return (
    <View
      style={{
        backgroundColor: myColors.white,
      }}>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: myColors.lightwhite,
          }}>
          <Settings />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({});
