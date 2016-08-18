/**
 * Created by ridel1e on 16/08/16.
 */

class ContainerController {
  constructor($ngRedux, $scope, actions = null) {
    this.state = {};

    let unsubscribe = $ngRedux
      .connect(this.mapStateToThis, actions)(this.state);

    $scope.$on('$destroy', unsubscribe);   
  }
}

export default ContainerController;