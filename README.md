# react-native-jumpable-calendar 
React Native calendar component for both Android and iOS. Users can use dropdown list to jump to any month in the range


## Install

```bash
npm install react-native-jumpable-calendar --save
```

## Example

![ios](http://xgfe.github.io/react-native-datepicker/img/react-native-datepicker-ios.gif)

## Usage

```javascript

import React, { Component } from 'react'
import Calendar from 'react-native-jumpable-calendar'

class _NewCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      markedDates: {
        "2019-05-16": { selected: true, marked: true, selectedColor: "orange" },
        "2019-05-06": { selected: true, marked: true, selectedColor: "blue" },
        "2019-05-01": { selected: true, marked: true, selectedColor: "green" },
        "2019-05-17": { marked: true },
        "2019-06-18": { marked: true, dotColor: "red", activeOpacity: 0 },
        "2019-08-19": { disabled: true, disableTouchEvent: true },
      },
    };
  }

  componentWillMount() {
    // this.props.setIsFirstTimeLogin(true);
    // this.setState({
    //
    // })
  }

  render() {
    return (
        <View style={styles.calendarWrapper}>
          <Calendar
            pagingEnabled={true}
            scrollEnabled={true}
            pastScrollRange={50}
            futureScrollRange={50}
            showTodayButton={true}
            showMonthChooser={true}
            calendarWidth={300}
            onDayPress={day => {
              console.warn("day", day);
            }}
            markedDates={this.state.markedDates}
          />
        </View>
    );
  }
}
```


## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| style | - | `object` | Specify the style of the DatePicker, eg. width, height...  |
| date | - | <code>string &#124; date &#124; Moment instance</code> | Specify the display date of DatePicker. `string` type value must match the specified format |
| mode | 'date' | `enum` | The `enum` of `date`, `datetime` and `time` |
| androidMode | 'default' | `enum` | The `enum` of `default`, `calendar` and `spinner` (only Android) |
| format | 'YYYY-MM-DD' | `string` | Specify the display format of the date, which using [moment.js](http://momentjs.com/). The default value change according to the mode. |
| confirmBtnText | '确定' | `string` | Specify the text of confirm btn in ios. |
| cancelBtnText | '取消' | `string` | Specify the text of cancel btn in ios. |
| iconSource | - | <code>{uri: string} &#124; number</code> | Specify the icon. Same as the `source` of Image, always using `require()` |
| minDate | - | <code>string &#124; date</code> | Restricts the range of possible date values. |
| maxDate | - | <code>string &#124; date</code> | Restricts the range of possible date values. |
| duration | 300 | `number` | Specify the animation duration of datepicker.|
| customStyles | - | `object` | The hook of customize datepicker style, same as the native style. `dateTouchBody`, `dateInput`...|
| showIcon | true | `boolean` | Controller whether or not show the icon |
| hideText | false | `boolean` | Controller whether or not show the `dateText` |
| iconComponent | - | `element` | Set the custom icon |
| disabled | false | `boolean` | Controller whether or not disable the picker |
| is24Hour | - | `boolean` | Set the TimePicker is24Hour flag. The default value depend on `format`. Only work in Android |
| allowFontScaling | true | `boolean` | Set to false to disable font scaling for every text component |
| placeholder | '' | `string` | The placeholder show when this.props.date is falsy |
| onDateChange | - | `function` | This is called when the user confirm the picked date or time in the UI. The first and only argument is a date or time string representing the new date and time formatted by [moment.js](http://momentjs.com/) with the given format property. |
| onOpenModal | - | `function` | This is called when the DatePicker Modal open. |
| onCloseModal | - | `function` | This is called when the DatePicker Modal close |
| onPressMask | - | `function` | This is called when clicking the ios modal mask |
| modalOnResponderTerminationRequest | - | `function` | Set the callback for React Native's [Gesture Responder System](https://facebook.github.io/react-native/docs/gesture-responder-system.html#responder-lifecycle)'s call to `onResponderTerminationRequest`. By default this will reject a termination request, but can be overidden in case the View under the Modal is implementing custom gesture responders, and you wish for those to be overidden in certain cases.  |
| TouchableComponent | `TouchableHighlight` | `Component` | Replace the `TouchableHighlight` with a custom `Component`. For example : `TouchableOpacity` |
| getDateStr | - | Function | A function to override how to format the date into a `String` for display, receives a `Date` instance

### Property `customStyles` available keys

* appearance: `dateInput`, `disabled`, `dateTouchBody`, `dateIcon`, `placeholderText`, `dateText`
* ios select panel: `datePickerCon`, `datePicker`, `btnConfirm`, `btnTextConfirm`, `btnCancel`, `btnTextCancel`


## Instance Methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| onPressDate | - | Manually open the date picker panel |
| onPressCancel | - | Manually close the date picker panel like, similarly pressing cancel btn |
