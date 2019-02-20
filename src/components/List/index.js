import React, { PureComponent } from "react";
import classnames from "classnames";

import style from "./style.scss";

class List extends PureComponent {

  render () {
    const {className, children} = this.props;
    return (
      <ul className={classnames(style.list, className)}>
        {children}
      </ul>
    ) 

  }    
}

export default List;