import './App.css';
import Messanger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {

  const clientId='467313230550-o4mvlh7j2gnaob6h0ij03b13q8knkrpr.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messanger />
    </GoogleOAuthProvider>
  );
}

export default App;
