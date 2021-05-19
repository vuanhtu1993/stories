import React from 'react';
import {isFunction} from 'lodash'

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

const withMediaQuery = (query = query) => {
  return function(Component) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          width: window.innerWidth
        }
      }
      componentDidMount() {
        window.addEventListener('resize', this.handleResize);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }
      handleResize = (param) => {
        this.setState({
          width: window.innerWidth
        })
      }
      render() {
        if (isFunction(query)) {
          const {...rest} = query(this.state)
          return <Component {...this.state} {...rest}/>
        }
        return <Component {...this.state}/>
      }
    }
  }
}

export default withMediaQuery;