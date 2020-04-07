function configure() {
    let userPoolid = '';
    let appClientId = '';
    let region = '';
    let hostedDomain = '';

    aws_amplify.Auth.configure({
        oauth: {
            domain: hostedDomain,
            scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
            redirectSignIn: 'http://localhost/signin.html',
            redirectSignOut: 'http://localhost/index.html',
            responseType: 'code'
        },
        region: region, 
        userPoolId: userPoolid,
        userPoolWebClientId: appClientId
    });
}


export { configure }