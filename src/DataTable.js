
/* @flow weak */

/**
 * mSupply Mobile
 * Sustainable Solutions (NZ) Ltd. 2016
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';

export class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this);
  }

  shouldComponentUpdate(props) {
    return this.props.data !== props.data;
  }

  render() {
    const {
      style,
      listStyle,
      renderHeader,
      data,
      refCallback,
      renderRow,
      ...flatListProps
    } = this.props;

    return (
      <View style={[defaultStyles.verticalContainer, style]}>
        {typeof renderHeader === 'function' && renderHeader()}
        <FlatList
          {...flatListProps}
          style={[defaultStyles.list, listStyle]}
          data={data}
          renderItem={renderRow}
        />
      </View>
    );
  }
}

DataTable.propTypes = {
  style: ViewPropTypes.style,
  listViewStyle: PropTypes.object,
  refCallback: PropTypes.func,
  renderHeader: PropTypes.func,
  data: PropTypes.object.isRequired,
  renderRow: PropTypes.func.isRequired,
};
DataTable.defaultProps = {
  showsVerticalScrollIndicator: true,
  scrollRenderAheadDistance: 5000,
};

const defaultStyles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
