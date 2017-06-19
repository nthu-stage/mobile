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
                        <Container style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)'
                        }}>
                            <Header searchBar rounded style={{
                                backgroundColor: 'transparent',
                                borderBottomWidth: 0
                            }}>
                                <Item style={{
                                    backgroundColor: 'white'
                                }}>
                                    <Icon name='search'/>
                                    <Input autoFocus placeholder='Search' defaultValue={searchText} onEndEditing={this.handleSearch}/>
                                    <Icon name='close' onPress={this.handleClear}/>
                                </Item>
                            </Header>
                        </Container>
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
        })
        this.props.passbackSearchText(e.nativeEvent.text);
    }

    handleClear() {
        this.setState({
            searchText: '',
            modalToggle: !this.state.modalToggle
        })
    }
}
