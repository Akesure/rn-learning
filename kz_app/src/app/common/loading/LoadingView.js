/**
 * Created by cauchywei on 16/5/1.
 */

import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Platform,
    ProgressBarAndroid,
    ActivityIndicatorIOS
} from "react-native"

import {ProgressView} from './ProgressView'

export class LoadingView extends Component {

    render() {

        return (<View style={styles.container}>
            <ProgressView
                styleAttr='Large'
                animatiing={true}
                colorIOS="white"
            />
        </View>)

    }

}

var styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        backgroundColor: '#0008',
        borderRadius: 12,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})


