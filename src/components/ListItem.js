import React, { Component } from 'react';
import { 
    Text, 
    View, 
    TouchableWithoutFeedback,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';
 
class ListItem extends Component { 
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    renderDescription() {
        const {library, expanded } = this.props

        if( expanded ) {
            return (
                <CardSection>
                    <Text style={{flex:1}}>
                        {library.item.description}
                    </Text>
                </CardSection>
                
            )
        }
    }
    render() {
        const { titleStyle } = styles;
        const{id, title} = this.props.library.item
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const styles = {
    titleStyle : {
        fontSize: 20,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id

    return { expanded }
}

 
export default connect(mapStateToProps, actions)(ListItem);

// import actions
//TouchabeWithoutFeedback menggunakan metode onpress jika di klik maka data ID akan dipasingkan ke dalam props.selectLibrary yang kemudian di export ke state global yang kemudian di panggil SelectionReducer.js

//const mapStateToProps menggunakan state untuk mengambil data state yang sudah di pasingkan ke store dengan variabel selectedLibraryId dari reducers/index.js
// kemudian di pasingkan variabel ownProps  mengambil data dari state library.item.id kemudian di masukkan ke dalam variabel expanded yang bernilai true atau false

//renderDescription menggunakan metode JSX untuk merender jika data yang di klik bernilai data dalam expanded,