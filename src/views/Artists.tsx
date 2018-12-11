import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CHANGE_PAGE_TITLE } from '../constants/actionTypes';

interface P {
	changeTitle(): void
}
class Artists extends Component<P, {}> {
	componentDidMount() {
		this.props.changeTitle()
	}
	render() {
		return (
			<div>Artists View</div>
		)
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeTitle: () => dispatch({
		type: CHANGE_PAGE_TITLE,
		payload: "Artists"
	})
})

export default connect(null, mapDispatchToProps)(Artists)