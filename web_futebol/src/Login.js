import './loginForm.css'

function loginForm(){
    return(
        <div className="container">
			<div className="row justify-content-center" >
				<div className="col-md-6 col-lg-4 FormContainer">
					<div className="login-wrap p-0">
		      	<h3 className="mb-4 text-center" style={{fontFamily:'Graduate', fontWeight:'bold'}}>Login</h3>
		      	<form action="#" className="signin-form">
		      		<div className="form-group">
		      			<input type="text" className="form-control FormInputs" placeholder="Username" required style={{fontFamily:'Graduate'}}></input>
		      		</div>
	            <div className="form-group">
	              <input id="password-field" type="password" className="form-control FormInputs" placeholder="Password" required style={{fontFamily:'Graduate'}}></input>
	              <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
	            </div>
	            <div className="form-group d-flex justify-content-between">
	            	<button type="submit" className="form-control btn btn-primary submit px-3 me-2" style={{fontFamily:'Graduate'}}>Sign In</button>
                    <button type="" className="form-control btn btn-primary submit px-3" style={{fontFamily:'Graduate'}}>Sign Up</button>
	            </div>
	            <div className="form-group d-flex justify-content-between">
	            	<div className="w-50 text-center">
		            	<label className="checkbox-wrap checkbox-primary" style={{ fontFamily:'Graduate' }}>Remember Me
									  <input className="form-check-input" type="checkbox" style={{ marginLeft: '5px' }}></input>
									  <span className="checkmark"></span>
									</label>
								</div>
								<div className="w-50 text-md-right text-center">
									<a href="#" style={{color: 'black',fontFamily:'Graduate',textDecoration:'underline'}}>Forgot Password</a>
								</div>
	            </div>
	          </form>
	          <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
	          <div className="social d-flex text-center">
	          	<a href="#" className="px-2 py-2 mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span> Google</a>
	          </div>
		      </div>
				</div>
			</div>
		</div>
    );
}

export default loginForm;