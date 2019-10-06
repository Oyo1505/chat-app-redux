import React from 'react';
import {connect} from 'react-redux';
import AsideUsers from './aside-users';

 class ChatApp extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="chat-app" data-test='ChatAppComponent'>
				
				<AsideUsers />

			</div>
		);
	}
}
export default ChatApp;