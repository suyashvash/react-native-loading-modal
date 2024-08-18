import React from 'react';
import { View, Modal, StyleSheet, Text, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { LoadingModalProps } from '.';


export default function LoadingModal({
    title ='Loading...',
    modalVisible = false,
    darkMode = false,
    color = 'blue',
    fontFamily,
    modalStyle,
    textStyle
}: LoadingModalProps) {



    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            statusBarTranslucent={true}>

            <View style={styles.centeredView}>
                <View style={[styles.modalView, darkMode && { backgroundColor: '#121212' }, modalStyle]}>
                    <ActivityIndicator size="large" color={color} />
                    <Text style={[styles.modalText, fontFamily && { fontFamily: fontFamily }, darkMode && { color: 'white' }, textStyle]}>{title}</Text>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0008'

    },
    modalView: {
        margin: 20,
        width: 200,
        height: 70,
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },

    modalText: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 17,
        marginLeft: 15,
    }
});
