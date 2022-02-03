import PropTypes from 'prop-types'

function Button({children, type, handleBtnClick}) {

    return (
        <button onClick={handleBtnClick} className='btn' type={type}>{children}</button>
    )
}


Button.propTypes = {
    children: PropTypes.string.isRequired,
}

Button.defaultProps = {
    type: 'button',
}

export default Button
