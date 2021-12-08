import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LoginScreen extends Component {
  state = {
      username:'',
      password:'',
  }

  loginHandler = ()=>{
      
  }


  render () {
      return(
          <div className='page'>
              <div className = 'authPanel'>
                  <div className = 'form-group'>
                      <label>Username:</label>
                      <input id='loginUsername' type = 'text'/>
                  </div>
                  <div className = 'form-group'>
                      <label>Password:</label>
                      <input id='loginUsername' type = 'text'/>
                  </div>
                  <div className = 'form-check'>
                      <input id ='loginRememberMe' className='form-check-input' type = 'checkbox'/>
                      <label className='form-check-label'>RememberMe</label>
                  </div>    
              </div>
          </div>
      )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)