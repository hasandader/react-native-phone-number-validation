import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import styles from './styles';

interface Props {
  style?: object;
  inputStyle?: object;
  textStyle?: object;
}

export function PhoneInput({ style, inputStyle, textStyle }: Props) {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [validity, setValidity] = useState<string>();

  const isValidPhoneNumber = (number: string): boolean => {
    var cleanedNumber = number.replace(/\D/g, '');
    cleanedNumber = cleanedNumber.replace(/^(90|0)/, '');

    if (cleanedNumber.length === 10 && cleanedNumber.startsWith('5')) {
      return true;
    } else if (
      cleanedNumber.length === 10 &&
      isValidAreaCode(cleanedNumber.substring(0, 3))
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validAreaCodes = [
    '322',
    '416',
    '272',
    '472',
    '382',
    '358',
    '312',
    '242',
    '478',
    '466',
    '256',
    '266',
    '378',
    '488',
    '458',
    '228',
    '426',
    '434',
    '374',
    '248',
    '224',
    '286',
    '376',
    '364',
    '258',
    '412',
    '380',
    '284',
    '424',
    '446',
    '442',
    '222',
    '342',
    '454',
    '456',
    '438',
    '326',
    '476',
    '246',
    '324',
    '212',
    '216',
    '232',
    '344',
    '370',
    '338',
    '474',
    '366',
    '352',
    '318',
    '288',
    '386',
    '348',
    '262',
    '332',
    '274',
    '422',
    '236',
    '482',
    '252',
    '436',
    '384',
    '388',
    '452',
    '328',
    '464',
    '264',
    '362',
    '484',
    '368',
    '346',
    '414',
    '486',
    '282',
    '356',
    '462',
    '428',
    '276',
    '432',
    '226',
    '354',
    '372',
  ];

  const isValidAreaCode = (code: string) => {
    return validAreaCodes.includes(code);
  };

  const onCheck = () => {
    const isValid = isValidPhoneNumber(phoneNumber);

    if (isValid) {
      setValidity('This is a valid phone number!');
    } else {
      setValidity('This is an invalid phone number!');
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder="Enter Phone Number Here ..."
        onChangeText={(value) => {
          setPhoneNumber(value);
        }}
        value={phoneNumber}
        style={[styles.input, inputStyle]}
      />
      <Text style={[styles.text, textStyle]}>{validity}</Text>
      <Button onPress={onCheck} title="Check" />
    </View>
  );
}
