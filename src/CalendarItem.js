import React, {Component} from "react";
import {
    FlatList,
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import XDate from "xdate";
import {returnDaysArr} from "../utils/returnDaysArr";

const {width} = Dimensions.get("window");

export class CalendarItem extends Component {
    constructor(props) {
        super(props);
        //item->日期 直接显示日期
        const dataArr = [];
        this.state = {};
        if (this.props.item instanceof XDate) {
            this.state.dataArr = returnDaysArr(this.props.item);
        }
        const markedDaysObj = {};
        this.state.item = this.props.item;
        this.state.markedDatesObj = this.props.markedDatesObj;
        // if (this.props.markedDatesArr.length > 0) {
        //     this.props.markedDatesArr.forEach(item => {
        //         if (Object.keys(item).length > 0) {
        //             markedDaysObj[parseInt(Object.keys(item)[0]?.split("-")[2], 10)] = item[Object.keys(item)[0]];
        //         }
        //         markedDaysArr.push({[parseInt(Object.keys(item)[0].split("-")[2])]: item[Object.keys(item)[0]]});
        //     });
        //     this.props.markedDaysObj = markedDaysObj;
        // }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.item instanceof XDate && nextProps.item !== this.state.item) {
            // console.warn("nextProps", nextProps);
            // const dataArr = [];
            if (this.props.item instanceof XDate) {
                // dataArr = returnDaysArr(this.props.item);
                this.setState({dataArr: returnDaysArr(this.props.item)});
            }
        }
        if (
            nextProps.markedDatesObj &&
            nextProps.markedDatesObj !== this.state.markedDatesObj
        ) {
            this.setState({
                markedDatesObj: nextProps.markedDatesObj,
            });
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <TouchableOpacity
                style={{...styles.dateItemContainer, width: 0.143 * this.props.calendarWidth}}
                key={item.toString() + index}
                onPress={() => {
                    const day = item.day > 9 ? item.day : `0${item.day}`;
                    const pressedDay = `${this.props.item.toString("yyyy-MM")}-${day}`;
                    this.props.onDayPress(pressedDay);
                }}>
                <View
                    style={
                        this.props.markedDatesObj[item.day]?.marked
                            ? [
                                styles.innerContainer,
                                {
                                    backgroundColor: this.props.markedDatesObj[item.day]
                                        ?.selectedColor
                                        ? this.props.markedDatesObj[item.day]?.selectedColor
                                        : "#c69",
                                },
                            ]
                            : styles.innerContainer
                    }>
                    <Text style={styles.dateItemText}>{item.day}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    render() {
        return (
            <View style={{flex: 1, width: this.props.calendarWidth, height: this.props.height}}>
                {this.props.item instanceof XDate ? (
                    <FlatList
                        data={this.state.dataArr}
                        renderItem={this._renderItem}
                        style={{flex: 1}}
                        contentContainerStyle={{
                            width: width,
                            height: "100%",
                            backgroundColor: "transparent",
                        }}
                        directionalLockEnabled={true}
                        scrollToTop={false}
                        keyExtractor={(item, index) => String(String(index) + item.day)}
                        getItemLayout={(data, index) => ({
                            length: 60,
                            offset: 60 * index,
                            index,
                        })}
                        numColumns={7}
                        scrollEnabled={false}
                        extraData={this.props.markedDates}
                    />
                ) : (
                    <View style={styles.datePureStyle}>
                        <Text style={styles.datePureTextStyle}>{this.props.item}</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    dateItemContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "14.3%",
        height: 60,
    },
    innerContainer: {
        borderRadius: 20,
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    dateItemText: {
        color: "#eee",
        textAlign: "center",
        fontSize: 16,
    },
    datePureStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    datePureTextStyle: {
        color: "#eee",
        fontSize: 32,
    },
});
