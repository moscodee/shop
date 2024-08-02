import { connect } from "react-redux";

export const myCard = (props) => {
  return <div>myCard</div>;
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(myCard);
