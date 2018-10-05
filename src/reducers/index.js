import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';
 
export default combineReducers({
    libraries: LibraryReducer, 
    selectedLibraryId: SelectionReducer
});


// import file library reducer berfungsi utk mengambil data json dari file LibraryList.json
//import SelectionReducer

//disini file di export utk di pakai di file APP, dan di store ke reduce dengan file libraries, file itu akan menjadi state dan di panggil secara global di LibraryList.js 
//state.libraries dan state.selectedLibrariId di ListItem.js
