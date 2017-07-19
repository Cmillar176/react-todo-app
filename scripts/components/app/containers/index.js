import connect from "../../../flux/connect";
import todoStore from "../../../flux/store";
import App from "../index";

const stores = [todoStore];

const mapStateToProps = function() {
  return {};
};

const mapDispatchToProps = function() {
  return {};
};

export default connect(stores)(mapStateToProps, mapDispatchToProps)(App);
