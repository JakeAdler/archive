import React, { Component, useState, useEffect } from 'react';
import Router from 'next/router'
import styled from 'styled-components';
import Flex from '../../Flex';
import Dropdown from './Dropdown';
import localforage from 'localforage'
import { PascalCase } from '../../../../utils/pascalCase';
import { Firebase, GoogleAuthProvider } from '../../../../config/firebaseconfig';

const GoogleSignInButton = styled.img`
    max-height: 45px;
    width: auto;
    cursor: pointer;
`   
const Welcome = styled.p`
    margin-right: 10px;
`
const ProfilePic = styled.img`
    height: 45px;
    width: auto;
    border-radius: 50%;
    cursor: pointer;
`
const SignIn = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const effect = async () => {
            try {
                const userExists = await localforage.getItem('user');
                if (userExists) {
                    setUser(userExists);
                } else {
                    setUser(false);
                }
            } catch (err) {
                console.log('Error in sign in component: ' + err);
            }
        }
        effect();
        
    }, []);

    const _parseLocalData = (obj) => {
        return {
            id: obj.uid,
            displayName: obj.displayName,
            photoURL: obj.photoURL,
            email: obj.email,
        }
    };

    const _parseRemoteData = (obj) => {
        return {
            displayName: obj.displayName,
            email: obj.email,
        }
    };

    const _signIn = async () => {
        try {
            const db = Firebase.firestore();

            const signInResult = await Firebase.auth().signInWithPopup(GoogleAuthProvider);

            const localUser = _parseLocalData(signInResult.user);
            const remoteUser = _parseRemoteData(signInResult.user);
            const docRef = db.collection('users').doc(`${localUser.id}`);
            const uid = signInResult.user.uid;

            const savedLocalUser = await localforage.setItem('user', localUser);
            setUser(savedLocalUser);

            const userDoc = docRef.get();
            if (userDoc.exists) {
                console.log('User exists in DB');
            } else {
                await db.collection('users').doc(uid)
                    .set(remoteUser)
            }

        } catch(err){
            console.log('Error in SignIn function ' + err);  
        }

    }

    return(
        <div>
        {
        user ?
       <Flex>
           <Welcome>
               Welcome {PascalCase(user.displayName)}
           </Welcome>
            <Dropdown setUserStateNull={()=> setUser(null)}>
                <ProfilePic src={user.photoURL} />
            </Dropdown>
           
       </Flex>  
       :
       user === false ?
       <GoogleSignInButton src={require('../../../../assets/images/GoogleSingIn.png')} onClick={_signIn}/>
       :
       // If user is null show nothing until it is confirmed that user either exists or not
       <> </>
    }
    </div>
   )

}
export default SignIn