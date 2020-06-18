// Dependencies import
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import SettingsRowStyle from '../Styles/SettingsRowStyle'

// Styles deconstructing
const {
    containerInSection,
    containerInnerSection,
    iconLeft,
    iconRight,
    text,
} = SettingsRowStyle

// Class for navigate rows
class NavigateRow extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressCallback}>
                <View style={containerInSection}>
                    <View style={containerInnerSection}>
                        {
                            (this.props.iconLeft) && this.props.iconLeft
                        }
                        <Text style={text} numberOfLines={1} ellipsizeMode={'tail'}>
                            {this.props.text}
                        </Text>
                        {
                            (this.props.iconRight) && this.props.iconRight
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

// Component export
export { NavigateRow }