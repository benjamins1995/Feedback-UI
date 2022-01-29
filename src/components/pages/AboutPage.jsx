import Card from '../shared/Card';
import { Link } from 'react-router-dom';
function AboutPage() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is React app to leave feedback for the product or service</p>
      <p>Version: 1.0.1</p>

      <p>
        <Link to='/'>Back To Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
