import {Col, Row, TabPane} from "reactstrap";
import React from "react";
import CallApi from "../../../api/api";

class MovieVideos extends React.Component {
  constructor() {
    super();
    this.state = {
      keys: [],
    }
  }

  componentDidMount() {
    CallApi.get(`/movie/${this.props.id}/videos`).then(data => {
      const keys = data.results.map((item) => item.key);
      this.setState({keys});
    })
  }

  render() {
    return (
      <Row>
          {
            this.state.keys && this.state.keys.map((key) => {
              console.log('test');
              return (
                <Col sm={{ size: 'auto' }}>
                  <iframe
                    id="ytplayer"
                    type="text/html"
                    width="320"
                    height="180"
                    src={`https://www.youtube.com/embed/${key}`}
                    frameBorder="0" allowFullScreen
                  />
                </Col>
              )
            })
          }
      </Row>
    )
  }
}

export default MovieVideos;
