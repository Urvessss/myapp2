
import React from 'react';

const Input = ({ label, name, value, type, error, onChange }) => {
    return (
                  <div className="col-sm-6 shadow round pb-3" >
                <div className="row justify-content-sm-center pt-5">
                    <div className="mb-3">
                        <label htmlFor={name} className='from-label'>{label}</label>
                        <input type={type} className="form-control" id="email"
                            name={name}
                            onChange={onChange}
                            value={value} />
                        {error && <div className='alert alert-danger'>
                            {error}</div>}

                    </div>
                </div>
            </div>
        

        
    );
};
Input.defaultProps = {
    type: 'text'
}

export default Input;