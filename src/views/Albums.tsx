import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CHANGE_PAGE_TITLE } from '../constants/actionTypes';

interface P {
	changeTitle(): void
}
class Albums extends Component<P, {}> {
	componentDidMount() {
		this.props.changeTitle()
	}
	render() {
		return (
			<div>Albums View</div>
		)
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeTitle: () => dispatch({
		type: CHANGE_PAGE_TITLE,
		payload: "Albums"
	})
})

export default connect(null, mapDispatchToProps)(Albums)