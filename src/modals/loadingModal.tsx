import React from 'react';
import { View, Modal, StyleSheet, Text, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

interface Props {
    /**
     * Toggles the visibilty of modal 
     * @param bool modalVisible
    */
    modalVisible: boolean;

    /**
     * Color of Activity Indicator (loading circle)
     * @param string color
    */
    color: string;

    /**
     * Text to display with the loading circle
     * @param string task
    */
    task: string;


    /**
     * Text to display with the  Loading....
     * @param string title
    */
    title: string;


    /**
     * Font family of the loading text ( task or label )
     * @param string fontFamily
    */
    fontFamily: string;

    /**
     * Dark mode of the loading modal, default is false
     * @param boolean darkMode
    */
   darkMode: boolean;

   /**
     * Style of the loading modal container
     * @param string fontFamily
    */
   modalStyle: StyleProp<ViewStyle>;

    /**
     * Style of the loading modal Text
     * @param string fontFamily
    */
    textStyle: object;

}

export default function LoadingModal(props:Props) {


    
    return (
        <Modal 
            animationType="fade"
            transparent={true}
            visible={props.modalVisible}
            statusBarTranslucent={true}>
                
            <View style={styles.centeredView}>
                <View style={[styles.modalView ,props.modalStyle, props.darkMode && {backgroundColor:'#121212'}]}>
                    <ActivityIndicator size="large" color={props.color} />
                    {props.task ?
                        <Text style={[styles.modalText,props.fontFamily && {fontFamily:props.fontFamily}]}>{props.task}</Text>
                        :
                        <Text style={[styles.modalText,props.fontFamily && {fontFamily:props.fontFamily},props.darkMode && {color:'white'} ,props.textStyle]}>{props.title} Loading..</Text>
                    }
                </View>
            </View>
        </Modal>
    )
}

LoadingModal.defaultProps = {
    modalVisible: false,
    darkMode: false,
    
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