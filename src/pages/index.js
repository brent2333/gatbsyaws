import React from "react"
import Layout from "../components/layout"

import TeamList from "../components/TeamList"
import "../main.css"
import { Link } from "gatsby"

const Index = ({ data }) => (
  <Layout>
    <div>
      <main>
        <h1>Insight Team Members Listing</h1>
        <Link to="/newmembers">Add Yourself to the team</Link>
        <TeamList />
      </main>
    </div>
  </Layout>
)

export default Index
