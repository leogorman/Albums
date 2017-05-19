import React, { Component } from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardItem from './CardItem';

const AlbumDetail = (props) => {
	return (
		<Card>
			<CardItem>
				<Text>{props.album.title}</Text>
			</CardItem>
			<CardItem>
				<Text>{props.album.artist}</Text>
			</CardItem>
			<CardItem>
				<Text>{props.album.url}</Text>
			</CardItem>
			<CardItem>
				<Text>{props.album.image}</Text>
			</CardItem>
			<CardItem>
				<Text>{props.album.thumbnail_image}</Text>
			</CardItem>
		</Card>
		);
};

export default AlbumDetail;