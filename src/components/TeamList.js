import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query listTeamMembers {
        members {
          listTeamMembers {
            items {
              id
              name
              image
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        {data.members.listTeamMembers.items.map((member, i) => (
          <div key={i}>
            <h2>{member.name}</h2>
            <img src={member.image} />
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    )}
  />
)
