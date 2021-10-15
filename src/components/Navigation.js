import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
      </ul>

      <hr />
    </div>
  )
}

export default Navigation
