import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import {Nav, NavItem, TabContent,} from 'reactstrap';
import CallApi from '../../../api/api';
import MovieDetail from "./MovieDetail";
import MovieCredits from "./MovieCredits";
import MovieVideos from "./MovieVideos";
import MovieOverview from './MovieOverview';

export default class MoviePage extends React.Component {
  constructor() {
    super();

    this.state = {}
  }

  componentDidMount() {
    CallApi.get(`/movie/${this.props.match.params.id}`).then(data => {
      this.setState({data});
    })
  }

  render() {
    const path = this.props.match.url;
    return (
      <div className='movie-page'>
        <MovieOverview movie={this.state.data}/>
        <Nav tabs>
          <NavItem>
            <NavLink to={`${path}/details`} className="link">
              details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`${path}/videos`} className="link">
              videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`${path}/credits`} className="link">
              credits
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={1}>
          <Switch>
            <Route
              path={`${path}/details`}
              render={(props) => <MovieDetail movie={this.state.data} {...props} isActive={true} />}
            />
            <Route
              path={`${path}/videos/`}
              render={(props) => <MovieVideos id={this.props.match.params.id} {...props} isActive={true} />}
            />
            <Route
              path={`${path}/credits`}
              render={(props) => <MovieCredits id={this.props.match.params.id} {...props} isActive={true} />}
            />
          </Switch>
        </TabContent>
      </div>
    )
  }
};
