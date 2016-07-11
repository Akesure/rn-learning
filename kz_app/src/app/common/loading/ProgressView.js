/**
 * Created by cauchywei on 16/5/1.
 */

import React, {Component, PropTypes} from 'react'
import {
    View,
    StyleSheet,
    Platform,
    ProgressBarAndroid,
    ActivityIndicator,
    Color,
    ColorPropType,
    
} from "react-native"


var STYLE_ATTRIBUTES = [
    'Horizontal',
    'Normal',
    'Small',
    'Large',
    'Inverse',
    'SmallInverse',
    'LargeInverse'
];

export class ProgressView extends Component {

    static Props = {
        ...View.Props,
        colorIOS: ColorPropType,
        colorAndroid: ColorPropType,
        animating: PropTypes.bool,
        styleAttr: PropTypes.oneOf(STYLE_ATTRIBUTES)
    }

    render() {

        var {colorIOS, colorAndroid, styleAttr, animating, ...props} = this.props

        if (Platform.OS == 'android') {
            return <View {...props} sytle={{flex : 1, alignItems : 'center', justifyContent : 'center'}} >
                <View>
                    <ProgressBarAndroid styleAttr={styleAttr||'Normal'} color={colorAndroid} />
                </View>
            </View>
                
        } else {
            return <ActivityIndicator {...props} animating={animating} color={colorIOS}/>

        }


    }

}
