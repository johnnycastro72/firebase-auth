import { signInWithPopup, GoogleAuthProvider, OAuthCredential } from "firebase/auth";
import { auth } from "./firebaseConfig";

const providerGoogleAuth = new GoogleAuthProvider();

const GoogleLogIn: React.FunctionComponent = () => {

  const signInWithGoogleButton = () => {
    signInWithPopup(auth, providerGoogleAuth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential:OAuthCredential | null = GoogleAuthProvider.credentialFromResult(result);

      console.log('*** credential ****');
      
      console.log(credential);

      const token = credential!.accessToken;


      console.log('*** token ***');
      
      console.log(token);
      
      // The signed-in user info.
      //If the logged in is succesfull you will acces this part of the code where you will 
      //get a lot of information about the user that have logged in
      const user = result.user;

      console.log('*** user ***');
      

      console.log(user);
      
      // ...
    }).catch((error) => {

      //If the logged in is not succesfull yu will get to this part and with the message you can tell 
      //the user what went wrong


      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }


  return (
    <div>
      <button onClick={signInWithGoogleButton}>Log in with google</button>
    </div>
  );
};

export default GoogleLogIn;
