import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {

    const [slider, setSlider] = useState([])

    useEffect(()=> {
        getSlider()
    }, [])

    const getSlider = () => {
        GlobalApi.getSlider().then(resp => {
            console.log("resp", resp)
            setSlider(resp?.sliders)
        })
    }

    return (
        <View>
        <Text style={styles.heading}>Offers For You</Text>
        <FlatList
            data={slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <View style={{marginRight: 20}}>
                    <Image source={{uri: item?.image?.url}} style={{ ...styles.sliderImage, resizeMode: 'contain' }}/>
                </View>
            )}
        />
        </View>
    )
}


const styles = StyleSheet.create({
    heading: {
        fontSize:20,
        fontFamily: 'outfit-medium',
        marginBottom: 10
    },
    sliderImage: {
        width: 230,
        height: 150,
        borderRadius:20,
        objectFit: "contain"
    }
})