import React, { useState } from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import styles from "./AddMember.module.css"

const CREATE_MEMBER = gql`
  mutation createTeamMember(
    $name: String
    $description: String
    $image: String
  ) {
    createTeamMember(
      input: { name: $name, description: $description, image: $image }
    ) {
      name
      description
    }
  }
`
export const AddMember = () => {
  const [nameValue, setNameValue] = useState("")
  const [descValue, setDescValue] = useState("")
  const [imgValue, setImgValue] = useState("")

  return (
    <Mutation mutation={CREATE_MEMBER}>
      {(createMember, { loading, error, data }) => (
        <React.Fragment>
          <form
            className={styles.form}
            onSubmit={e => {
              e.preventDefault()
              createMember({
                variables: {
                  name: nameValue,
                  description: descValue,
                  image: imgValue,
                },
              })
            }}
          >
            <label className={styles.label}>
              Name
              <div className="line-input">
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  onChange={e => {
                    setNameValue(e.target.value)
                  }}
                />
              </div>
            </label>
            <label className={styles.label}>
              Description
              <textarea
                className={styles.textarea}
                name="description"
                onChange={e => {
                  setDescValue(e.target.value)
                }}
              />
            </label>
            <div className="upload-btn-wrapper">
              <button
                className="btn"
                onClick={e => {
                  setImgValue("https://picsum.photos/200")
                }}
              >
                Upload Your Image
              </button>
              <input type="file" name="myfile" />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
          <div>
            {loading && <p>Loading. . . </p>}
            {error && <p>error ocurred</p>}
            {data && <p>yea boi</p>}
          </div>
        </React.Fragment>
      )}
    </Mutation>
  )
}
