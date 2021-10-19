import React from 'react';
import {selectSong} from '../actions';
import SongList from './SongList';
import SongDetails from './SongDetails';
// import ReactDOM from 'react-dom';


const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList></SongList>
                </div>
                <div className="column eight wide">
                    <SongDetails></SongDetails>
                </div>
            </div>
        </div>
    );
}

export default App;