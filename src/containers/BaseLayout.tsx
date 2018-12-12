import { connect } from 'react-redux';
import Base from '../layouts/Base';

const mapStateToProps = (state: any) => ({
  title: state.layout.pageTitle
});

export default connect(mapStateToProps)(Base);
