import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      selected: 'All',
    }
    this.projects = this.props.projects;
	 this.filters = props.filters;
  }

  onSelectFilter = (filter) => {
    if (filter === this.state.selected) {
      return
    }
    this.setState({
      selected: filter
    })
  }

  render() {
    return (
      <>
        <Toolbar
          filters={this.filters}
          selected={this.state.selected}
          onSelectFilter={item => this.onSelectFilter(item)} />
        <ProjectList
          projects={this.state.selected === 'All' ? this.projects : this.projects.filter(item => item.category === this.state.selected)}
        />
      </>
    )
  }
}
