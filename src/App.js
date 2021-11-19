import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import * as actionCreator from '../src/redux/Actions/ActionCreator/GlobalAction'

function App(props) {

  useEffect(() => {
    props.globalAction()
  }, [])
  console.log("=====",props.userData)
  return (
    <div>
      hello
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
   userData:state.globalData.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    globalAction:() => dispatch(actionCreator.globalAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
