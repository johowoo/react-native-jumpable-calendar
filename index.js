import React, {Component} from "react";
import {
    View,
    Text,
    FlatList,
    Platform,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import PropTypes from "prop-types";
import XDate from "xdate";
import {parseDate} from "./utils/interface";
import {CalendarItem} from "./src/CalendarItem";
import {CalendarHeader} from "./src/CalendarHeader";
import {MonthChooser} from "./src/MonthChooser";
import {nameOfMonthArr} from "./utils/daysCountOfSpecificMonthYear";

const {width} = Dimensions.get("window");

const VIEWABILITY_CONFIG = {
    // minimumViewTime: 300,
    viewAreaCoveragePercentThreshold: 30,
    // waitForInteraction: true,
};

export class Calendar extends Component {
    static propTypes = {
        ...Calendar.propTypes,
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange: PropTypes.number,
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange: PropTypes.number,
        // Enable or disable scrolling of calendar list
        scrollEnabled: PropTypes.bool,
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator: PropTypes.bool,
        // When true, the calendar list scrolls to top when the status bar is tapped. Default = true
        scrollsToTop: PropTypes.bool,
        // Enable or disable paging on scroll
        pagingEnabled: PropTypes.bool,
        // Whether the scroll is horizontal
        horizontal: PropTypes.bool,
        // Used when calendar scroll is horizontal, default is device width, pagination should be disabled
        calendarWidth: PropTypes.number,
        // Dynamic calendar height
        calendarHeight: PropTypes.number,
        // Style for the List item (the calendar)
        calendarStyle: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.number,
            PropTypes.array,
        ]),
        // Whether to use static header that will not scroll with the list (horizontal only)
        staticHeader: PropTypes.bool,
    };

    static defaultProps = {
        horizontal: false,
        calendarWidth: width,
        calendarHeight: 360,
        pastScrollRange: 50,
        futureScrollRange: 50,
        showScrollIndicator: false,
        scrollEnabled: true,
        scrollsToTop: false,
        removeClippedSubviews: Platform.OS === "android" ? false : true,
        pagingEnabled: true,
        showMonthChooser: false,
    };
    _onViewableItemsChange = async props => {
        const {viewableItems} = props;

        function rowIsCloseToViewable(index, distance) {
            //以viewableItems的数量作为遍历的计数
            for (let i = 0; i < viewableItems.length; i++) {
                if (Math.abs(index - parseInt(viewableItems[i]?.index)) <= distance) {
                    //只要与任一viewableItems位置接近，就说明即将渲染，直接返回true
                    return true;
                }
            }
            //与所有的viewableItems 都不接近， 则返回false
            return false;
        }

        const dataArrCopy = this.state.dataArr;
        for (let i = 0; i < dataArrCopy.length; i++) {
            if (rowIsCloseToViewable(i, 1)) {
                // console.warn("openDate", this.state.openDate);
                dataArrCopy[i] = this.state.openDate
                    .clone()
                    .addMonths(i - this.props.pastScrollRange, true);
            } else {
                if (dataArrCopy[i] instanceof XDate) {
                    dataArrCopy[i] = dataArrCopy[i].clone().toString("MMM yyyy");
                } else {
                    dataArrCopy[i] = dataArrCopy[i];
                }
            }
        }
        await this.setState({
            dataArr: dataArrCopy,
            currentDate: this.state.textsArr[(viewableItems[0]?.index)],
            currentDateText: this.state.textsArr[(viewableItems[0]?.index)]?.toString(
                "MMM yyyy"
            ),
        });
    };

    constructor(props) {
        super(props);
        const date = parseDate(this.props.currentDate) || XDate();
        const dataArr = [];
        const textsArr = [];

        for (
            let i = 0;
            i < this.props.pastScrollRange + this.props.futureScrollRange + 1;
            ++i
        ) {
            const dateItem = date
                .clone()
                .addMonths(i - this.props.pastScrollRange, true);
            const dateItemText = dateItem.toString("MMM yyyy");
            textsArr.push(dateItemText);
            if (
                (i >= this.props.pastScrollRange - 1 &&
                    i <= this.props.pastScrollRange + 1) ||
                (!this.props.pastScrollRange && i <= this.props.pastScrollRange + 2)
            ) {
                dataArr.push(dateItem);
            } else {
                dataArr.push(dateItemText);
            }
        }
        this.state = {
            openDate: this.props.currentDate || XDate(),
            currentDate: parseDate(this.props.currentDate),
            dataArr,
            textsArr,
            currentDateText: "Jun 2019",
        };
        if (this.props.showMonthChooser) {
            this.state.choosableMonthBegins = textsArr[0];
            this.state.choosableMonthEnds =
                textsArr[this.props.pastScrollRange + this.props.futureScrollRange];
        }
    }

    _renderItem = ({item, index}) => {
        // console.warn(Object.keys(this.props.markedDates));
        let regText = "";
        if (item instanceof XDate) {
            regText = `${item.getFullYear()}-${
                item.getMonth() > 8 ? item.getMonth() + 1 : `0${item.getMonth() + 1}`
                }`;
        } else {
            regText = `${item?.split(" ")[1]}-${
                nameOfMonthArr.indexOf(item?.split(" ")[0]) + 1 > 9
                    ? nameOfMonthArr.indexOf(item?.split(" ")[0]) + 1
                    : `0${nameOfMonthArr.indexOf(item?.split(" ")[0]) + 1}`
                }`;
        }
        const regExp = new RegExp(regText);
        // const markedDatesArr = [];
        const markedDatesObj = {};
        for (const key in this.props.markedDates) {
            if (regExp.test(key)) {
                markedDatesObj[
                    parseInt(key?.split("-")[2], 10)
                    ] = this.props.markedDates[key];
            }
        }
        // if (this.props.markedDatesArr.length > 0) {
        //     this.props.markedDatesArr.forEach(item => {
        //         if (Object.keys(item).length > 0) {
        //             markedDaysObj[parseInt(Object.keys(item)[0]?.split("-")[2], 10)] = item[Object.keys(item)[0]];
        //         }
        //         markedDaysArr.push({[parseInt(Object.keys(item)[0].split("-")[2])]: item[Object.keys(item)[0]]});
        //     });
        //     this.state.markedDaysObj = markedDaysObj;
        // }

        // Object.keys(this.props.markedDates).map((item, index) => {
        //     if (regExp.test(item)) {
        //         markedDatesArr.push({[item]: this.props.markedDates[item]});
        //     }
        // });
        return (
            <CalendarItem
                key={
                    item instanceof Object
                        ? item.getFullYear() + item.getMonth() + index
                        : item + index
                }
                style={{flex: 1, width: this.props.calendarWidth}}
                item={item}
                index={index}
                onDayPress={this.props.onDayPress}
                calendarWidth={this.props.calendarWidth}
                // markedDates={this.props.markedDates}
                // markedDatesArr={markedDatesArr}
                markedDatesObj={markedDatesObj}
            />
        );
    };
    getItemLayout = (data, index) => ({
        length: this.props.calendarWidth,
        offset: this.props.calendarWidth * index,
        index,
    });
    handleClickToday = () => {
        this.flatList.scrollToOffset({
            offset: this.props.pastScrollRange * this.props.calendarWidth,
            animated: false,
        });
    };
    scrollToMonth = ({month, year}) => {
        const foundIndex = this.state.textsArr.indexOf(`${month} ${year}`);

        this.flatList.scrollToOffset({
            offset: foundIndex * this.props.calendarWidth,
            animated: true,
        });
    };

    render() {
        return (
            <View
                style={{height: 530, width: this.props.calendarWidth, marginTop: 50}}>
                {this.props.showMonthChooser ? (
                    <MonthChooser
                        calendarWidth={this.props.calendarWidth}
                        choosableMonthArr={this.state.choosableMonthArr}
                        flatListRef={this.flatList}
                        scrollToMonth={this.scrollToMonth}
                        choosableMonthBegins={this.state.choosableMonthBegins}
                        choosableMonthEnds={this.state.choosableMonthEnds}
                        currentDateText={this.state.currentDateText}
                        dropdownStyle={this.props.dropdownStyle}
                        dropdownListTextStyle={this.props.dropdownListTextStyle}
                        dropdownSelectionStyle={this.props.dropdownSelectionStyle}
                        disabledDropdownListStyle={this.props.disabledDropdownListStyle}
                        dropdownMenuStyle={this.props.dropdownMenuStyle}
                        disabledDropdownMenuTextStyle={this.props.disabledDropdownMenuTextStyle}
                        dropdownMenuTextStyle={this.props.dropdownMenuTextStyle}
                    />
                ) : (
                    <View style={{height: 50}}>
                        <Text style={styles.dateTextStyle}>
                            {this.state.currentDateText}
                        </Text>
                    </View>
                )}
                <CalendarHeader
                    calendarWidth={this.props.calendarWidth}
                    dateText={this.state.currentDateText}
                    dayTextArr={this.props.dayTextArr}
                    showCalendarTextHeader={this.props.showCalendarTextHeader}
                />
                <FlatList
                    ref={flatList => (this.flatList = flatList)}
                    viewabilityConfig={VIEWABILITY_CONFIG}
                    onViewableItemsChanged={this._onViewableItemsChange}
                    initialListSize={
                        this.props.pastScrollRange + this.props.futureScrollRange + 1
                    }
                    horizontal={true}
                    data={this.state.dataArr}
                    renderItem={this._renderItem}
                    scrollEnabled={this.props.scrollEnabled}
                    pagingEnabled={this.props.pagingEnabled}
                    initialScrollIndex={this.props.pastScrollRange}
                    getItemLayout={this.getItemLayout}
                    keyExtractor={(item, index) =>
                        String(
                            item instanceof Object
                                ? item.getFullYear() + item.getMonth() + index
                                : item + index
                        )
                    }
                    overScrollMode={"never"}
                    alwaysBounceHorizontal={false}
                    directionalLockEnabled={true}
                    showsVerticalScrollIndicator={this.props.showScrollIndicator}
                    showsHorizontalScrollIndicator={this.props.showScrollIndicator}
                    scrollsToTop={this.props.scrollsToTop}
                    extraData={Object.keys(this.props.markedDates).length}
                />
                {this.props.showTodayButton && (
                    <TouchableOpacity
                        style={styles.todayButtonStyle}
                        onPress={this.handleClickToday}>
                        <Text style={styles.todayButtonTextStyle}>Today</Text>
                    </TouchableOpacity>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todayButtonStyle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#eee",
        height: 35,
        margin: 10,
    },
    todayButtonTextStyle: {
        fontFamily: "LobsterRegular",
        fontSize: 20,
        color: "#eee",
    },
});
