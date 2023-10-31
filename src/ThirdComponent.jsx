import PropTypes from 'prop-types'
function ThirdComponent({firstName = 'jojo', lastName = 'jojo'}) {
    return (
        <div className="thirdComponent">
            <h1>Third Component</h1>
            <p>My name is {firstName} {lastName}</p>
        </div>
    )
}

ThirdComponent.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default ThirdComponent