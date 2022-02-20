import React from 'react';

const Input = ({label, name, value, error, type, onChange}) => {
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label">{label}</label>
            <input type={type}
                    className="form-control"
                    id={name}
                    name={name}
                    onChange={onChange}
                    value={ value } />
            {error && <div className="alert alert-danger">
                { error }
            </div>}
    </div>
    );
};

Input.defaultProps = {
    type : 'text'
}

export default Input;