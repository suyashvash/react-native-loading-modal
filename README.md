![Logo](https://res.cloudinary.com/practicaldev/image/fetch/s--8CEpKqFD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mcxxxssx71v3s531jxop.png)

# React Native Loading modal

Platform - iOS + Android 

This module provides a simple loading modal for React native apps.
A Loading modal is an modal with Activity indicator used while perfroming some process and to restrict user while it happends


## Installation

```cd
npm i react-native-loading-modal
```

## How to use

Import the modal using 

```js
import { LoadingModal } from "react-native-loading-modal";

```

Then in your render method

```js
<LoadingModal modalVisible={true} />
```

This will make your modal visible by default,
In order to control the Modal visibilty use React State in `modalVisible` prop.



## Props

| Name          | Description |
| --------------| ----------- |
| modalVisible  | Toggles the visibilty of modal       |
| color         | Color of Activity indicator        |
| task          | Custom label to show with Activity indicator        |
| title         | Custom text to show with Loading...        |


## Found a Bug ?
Create an Issue and we will try to fix it

## Contribution
I am constantly trying to add more types of modal and modal usage in it.
if you want to contribute, I would love to work with you ❤️
