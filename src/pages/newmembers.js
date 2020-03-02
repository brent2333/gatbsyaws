import React from "react"
import { AddMember } from "../components/AddMember"
import "../main.css"
import Layout from "../components/layout"

const NewMembers = ({ data }) => (
  <Layout>
    <div>
      <main>
        <h1>Add Yourself </h1>
        <AddMember />
      </main>
    </div>
  </Layout>
)

export default NewMembers
