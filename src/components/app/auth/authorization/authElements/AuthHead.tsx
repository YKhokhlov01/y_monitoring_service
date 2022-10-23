interface IHead {
    head: string;
    username?: string;
  };

const AuthHead = ({head, username}:IHead) => {
    let login;
 
    if(username === 'anna'){
     login = 'Анна'
    }else if(username === 'maksim'){
     login = 'Максим' 
    } 
  return (
    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-blue-500">
      {head} {login}
    </h2> 
  )
}

export default AuthHead