

import Error404 from '../components/errors/Error404';
const Error500 = () =>{
  return<>500</>
}

const  Error = ({ statusCode })=> {
  const logStatusCode = {
    404: <Error404/>,
    500: <Error500/>
  };
    return (
      <p>
       aaaaa {logStatusCode[statusCode]}  <br/>
        status code {statusCode}
        

        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
  
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
  Error.layout = "ErrorLayout";
  export default Error