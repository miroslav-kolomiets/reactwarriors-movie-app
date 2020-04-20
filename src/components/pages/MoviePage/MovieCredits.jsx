import { Media, Container, Row } from 'reactstrap';import React from "react";
import CallApi from "../../../api/api";

class MovieCredits extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    CallApi.get(`/movie/${this.props.id}/credits`).then(data => {
      console.log(data)
      this.setState({data: data.cast});
    })
  }

  render() {
    const data = this.state.data;
    return (
      <Container className="themed-container">
        <Row xs="1" sm="2" md="4">
        {
          data && data.map((item) => {
            return (
              item.profile_path &&
                <img
                  className='actor-avatar'
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt=""
                />
            )
          })
        }
        </Row>
      </Container>
    )
  }
}

export default MovieCredits;
