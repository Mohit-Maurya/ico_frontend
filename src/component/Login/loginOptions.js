import React from 'react'

function LoginOptions() {
  return (
    <div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="developer" />
            <label className="form-check-label" for="inlineCheckbox1">Developer</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="investor" />
            <label className="form-check-label" for="inlineCheckbox2">Investor</label>
        </div>
    </div>
  )
}

export default LoginOptions
