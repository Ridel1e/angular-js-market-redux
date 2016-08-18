/**
 * Created by ridel1e on 16/08/16.
 */

class TopNavController {

  isActiveState(state) {
    return this.currentState.name.substring(0, this.currentState.name.indexOf('.'))
      === state.substring(0, state.indexOf('.'));
  }
}

export default TopNavController;