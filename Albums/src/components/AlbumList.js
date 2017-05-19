import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
	//inital component state
	state = { albums: [] };

	//Load in data here, lifecycle method is automatically run when class is used
	componentWillMount(){
		//http request to api retrieving json list of albums
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({albums: response.data}));	
	}

	renderAlbums(){
		return this.state.albums.map(album => <Text>{album.title}</Text>);
	}

	render() {

		return (
			<View>
				{this.renderAlbums()}
			</View>
		);
	}
};

export default AlbumList;

