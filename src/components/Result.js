import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
    return (
        <CSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div>
                You prefer <strong>{props.quizResult}</strong>!
                <br></br>
                <a href="https://brandpower.github.io/doggosOutta5/">
                    Back to the dogs
                </a>
            </div>
        </CSSTransitionGroup >
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired
};

export default Result;
