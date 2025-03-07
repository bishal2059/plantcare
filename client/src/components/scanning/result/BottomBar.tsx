import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {myColors} from '../../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {CustomButton} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation';

const BottomBar = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const savedForDiagnosis = () => {};
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: myColors.lightwhite,
        paddingTop: 2,
      }}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            columnGap: 10,
            paddingHorizontal: 15,
            paddingVertical: 7,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('tabs')}
            style={{
              alignItems: 'center',
              backgroundColor: myColors.primary,
              padding: 5,
              borderRadius: 999,
              width: 40,
              height: 40,
              justifyContent: 'center',
            }}>
            <Icon name="home" size={24} color={myColors.white} />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => navigation.navigate('camera')}
            style={{
              alignItems: 'center',
              backgroundColor: myColors.primary,
              padding: 5,
              borderRadius: 999,
              width: 40,
              height: 40,
              justifyContent: 'center',
            }}>
            <Icon name="camera" size={24} color={myColors.white} />
          </TouchableOpacity> */}
          <CustomButton
            title={'Try another photo'}
            handlePress={() => navigation.navigate('camera')}
            containerStyles={styles.buttonContainer}
            textStyles={styles.buttonText}
            isLoading={false}
            iconname="camera"
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: myColors.primary,
    paddingVertical: 10,
    borderRadius: 999,
    paddingHorizontal: 20,
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: myColors.white,
  },
});
