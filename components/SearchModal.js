import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';

import {
    Container,
    Header,
    Button,
    Icon,
    Item,
    Input
} from 'native-base';

export default class SearchModal extends React.Component {

    constructor(props) {
        super(props);

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);

        this.state = {
            modalToggle: false,
            searchText: ''
        };
    }

    render() {

        const {searchText, modalToggle} = this.state;
        return (
            <TouchableOpacity>
                <View>
                    <Icon name='search' onPress={this.handleOpenModal} style={{
                        fontSize: 16
                    }}/>
                    <Modal animationType='none' transparent={true} visible={modalToggle} onRequestClose={() => {}}>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}>
                            <View style={{
                                width: '100%',
                                height: 20
                            }}/>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 10,
                                width: '100%',
                                height: 64,
                                backgroundColor: 'rgba(0, 0, 0, 0)',
                                borderBottomWidth: 0
                            }}>
                                <Item rounded style={{
                                    backgroundColor: 'white'
                                }}>
                                    <Icon name='search' style={{
                                        fontSize: 16
                                    }}/>
                                    <Input autoFocus placeholder={this.props.placeholder} defaultValue={searchText} onEndEditing={this.handleSearch}/>
                                    <Icon name='close' onPress={this.handleClear} style={{
                                        fontSize: 16
                                    }}/>
                                </Item>
                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableOpacity>
        );
    }

    handleOpenModal() {
        this.setState({
            modalToggle: !this.state.modalToggle
        })
    }

    handleSearch(e) {
        this.setState({
            searchText: e.nativeEvent.text,
            modalToggle: !this.state.modalToggle
        },()=>this.props.passbackSearchText(this.state.searchText))
        
    }

    handleClear() {
        this.setState({
            searchText: '',
            modalToggle: !this.state.modalToggle
        })
    }
}
