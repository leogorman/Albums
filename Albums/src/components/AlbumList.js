import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
	//Load in data here, lifecycle method is automatically run when class is used
	componentWillMount(){
		console.log('here');
		//http request to api retrieving json list of albums
		axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => console.log('response: ' + response));	
	}

	render() {
		return (
		<View>
			<Text>Album List</Text>
		</View>
		);
	}
};

export default AlbumList;