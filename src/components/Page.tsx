import React, { Component } from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CHANGE_PAGE_TITLE } from '../constants/actionTypes';

interface P {
	changeTitle(title: string): void,
	title: string
}
class Page extends Component<P, {}> {
	componentDidMount() {
		const { title, changeTitle } = this.props
		changeTitle(title)
	}
	render() {
		return this.props.children
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
	changeTitle: (title: string) => dispatch({
		type: CHANGE_PAGE_TITLE,
		payload: title
	})
})

export default connect(null, mapDispatchToProps)(Page)