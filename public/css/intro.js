import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 150 * vh,
        "fontFamily": "'Ek Mukta', sans-serif",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "height": 150 * vh,
        "fontFamily": "'Ek Mukta', sans-serif",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "intro": {
        "marginTop": -20,
        "backgroundColor": "rgb(22, 26, 24)",
        "height": 100 * vh
    },
    "container": {
        "position": "relative",
        "display": "block",
        "top": 25,
        "width": "85%",
        "height": "65%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "container h1": {
        "fontFamily": "'Bubblegum Sans', sans-serif",
        "color": "rgb(170, 170, 170)",
        "textAlign": "center",
        "fontSize": 46,
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 25,
        "marginLeft": 20
    },
    "container h2": {
        "fontFamily": "'Bubblegum Sans', sans-serif",
        "color": "rgb(170, 170, 170)",
        "textAlign": "left",
        "fontSize": 30,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "character-box": {
        "width": "100%",
        "height": "50%",
        "backgroundColor": "rgb(22, 26, 24)",
        "float": "left"
    },
    "image-box": {
        "width": "100%",
        "height": "100%",
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "float": "left"
    },
    "character-img-box": {
        "textAlign": "center",
        "height": "70%",
        "width": "31%",
        "float": "left",
        "marginTop": "1%",
        "marginRight": "1%",
        "marginBottom": "1%",
        "marginLeft": "1%",
        "backgroundColor": "rgba(90,90,90,0.2)",
        "borderRadius": 5,
        "cursor": "pointer",
        "transition": "0.6s"
    },
    "character-img-box:hover": {
        "backgroundColor": "rgba(90,90,90,0.6)"
    },
    "character-img-box:hover img": {
        "opacity": 1
    },
    "class-title": {
        "display": "inline-block",
        "marginLeft": "1%",
        "width": "32%",
        "height": "12%"
    },
    "class-title p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 26,
        "fontFamily": "shojumaru",
        "color": "white"
    },
    "description-box": {
        "width": "100%",
        "height": "15%",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "float": "left",
        "borderRadius": 10,
        "background": "linear-gradient(to bottom right, rgba(255, 0, 0, 0.6), rgba(255, 255, 0, 0.8))"
    },
    "character-description-box": {
        "display": "inline-block",
        "marginLeft": "1%",
        "width": "32%",
        "height": "90%",
        "textAlign": "left"
    },
    "character-description-box p": {
        "display": "inline-block",
        "position": "relative",
        "bottom": 50,
        "fontSize": 26,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "Bubblegum Sans",
        "color": "white"
    },
    "start-button": {
        "position": "absolute",
        "bottom": -240,
        "left": "20%",
        "height": "15%",
        "width": "60%",
        "textAlign": "center",
        "lineHeight": 100
    },
    "button": {
        "textAlign": "center",
        "textDecoration": "none",
        "color": "#333333",
        "paddingTop": 15,
        "paddingRight": 50,
        "paddingBottom": 15,
        "paddingLeft": 50,
        "fontSize": 32,
        "fontFamily": "Bubblegum Sans",
        "borderRadius": 10,
        "borderTop": "1px solid #CCCCCC",
        "borderRight": "1px solid #333333",
        "borderBottom": "1px solid #333333",
        "borderLeft": "1px solid #CCCCCC",
        "cursor": "pointer",
        "background": "linear-gradient(to bottom right, red, yellow)",
        "float": "right"
    },
    "input_name": {
        "position": "absolute",
        "top": "22%",
        "left": "32%",
        "height": "40%",
        "width": "32%",
        "fontSize": 26,
        "fontFamily": "Bubblegum Sans",
        "textAlign": "center"
    },
    "label": {
        "position": "absolute",
        "top": "-80%",
        "left": "40%",
        "fontSize": 36,
        "color": "white",
        "fontFamily": "Bubblegum Sans"
    }
});