import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function Header() {
    const {user, isLoading} = useUser()

    return user && (
        
        <View style={styles.container}>
            <View style={styles.profileMainContainer}>
                <View style={styles.profileContainer}>
                    <Image 
                        source={{uri:user?.imageUrl}}
                        style={styles.userImage}
                    />
                    <View>
                        <Text style={{color:Colors.WHITE, fontFamily:'outfit'}}>Welcome</Text>
                        <Text style={{color:Colors.WHITE, fontFamily:'outfit-bold', fontSize:20}}>{user?.fullName}</Text>
                    </View>
                </View>
                <FontAwesome6 name="bookmark" size={27} color={Colors.WHITE} />
            </View>

            <View style={styles.searchBarContainer}>
                <TextInput placeholder="Search" style={styles.textInput}/>
                <FontAwesome5 name="search" size={24} color={Colors.PRIMARY} style={styles.searchBtn}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99
    },
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    searchBarContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
        marginTop: 20
    },
    textInput: {
        padding: 7,
        paddingHorizontal:16,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        width: '85%',
        fontSize: 16,
        fontFamily: 'outfit'
    },
    searchBtn: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: Colors.WHITE
    }
})