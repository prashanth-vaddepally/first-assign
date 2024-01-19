const UserProfile = props => {
  const {userDetails, deleting} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = userDetails
  const oneFunction = () => {
    deleting(id)
  }

  return (
    <li className="single">
      <h1>{timeAccessed}</h1>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button data-testid="delete" onClick={oneFunction} type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default UserProfile
