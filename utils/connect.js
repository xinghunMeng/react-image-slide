import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'app/actions'

function mapStateToProps(props, state) {
    if (!props) return state

    if (typeof props === 'function') return props

    if (typeof props === 'string') return { [props]: state[props] }

    if (Array.isArray(props)) {
        return props.reduce((prev, curr) => prev[curr] = state[curr], {})
    }

    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default props => {
    return target => connect(mapStateToProps.bind(null, props), mapDispatchToProps)(target)
}