import { Table } from 'reactstrap';import React from "react";

const MovieDetail = (props) => {
  const { movie } = props;
  return (
    <Table responsive>
      <tbody>
      {movie &&
      <>
        <tr>
          <th scope="row">1</th>
          <td>Budget</td>
          <td>{`${movie.budget}$`}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homepage</td>
          <td><a href={`${movie.homepage}`}>Link</a></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>budget</td>
          <td>{`${movie.budget}$`}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Original language</td>
          <td>{`${movie.original_language}`}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Release date</td>
          <td>{`${movie.release_date}`}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Revenue</td>
          <td>{`${movie.revenue}$`}</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Tagline</td>
          <td>{`${movie.tagline}`}</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>Vote average</td>
          <td>{`${movie.vote_average}`}</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Vote count</td>
          <td>{`${movie.vote_count}`}</td>
        </tr>
      </>
      }
      </tbody>
    </Table>
  )
};

export default MovieDetail;
