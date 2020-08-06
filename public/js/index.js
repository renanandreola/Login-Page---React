ReactDOM.render(
    <MeuComponentePrincipal/>,
    document.getElementById('app')
)

function MeuComponentePrincipal() {
    return (
    <>
        {/* <div style={{display: 'flex'}}>
            <ComponenteLeft messageTitleLeft={"Sou um título"}/>
            <ComponenteRight/>
        </div> */}
        
        <div>
            <ComponenteForm/>
        </div>
    </>
    )
}

// function ComponenteLeft({messageTitleLeft}) {
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
    return (
        <div style={{height: '320px', 
                     backgroundColor: 'rgb(130 122 241)', 
                     borderRadius: '20px', 
                     marginTop: '5%', 
                     width: '50%', 
                     marginLeft: '25%',
                     display: 'inline-flex'}}>
            <ComponenteFormLeft/>
            <ComponenteFormRight/>
        </div>
    )
}

function ComponenteFormLeft() {
    return (
        <>
            <div style={{width: '50%', 
                borderRight: '1px solid black', 
                paddingTop: '80px'}}>

                <h4 style={{textAlign: 'center', 
                            color: 'white'}}>Olá, seja bem vindo a nossa comunidade!</h4>
                <p style={{textAlign: 'center', 
                        color: 'white'}}>Entre com sua conta.</p>

                <div style={{textAlign: 'center'}}>
                    <img style={{height: '120px', width: '150px'}} src="https://cdn2.unrealengine.com/Diesel%2Flogo%2FLogo_EpicGames_Black-1360x1360-f15ee5845c95eacd424199bdf326047631b4bc69.png"></img>
                </div>
            </div>
        </>
    )
}

function ComponenteFormRight() {
    return (
        <form style={{width: '50%'}}>
            <div style={{display: 'flex', 
                         flexDirection: 'column', 
                         paddingTop: '80px'}}>

                <label style={{color: 'white', 
                               marginLeft: '45px'}}>Email
                </label>

                <input 
                id="email"
                style={{borderRadius: '7px', 
                               width: '70%', 
                               marginLeft: '45px', 
                               border: 'none'}}>
                </input>
            </div>
            <div style={{display: 'flex', 
                         flexDirection: 'column'}}>

                <label style={{color: 'white', 
                               marginLeft: '45px'}}>Senha
                </label>

                <input 
                id="password"
                style={{borderRadius: '7px', 
                               width: '70%', 
                               marginLeft: '45px', 
                               border: 'none'}}>
                </input>
            </div>

            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <button
                onClick={() => validateForm()}
                style={{border: 'none',
                                borderRadius: '7px',
                                width: '25%'}}>Entrar</button>
            </div>
        </form>
    )
}

function validateForm() {

    event.preventDefault();

    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    if(email === ''){
        alert('Preencha seu email!')
    }

    if(password === ''){
        alert('Preencha sua senha')
        return
    }

    else{
        alert('Sucesso')
        return
    }
}

