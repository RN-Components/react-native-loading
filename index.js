import React from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Platform,
} from 'react-native'


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})
export default class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }
  static propTypes = {
    loadingShow: React.PropTypes.bool.isRequired,
    size: React.PropTypes.string,
    color: React.PropTypes.string,
    overlayWidth: React.PropTypes.number,
    overlayHeight: React.PropTypes.number,
    overlayColor: React.PropTypes.string,
    text: React.PropTypes.string,
    textColor: React.PropTypes.string,
    textFontSize: React.PropTypes.number,
  }
  static defaultProps = {
    isDismissible: false,
    overlayWidth: 80,
    overlayHeight: 80,
    overlayColor: 'rgba(0,0,0,0.6)',
    size: (Platform.OS === 'ios') ? 'large' : 'SmallInverse',
    color: (Platform.OS === 'ios') ? 'gray' : 'white',
    text: 'Loading',
    textColor: '#eeeeee',
    textFontSize: 14,
  }

  render() {
    let customStyles = StyleSheet.create({
      overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: this.props.overlayColor,
        width: this.props.overlayWidth,
        height: this.props.overlayHeight,
      },

      text: {
        color: this.props.textColor,
        fontSize: this.props.textFontSize,
        marginTop: 8,
      },
    })

    if (!this.props.loadingShow) {
      return (<View />)
    } else {
      return (
        <View style={styles.container}>
          <View style={customStyles.overlay}>
            <ActivityIndicator color={this.props.color} size={this.props.size} />
            <Text style={customStyles.text}>{this.props.text}</Text>
          </View>
        </View>
      )
    }
  }
}
