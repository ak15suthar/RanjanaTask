import './App.css';
import axios from 'axios'
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    axios.post("https://api.linkedin.com/v2/ugcPosts", {
      "author": "urn:li:person:8675309",
      "lifecycleState": "PUBLISHED",
      "specificContent": {
        "com.linkedin.ugc.ShareContent": {
          "shareCommentary": {
            "text": "Hello World! This is my first Share on LinkedIn!"
          },
          "shareMediaCategory": "NONE"
        }
      },
      "visibility": {
        "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
      }
    }).then((response) => {
      // setPost(response.data);
      console.log("res ", response);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <h1>Hello</h1>
  );
}

export default App;
