// Import library helping to create a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
const Header = (props) => {
	const { textStyle, viewStyle } = styles;

    return (
    	<View style={viewStyle}>
    		<Text style={textStyle}>{props.headerText}</Text>
    	</View>
    	);
};

// Creating the style component, with attributes changing a texts style
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.3,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 30
	}
};


// Make component available to other parts of app
export default Header;  
