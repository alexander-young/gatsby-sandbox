import React from "react"
export default (author) => {
  let postAuthor = author.author;
  return (
    <div className="row mb-5">
      <div className="col-sm">
        <h2>About The Author</h2>
        <div className="card">
          <div className="row no-gutters">
            <div className="col-md-3">
              <img src={postAuthor.avatar.url} alt={postAuthor.name} />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">{postAuthor.name}</h5>
                <p className="card-text">{postAuthor.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}