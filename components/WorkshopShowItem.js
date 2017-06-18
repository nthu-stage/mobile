import React, {Component} from 'react';
import {Row, Col, Icon, Text} from 'native-base';

export default class WorkshopShowItem extends Component {
    static defaultProps = {
        padder: true
    }

    render() {
        return (
            <Row style={{
                flex: 1,
                alignItems: 'center',
                marginBottom: this.props.padder ? 24 : 0,
            }}>
                <Col style={{
                    width: 20,
                    marginRight: 10
                }}>
                    <Icon style={{
                        fontSize: 16,
                        color: 'gray',
                        textAlign: 'center'
                    }} name={this.props.iconName}/>
                </Col>
                <Col>
                    <Text>{this.props.subtitle}</Text>
                    <Text note>{this.props.title}</Text>
                </Col>
            </Row>
        );
    }
}
