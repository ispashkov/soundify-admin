import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Page from '../components/Page';
import { CHANGE_PAGE_TITLE } from '../store/layout/types';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeTitle: (title: string) => dispatch({
    type: CHANGE_PAGE_TITLE,
    payload: title
  })
});

export default connect(null, mapDispatchToProps)(Page)
