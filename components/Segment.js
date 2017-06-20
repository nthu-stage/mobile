import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

export default class Segment extends Component {
    static defaultProps = {
        left: '',
        right: '',
        multiple: false,
        onUpdate: () => {}
    }

    constructor(props) {
        super(props);

        this.onPressLeft = this.onPressLeft.bind(this);
        this.onPressRight = this.onPressRight.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            left: true,
            right: false
        }
    }

    onPressLeft() {
        const {left, right} = this.state;
        if (this.props.multiple) {
            this.setState({
                left: !left
            }, () => this.onUpdate());
        } else {
            if (!this.state.left) {
                this.setState({
                    left: true,
                    right: false
                }, () => this.onUpdate());
            }
        }
    }

    onPressRight() {
        const {left, right} = this.state;
        if (this.props.multiple) {
            this.setState({
                right: !right
            }, () => this.onUpdate());
        } else {
            if (!this.state.right) {
                this.setState({
                    left: false,
                    right: true
                }, () => this.onUpdate());
            }
        }
    }

    onUpdate() {
        const {left, right} = this.state;
        this.props.onUpdate([left, right]);
    }

    render() {
        const {container, button} = styles;
        const {left, right} = this.state;
        return (
            <View style={container}>
                <TouchableWithoutFeedback onPress={this.onPressLeft}>
                    <View style={[
                        button, {
                            borderWidth: left === true
                                ? 1
                                : 0
                        }
                    ]}>
                        <Text style={{
                            color: left === true
                                ? 'red'
                                : 'gray'
                        }}>{this.props.left}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.onPressRight}>
                    <View style={[
                        button, {
                            borderWidth: right === true
                                ? 1
                                : 0
                        }
                    ]}>
                        <Text style={{
                            color: right === true
                                ? 'red'
                                : 'gray'
                        }}>{this.props.right}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 30,
        margin: 10,
        marginTop: 0
    },
    button: {
        width: 120,
        height: 30,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
