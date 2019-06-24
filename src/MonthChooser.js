import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Dimensions,
} from "react-native";
import ModalDropdown from "react-native-modal-dropdown";
import {returnChoosableMonthsObj} from "../utils/returnChoosableMonthsArr";

const {width} = Dimensions.get("window");
let calendarWidth = width;

export class MonthChooser extends Component {
    componentWillMount() {
        calendarWidth = this.props.calendarWidth;
    }

    constructor(props) {
        super(props);

        const choosableMonthsObj = returnChoosableMonthsObj({
            beginMonth: this.props.choosableMonthBegins,
            endMonth: this.props.choosableMonthEnds,
        });
        this.state = {
            disable2ndDropdown: true,
            disable1stDropdown: false,
            choosableMonthsObj,
            currentDateText: this.props.currentDateText,
        };
        this.state.currentMonth = this.props.currentDateText?.split(" ")[0];
        this.state.currentYear = this.props.currentDateText?.split(" ")[1];
    }

    async componentWillReceiveProps(nextProps, nextContext) {
        await this.setState({
            MonthsArrForChosenYear: this.state.choosableMonthsObj[
                (nextProps.currentDateText?.split(" ")[1])
                ],
        });
        if (nextProps.currentDateText !== this.state.currentDateText) {
            await this.setState({currentDateText: nextProps.currentDateText});
            (await this.yearDropdown) &&
            this.yearDropdown.select(
                Object.keys(this.state.choosableMonthsObj).indexOf(
                    nextProps.currentDateText?.split(" ")[1]
                )
            );
            (await this.monthDropdown) &&
            this.monthDropdown.select(
                this.state.MonthsArrForChosenYear?.indexOf(
                    nextProps.currentDateText?.split(" ")[0]
                )
            );
        }
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: "row",
                    height: 50,
                    marginLeft: 20,
                    alignItems: "center",
                }}>
                <ModalDropdown
                    ref={year => (this.yearDropdown = year)}
                    style={
                        this.state.disable1stDropdown
                            ? styles.disabledDropdownList
                            : styles.dropdownMenu
                    }
                    textStyle={
                        this.state.disable1stDropdown
                            ? styles.disabledDropdownMenuText
                            : [styles.dropdownMenuText]
                    }
                    defaultValue={this.state.currentYear}
                    dropdownStyle={[styles.dropdownList]}
                    dropdownTextStyle={[styles.dropdownListText]}
                    dropdownTextHighlightStyle={[styles.dropdownSelection]}
                    disabled={this.state.disable1stDropdown}
                    options={Object.keys(this.state.choosableMonthsObj)}
                    onSelect={async (index, value) => {
                        await this.setState({
                            MonthsArrForChosenYear: this.state.choosableMonthsObj[value],
                        });
                        await this.setState({
                            disable2ndDropdown: false,
                            chosenYear: value,
                        });
                    }}
                />
                <ModalDropdown
                    ref={month => (this.monthDropdown = month)}
                    style={
                        this.state.disable2ndDropdown
                            ? [styles.disabledDropdownList, this.props.disabledDropdownListStyle]
                            : [styles.dropdownMenu, this.props.dropdownMenuStyle]
                    }
                    textStyle={
                        this.state.disable2ndDropdown
                            ? [styles.disabledDropdownMenuText, this.props.disabledDropdownMenuTextStyle]
                            : [styles.dropdownMenuText, this.props.dropdownMenuTextStyle]
                    }
                    defaultValue={this.state.currentMonth}
                    dropdownStyle={[styles.dropdownList, this.props.dropdownStyle]}
                    dropdownTextStyle={[styles.dropdownListText, this.props.dropdownListTextStyle]}
                    dropdownTextHighlightStyle={[styles.dropdownSelection, this.props.dropdownSelectionStyle]}
                    options={this.state.MonthsArrForChosenYear}
                    disabled={this.state.disable2ndDropdown}
                    onSelect={async (index, value) => {
                        await this.setState({chosenMonth: value});
                        await this.setState({
                            disable1stDropdown: true,
                        });
                        await this.setState({
                            disable1stDropdown: false,
                            disable2ndDropdown: true,
                        });
                        await this.props.scrollToMonth({
                            year: this.state.chosenYear,
                            month: this.state.chosenMonth,
                        });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    disabledDropdownList: {
        width: width * 0.2,
        height: 40,
        borderRadius: 12,
        marginLeft: 10,
        marginRight: calendarWidth * 0.02,
        borderWidth: 1,
        borderColor: "#aaa",
        justifyContent: "center",
    },
    dropdownMenu: {
        width: width * 0.2,
        height: 40,
        borderRadius: 12,
        marginLeft: 10,
        marginRight: calendarWidth * 0.02,
        borderWidth: 1,
        borderColor: "#c69",
        justifyContent: "center",
    },
    dropdownContainer: {
        height: 110,
        padding: calendarWidth * 0.03,
        paddingTop: calendarWidth * 0.02,
        flexDirection: "row",
    },

    disabledDropdownMenuText: {
        marginLeft: 10,
        fontSize: 24,
        fontFamily: "LobsterRegular",
        color: "#aaa",
    },

    dropdownMenuText: {
        marginLeft: 10,
        fontSize: 24,
        fontFamily: "LobsterRegular",
        color: "#c69",
    },
    dropdownList: {
        width: calendarWidth * 0.2,
    },
    dropdownListText: {
        fontSize: 18,
        marginLeft: 10,
        color: "#c69",
    },
    dropdownSelection: {
        color: "#00cccc",
    },
    jumpToStyle: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#eee",
    },
});
