import { connect } from "react-redux";
import {Dispatch, bindActionCreators } from "redux";
import ArtistsList from "../views/Artists/List";
import { getArtists } from "../store/artists/actions";
import {ApplicationState} from "../store/rootReducer";


const mapStateToProps = (state: ApplicationState) => ({
  artists: state.artists.items
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  getArtists
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsList)
