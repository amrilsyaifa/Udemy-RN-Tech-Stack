import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
 
 
class LibraryList extends Component {
    
    renderItem(library) {
        return <ListItem library={library} />;
    }
    render() {
       return (
           <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={(library) => library.id.toString()}
           />
       );
    }
}
 
const mapStateToProps = state => {
    return { libraries: state.libraries };
};
 
export default connect(mapStateToProps)(LibraryList); 

//membuat variabel mapStateToProps yang di ambil dari data state global yang di defenisikan reducer/index.js dengan nama variabel libraries di pasingkan kedalam variabel libraries
// kemudian libraries di panggil di dalam data={this.props.libraries}
//renderItem mengambil data dari renderItem yang data di ambil dari ListItem
//data yang ada di ListItem di pasingkan ke dalam library yang kemudian di pakai untuk KeyExtractor