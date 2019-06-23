import React, {Component} from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";

const {width} = Dimensions.get("window");

export class CalendarHeader extends Component {
    static defaultProps = {
        dayTextArr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        calendarWidth: width,
    };

    render() {
        return (
            <View style={{marginTop: 30, marginBottom: 10}}>
                {this.props.showCalendarTextHeader && (
                    <View style={{height: 50}}>
                        <Text style={styles.dateTextStyle}>{this.props.dateText}</Text>
                    </View>
                )}
                <View style={{flexDirection: "row"}}>
                    {this.props.dayTextArr.map((item, index) => (
                        <Text key={item + index}
                              style={{...styles.weekDayStyle, width: 0.143 * this.props.calendarWidth}}>
                            {item}
                        </Text>
                    ))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    weekDayStyle: {
        width: "14.3%",
        fontFamily: "PattayaRegular",
        fontSize: 18,
        color: "#ccc",
        textAlign: "center",
    },
    dateTextStyle: {
        fontFamily: "PattayaRegular",
        fontSize: 26,
        marginLeft: 15,
    },
});
