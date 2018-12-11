import React, { Component } from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import UserIcon from '@material-ui/icons/People'
import AlbumIcon from '@material-ui/icons/Album'
import AudioIcon from '@material-ui/icons/Audiotrack'

const menu = [
	{
		label: 'Исполнители',
		link: '/artists',
		icon: UserIcon
	},
	{
		label: 'Альбомы',
		link: '/albums',
		icon: AlbumIcon
	},
	{
		label: 'Треки',
		link: '/tracks',
		icon: AudioIcon
	}
]

interface P {
	open: boolean,
	onClose(e: React.SyntheticEvent<HTMLElement>): void,
	history: {
		push: any
	}
}

class Sidebar extends Component<P & RouteComponentProps> {

	handleClick = (e: React.SyntheticEvent<HTMLElement>, link: string) => {
		this.props.history.push(link)
		this.props.onClose(e)
	}

	render() {
		const { open, onClose } = this.props

		return (
			<Drawer 
				anchor="left"
				open={open}
				onClose={onClose}
			>
				<List>
					{ menu.map((item, idx) => (
						<ListItem button key={idx} onClick={(e) => this.handleClick(e, item.link)}>
							<ListItemIcon>
								{ React.createElement(item.icon) }
							</ListItemIcon>
							<ListItemText primary={item.label} />
						</ListItem>
					))}
				</List>
			</Drawer>
		)
	}
}

export default withRouter(Sidebar)