import React, { createContext, Component } from 'react';
import { navigate } from '@reach/router';
import FirebaseApp from '../utils/firebase';

const defaultUserState = {
    user: false,
    signOut: () => {}
}

const UserContext = createContext(defaultUserState);


class UserProvider extends Component {
    
    state = {
        user: false,
    }
    
    componentDidMount(){
        FirebaseApp.auth().onAuthStateChanged((user)=>{
            console.log(user);
            this.setState({
                user: {
                    name: user.displayName
                }
            })
        });
    }

    signOut = () =>{
        FirebaseApp.auth().signOut()
        .then(()=>[
            this.setState({
                user: false
            },()=>{
                console.log('User Signed Out')
            })
        ])
    }

    render(){
        const { children } = this.props;
        const { user } = this.state;
        return(
            <UserContext.Provider
            value={{
                user,
                signOut: this.signOut
            }}
            >
                {children}
            </UserContext.Provider>
        )
    }

}

export default UserContext;
export { UserProvider };