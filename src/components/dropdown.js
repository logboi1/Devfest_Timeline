//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from '../utils/theme';

// create a component
const CSelectList = ({
  options,
  onSelect,
  inputStyles,
  containerStyles,
  dropdownStyle,
  optionStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const colors = useTheme();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleDropdown}
        style={[
          styles.header,
          containerStyles,
          {borderColor: colors.accent, backgroundColor: 'transparent'},
        ]}>
        <Text
          style={[
            styles.input,
            inputStyles,
            {
              color: selectedOption ? colors.text : colors.placeholder,
              backgroundColor: 'transparent',
            },
          ]}>
          {selectedOption || 'Select an option'}
        </Text>
        <Icon
          name={isOpen ? 'chevron-up' : 'chevron-down'}
          size={20} // Adjust the size as needed
          color={colors.text}
        />
      </TouchableOpacity>
      {isOpen && (
        <FlatList
          data={options}
          keyExtractor={item => item.id}
          style={[
            styles.dropdown,
            dropdownStyle,
            {backgroundColor: 'transparent', borderColor: colors.accent},
          ]}
          renderItem={({item}) => (
            <View style={[styles.option, optionStyle]}>
              <TouchableOpacity onPress={() => handleOptionSelect(item.label)}>
                <Text
                  style={{
                    color: colors.text,
                    fontSize: RFValue(14),
                    fontFamily: 'Poppins-Regular',
                  }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: RFValue(20),
  },
  header: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: RFValue(50),
    paddingHorizontal: RFValue(10),
    paddingVertical: RFValue(6),
    paddingTop: RFValue(14),
    borderRadius: RFValue(8),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Regular',
    flex: 1,
  },
  dropdown: {
    marginTop: RFValue(4),
    borderWidth: RFValue(1),
    borderRadius: RFValue(8),
    padding: RFValue(4),
    paddingHorizontal: RFValue(5),
  },
  option: {
    marginVertical: RFValue(2),
  },
});

//make this component available to the app
export default CSelectList;
