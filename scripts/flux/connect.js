import React from "react";
import _ from "underscore";

const alwaysReturnEmptyState = function() {
  return {};
};

const connect = stores => (
  mapStateToProps,
  mapDispatchToProps
) => WrappedComponent => {
  return React.createClass({
    displayName: _.uniqueId(`connect__${WrappedComponent.displayName}__`),

    mixins: _.compact(_.pluck(stores, "mixin")),

    getStateFromStores: alwaysReturnEmptyState,

    render() {
      return (
        <WrappedComponent
          {...mapStateToProps(...stores)}
          {...mapDispatchToProps(this.props)}
          {...this.props}
        />
      );
    }
  });
};

export default connect;
