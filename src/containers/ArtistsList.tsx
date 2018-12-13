import { connect } from "react-redux";
import {Dispatch, bindActionCreators } from "redux";
import Artists from "../views/Artists/List";
import actions from "../actions/artists";

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  ...actions
}, dispatch);

export default connect(null, mapDispatchToProps)(Artists)
