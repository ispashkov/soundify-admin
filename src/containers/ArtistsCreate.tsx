import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import ArtistsCreate from "../views/Artists/Create";
import { createArtist } from "../store/artists/actions";
import {ApplicationState} from "../store/rootReducer";

const mapStateToProps = (state: ApplicationState) => ({
  isLoading: state.artists.isLoading
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  createArtist
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsCreate);
