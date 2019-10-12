import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { ListItemContainer, ListItemText } from './styled';
import { colors } from '../../configs/themes';

function ListItem({ text, value, onPress }) {
  return (
    <ListItemContainer onPress={() => onPress(value)}>
      <>
        <ListItemText>{text}</ListItemText>
        <Icon name="chevron-right" color={colors.primary} size={24} />
      </>
    </ListItemContainer>
  );
}

export default ListItem;