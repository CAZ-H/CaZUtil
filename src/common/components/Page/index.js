import React, {Component} from 'react';
import classnames from 'classnames';

import './index.scss';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children, className, props} = this.props;
        const classes = classnames('page', className);

        return (
            <div className={classes} {...props}>
                {children}
            </div>
        );
    }

}

export default Page;
