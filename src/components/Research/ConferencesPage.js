import React, { Component } from 'react'
import Footer from "../homePage/Footer";
import "./ConferencesPage.css";
export class ConferencesPage extends Component {
  render() {
    return (
      <div>
        <main>
        <h1 className="place-holder-nav-bar">Welcome to Research lab IITH</h1>
        <center><h3 className="mb-3 mt-5">Conference Deadlines</h3></center>
        <table class="table">
          <thead>
            <th>Conference</th>
            <th>Abstract Date</th>
            <th>Submission Date</th>
            <th>Notification Date</th>
            <th>Event Date</th>
            <th>Location</th>
            <th>Core Rank</th>
          </thead>
          <tbody>
            <tr>
              <td data-label="Conference">1</td>
              <td data-label="Abstract Date">Dinesh</td>
              <td data-label="Submission Date">34</td>
              <td data-label="Notification Date">50%</td>
              <td data-label="Event Date">Passed</td>
              <td data-label="Location">50%</td>
              <td data-label="Core Rank">Passed</td>
            </tr>

            <tr>
              <td data-label="Conference">2</td>
              <td data-label="Abstract Date">Kamal</td>
              <td data-label="Submission Date">23</td>
              <td data-label="Notification Date">70%</td>
              <td data-label="Event Date">Passed</td>
              <td data-label="Location">50%</td>
              <td data-label="Core Rank">Passed</td>
            </tr>

            <tr>
              <td data-label="Conference">3</td>
              <td data-label="Abstract Date">Neha</td>
              <td data-label="Submission Date">20</td>
              <td data-label="Notification Date">90%</td>
              <td data-label="Event Date">Passed</td>
              <td data-label="Location">50%</td>
              <td data-label="Core Rank">Passed</td>
            </tr>

            <tr>
              <td data-label="Conference">4</td>
              <td data-label="Abstract Date">Priya</td>
              <td data-label="Submission Date">30</td>
              <td data-label="Notification Date">30%</td>
              <td data-label="Event Date">Failed</td>
              <td data-label="Location">50%</td>
              <td data-label="Core Rank">Passed</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
      </div>
    )
  }
}

export default ConferencesPage