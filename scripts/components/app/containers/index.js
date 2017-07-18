import connect from "fluxthis";
import todoStore from "../../../flux/store";
import App from "../index";

const stores = [todoStore];

export default connect(stores)()(App);
