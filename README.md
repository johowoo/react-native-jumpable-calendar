# react-native-jumpable-calendar 
React Native calendar component for both Android and iOS. Users can use dropdown list to jump to any month in the range


## Install

```bash
npm install react-native-jumpable-calendar --save
```

## Example

![ios](https://github.com/johowoo/react-native-jumpable-calendar/blob/master/img/ios.gif)

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
| currentDate | today | `string` | Specify current date eg:'2018-08-08' |
| pastScrollRange | 50 | `number` | Max amount of months allowed to scroll to the past  |
| futureScrollRange | 50 | `number` | Max amount of months allowed to scroll to the future.  |
| scrollEnabled | true | `boolean` | Enable or disable scrolling of calendar list |
| showScrollIndicator | false | `boolean` | Enable or disable vertical scroll indicator. |
| scrollsToTop | true | `boolean` | When true, the calendar list scrolls to top when the status bar is tapped. |
| pagingEnabled | true | `boolean` | Enable or disable paging on scroll |
| calendarWidth | device width | `number` | Specify the width of this calendar component |
| showMonthChooser | false | `boolean` | Controller whether or not display monthChooser. |
| showTodayButton | true | `boolean` | Controller whether or not display today button. |
| showCalendarTextHeader | false | `boolean` | Controller whether or not display static calendar text header. |
| dayTextArr | ["Sun"..."Sat"] | `array` | Restricts the range of possible date values. |
| markedDates | {} | `object` |  Collection of dates that have to be marked. |

| dropdownStyle | - | `object` | |
| dropdownListTextStyle | - | `object` | The hook of customize dropdown style. |
| dropdownSelectionStyle | - | `object` | The hook of customize dropdown style. |
| disabledDropdownListStyle | - | `object` | The hook of customize dropdown style. |
| dropdownMenuStyle | - | `object` | The hook of customize datepicker dropdown. |
| disabledDropdownMenuTextStyle | - | `object` | The hook of customize dropdown style. |
| dropdownMenuTextStyle | - | `object` | The hook of customize dropdown style. |
| dropdownTextHighlightStyle | - | `object` | The hook of customize dropdown style. |

