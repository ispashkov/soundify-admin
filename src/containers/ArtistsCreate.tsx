import { connect } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import ArtistsCreate from "../views/Artists/Create";
import { createArtist } from "../store/artists/actions";

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  createArtist
}, dispatch);

export default connect(null, mapDispatchToProps)(ArtistsCreate);
