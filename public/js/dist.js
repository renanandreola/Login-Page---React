ReactDOM.render( /*#__PURE__*/React.createElement(MeuComponentePrincipal, null), document.getElementById('app'));

function MeuComponentePrincipal() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ComponenteForm, null)));
} // function ComponenteLeft({messageTitleLeft}) {
//     return (
//         <div className="componenteLeft" style={{width: '50%'}}>
//             <h2 className="Title4" style={{textAlign: 'center' }}>{messageTitleLeft}</h2>
//             <p style={{textAlign: 'center' }}>Info 1</p>
//             <p style={{textAlign: 'center' }}>Info 2</p>
//             <p style={{textAlign: 'center' }}>Info 3</p>
//         </div>
//     )
// }
// function ComponenteRight() {
//     return (
//         <div id="right" style={ { width: '50%' } } >
//             <ComponenteRight2 message={"Olá, estou na direita!"} 
//                               message2={"Olá, estou na direita 2!"}
//                               message3={"Olá, estou na direita 3!"}/>
//         </div>
//     )
// }
// function ComponenteRight2({message, message2, message3}) {
//     return (
//         <div>
//             <h2 style={{textAlign: 'center' }}>Título teste</h2>
//             <p style={{textAlign: 'center'}}>{message}</p> 
//             <p style={{textAlign: 'center'}}>{message2}</p>
//             <p style={{textAlign: 'center'}}>{message3}</p>
//         </div>
//     )
// }


function ComponenteForm() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '320px',
      backgroundColor: 'rgb(130 122 241)',
      borderRadius: '20px',
      marginTop: '5%',
      width: '50%',
      marginLeft: '25%',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(ComponenteFormLeft, null), /*#__PURE__*/React.createElement(ComponenteFormRight, null));
}

function ComponenteFormLeft() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '50%',
      borderRight: '1px solid black',
      paddingTop: '80px'
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      textAlign: 'center',
      color: 'white'
    }
  }, "Ol\xE1, seja bem vindo a nossa comunidade!"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'white'
    }
  }, "Entre com sua conta."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    style: {
      height: '120px',
      width: '150px'
    },
    src: "https://cdn2.unrealengine.com/Diesel%2Flogo%2FLogo_EpicGames_Black-1360x1360-f15ee5845c95eacd424199bdf326047631b4bc69.png"
  }))));
}

function ComponenteFormRight() {
  return /*#__PURE__*/React.createElement("form", {
    style: {
      width: '50%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: '80px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'white',
      marginLeft: '45px'
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    id: "email",
    style: {
      borderRadius: '7px',
      width: '70%',
      marginLeft: '45px',
      border: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      color: 'white',
      marginLeft: '45px'
    }
  }, "Senha"), /*#__PURE__*/React.createElement("input", {
    id: "password",
    style: {
      borderRadius: '7px',
      width: '70%',
      marginLeft: '45px',
      border: 'none'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => validateForm(),
    style: {
      border: 'none',
      borderRadius: '7px',
      width: '25%'
    }
  }, "Entrar")));
}

function validateForm() {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === '') {
    alert('Preencha seu email!');
  }

  if (password === '') {
    alert('Preencha sua senha');
    return;
  } else {
    alert('Sucesso');
    email.value('');
    password.value('');
    return;
  }
}
