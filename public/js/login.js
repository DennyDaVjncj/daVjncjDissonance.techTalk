const loginLogic=async UX=>{
  UX.preventDefault();
  console.log('tada!')

    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
      if(email&&password){
        const fetchedData=await fetch('/api/userRouts/login',{
          method:'POST',
          body:JSON.stringify({email,password}),
          headers:{'Content-Type':'application/json'},
        });
      }
      if(fetchedData.ok){
        document.location.replace('/dashboard');
      }else{
        alert(fetchedData)
      };

      const signupLogic=async UX=>{
        UX.preventDefault();

        const moniker=document.querySelector('#moniker-signup').value.trim();
        const eMail=document.querySelector('#email-signup').val.trim();
        const pw=document.querySelector('#pw-signup').val.trim();

        if(moniker&&pw){
          const fetchedData=await fetch('/api/userRouts',{
            method:'POST',
            body:JSON.stringify({eMail,pw}),
            headers:{'Content-Type':'application/json'},
          });
          if(fetchedData.ok){
            document.location.replace('/dashboard');
          }else{
            alert(fetchedData.statusText)
          }
        }
      };  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginLogic);
    
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupLogic);
    }}

    