/**
 *
 * ramroll on 16/7/10.
 */


// 代码无法执行, 需要react-native环境
let {Rx, run} = require('@cycle/core');
let React = require('react-native');
let {makeReactNativeDriver} = require('@cycle/react-native');
let {StyleSheet, Text, View, Image, StatusBarIOS} = React;

function main({RN}) {
  return {
    RN: RN.select('button').events('press')
      .map(ev => +1) // Intent
      .startWith(0)  // model
      .scan((x,y) => x+y) // model
      .map(i => //
        <View>
          <Text style={styles.button} selector="button">Increment</Text>
          <Text>You have clicked the button {i} times.</Text>
        </View>
      ),
  };
}

run(main, {
  RN: makeReactNativeDriver('MyMobileApp'),
});