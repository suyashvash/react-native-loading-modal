import React from 'react';
import { StyleProp, ViewStyle,TextStyle } from 'react-native';

export interface LoadingModalProps {
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
     * Text to display with the  Loading....
     * @param string title
    */
    title?: string;


    /**
     * Font family of the loading text ( task or label )
     * @param string fontFamily
    */
    fontFamily?: string;

    /**
     * Dark mode of the loading modal, default is false
     * @param boolean darkMode
    */
    darkMode?: boolean;

    /**
      * Style of the loading modal container
      * @param string fontFamily
     */
    modalStyle?: StyleProp<ViewStyle>;

    /**
     * Style of the loading modal Text
     * @param string fontFamily
    */
    textStyle?: StyleProp<TextStyle>;


    /**
     * Size of the loading indicator
     * @param string indicatorSize
    */
    indicatorSize?: 'small' | 'large';
}

declare const LoadingModal: React.FC<LoadingModalProps>;

export default LoadingModal;
