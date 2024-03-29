import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useCallback
  } from 'react';
  import { TouchableOpacity, Text } from 'react-native';
  import { GiftedChat } from 'react-native-gifted-chat';
  import {
    collection,
    addDoc,
    orderBy,
    query,
    onSnapshot
  } from 'firebase/firestore';
  import { auth, db } from '../../utils/firebase';
  import { useNavigation } from '@react-navigation/native';
  import { AntDesign } from '@expo/vector-icons';
  import colors from '../../../colors';



  export default function Chat() {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();
    let imagen = "https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg"
    let photoURL = auth?.currentUser?.photoURL

    useLayoutEffect(() => {

        const collectionRef = collection(db, 'chats');
        const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
        console.log('querySnapshot unsusbscribe');
          setMessages(
            querySnapshot.docs.map(doc => ({
              _id: doc.data()._id,
              createdAt: doc.data().createdAt.toDate(),
              text: doc.data().text,
              user: doc.data().user
            }))
          );
        });
    return unsubscribe;
      }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, messages)
        );
        // setMessages([...messages, ...messages]);
        const { _id, createdAt, text, user } = messages[0];    
        addDoc(collection(db, 'chats'), {
          _id,
          createdAt,
          text,
          user
        });
      }, []);

    return (
        <GiftedChat
        messages={messages}
        isTyping={false}
        placeholder={"Escribe aquí el mensaje..."}
        showAvatarForEveryMessage={true}
        showUserAvatar={true}
        onSend={messages => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: '#fff'
        }}
        textInputStyle={{
          backgroundColor: '#fff',
          borderRadius: 20,
        }}
        user={{
          _id: auth?.currentUser?.email,
          avatar: auth?.currentUser?.photoURL? photoURL : imagen,
        }}
      />
    )
  }