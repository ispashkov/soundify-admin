import { connect } from "react-redux";
import {Dispatch, bindActionCreators } from "redux";
import ArtistsList from "../views/Artists/List";
import { fetchArtists } from "../store/artists/actions";
import {ApplicationState} from "../store/rootReducer";


const mapStateToProps = (state: ApplicationState) => ({
  artists: state.artists.items,
  isLoading: state.artists.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  fetchArtists
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsList)
