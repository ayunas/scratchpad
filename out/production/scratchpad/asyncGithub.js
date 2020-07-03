
async function wrapper() {

    async function getData(url) {
      const res = await fetch('https://api.github.com/orgs/tekcamp/repos');
      const data = await res.json();
      console.log(data);
      return data;
    }
    
    const apiURL = 'https://api.github.com/orgs/tekcamp/repos';
    
    const githubData = await getData(apiURL);
    
    console.log(githubData);
    
    console.log("This is coming after the fetch!!!!");
    
}
    
    wrapper();




  // fetch('https://api.github.com/users/ayunas/repos')
  // .then(response => {
  //   if (response.ok) {
  //     return response.json()
  //   } else {
  //     return Promise.reject('something went wrong!')
  //   }
  // })
  // .then(data => console.log('data is', data))
  // .catch(error => console.log('error is', error));