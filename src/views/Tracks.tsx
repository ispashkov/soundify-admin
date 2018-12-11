import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CHANGE_PAGE_TITLE } from '../constants/actionTypes';

interface P {
	changeTitle(): void
}
class Tracks extends Component<P, {}> {
	componentDidMount() {
		this.props.changeTitle()
	}
	render() {
		return (
			<div>Tracks View</div>
		)
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeTitle: () => dispatch({
		type: CHANGE_PAGE_TITLE,
		payload: "Tracks"
	})
})

export default connect(null, mapDispatchToProps)(Tracks)