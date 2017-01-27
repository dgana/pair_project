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
        "height": 100 * vh,
        "fontFamily": "'Ek Mukta', sans-serif",
        "overflowX": "hidden",
        "overflowY": "auto",
        "background": "url(\"../assets/background-img/img-2.jpg\")",
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
        "height": 100 * vh,
        "fontFamily": "'Ek Mukta', sans-serif",
        "overflowX": "hidden",
        "overflowY": "auto",
        "background": "url(\"../assets/background-img/img-2.jpg\")",
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "footer": {
        "position": "absolute",
        "bottom": 0,
        "height": 38 * vh,
        "width": "100%"
    },
    "rank-tree": {
        "position": "absolute",
        "left": "3%",
        "bottom": "5%",
        "width": "75%",
        "height": "100%"
    },
    "rank": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "borderTop": "1px solid rgba(100, 0, 0, 0.5)",
        "width": "24%",
        "height": "100%",
        "backgroundColor": "rgba(200,200,200,0.9)",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "float": "left",
        "textAlign": "center"
    },
    "rank-image": {
        "position": "absolute",
        "bottom": "15%",
        "left": "8%"
    },
    "split-rank img": {
        "height": "90%"
    },
    "rank-title": {
        "width": "100%",
        "height": "16%",
        "backgroundColor": "rgba(60, 60, 60,0.8)",
        "textAlign": "center"
    },
    "rank-title p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 52,
        "fontSize": 26,
        "fontFamily": "shojumaru"
    },
    "split-rank": {
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "width": "100%",
        "height": "41%",
        "borderTop": "1px solid rgba(100, 0, 0, 0.5)"
    },
    "result-box": {
        "position": "absolute",
        "right": "2%",
        "bottom": "4%",
        "width": "22%",
        "height": "100%",
        "backgroundColor": "rgba(200, 200, 200, 0.9)",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "float": "right"
    },
    "result-title": {
        "width": "100%",
        "height": "16%",
        "backgroundColor": "rgba(75, 75, 75,0.8)",
        "textAlign": "center"
    },
    "result-title p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 52,
        "fontSize": 26,
        "fontFamily": "shojumaru"
    },
    "navbar": {
        "position": "absolute",
        "right": "2%",
        "top": "2%",
        "width": "34%",
        "height": "55%",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1
    },
    "navbar-title": {
        "width": "100%",
        "height": "10%",
        "backgroundColor": "rgba(75, 75, 75,0.8)",
        "textAlign": "left",
        "paddingLeft": "2%"
    },
    "navbar-title p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 52,
        "fontSize": 26,
        "fontFamily": "shojumaru"
    },
    "navbox": {
        "width": "100%",
        "height": "90%",
        "backgroundColor": "rgba(200, 200, 200, 0.9)"
    },
    "name-box": {
        "width": "95%",
        "height": "10%",
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10,
        "paddingTop": 10,
        "textAlign": "left"
    },
    "name-box p": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 20
    },
    "name-box i": {
        "display": "inline-block",
        "fontSize": 22,
        "fontFamily": "russo one",
        "paddingLeft": 12
    },
    "text-box": {
        "width": "92%",
        "height": "60%",
        "backgroundColor": "rgb(242,242,242)",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginLeft": "2%",
        "overflow": "auto"
    },
    "text-box p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "command-button": {
        "position": "relative",
        "top": 12,
        "width": "97%",
        "height": "15%",
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "paddingLeft": "27%"
    },
    "btnfind-monster": {
        "width": "45%",
        "height": "65%"
    },
    "status-box": {
        "position": "absolute",
        "left": "3%",
        "top": "2%",
        "width": "60%",
        "height": "55%",
        "backgroundColor": "rgba(200, 200, 200, 0.9)"
    },
    "status": {
        "position": "absolute",
        "display": "inline-block",
        "width": "49%",
        "height": "90%"
    },
    "status-bar": {
        "width": "98%",
        "height": "15%",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 6
    },
    "status-bar-box": {
        "position": "relative",
        "top": -49,
        "right": 0,
        "float": "right",
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "width": "78%",
        "backgroundColor": "rgba(166, 166, 166, 0.9)",
        "height": "70%"
    },
    "present-status": {
        "float": "left",
        "width": "55%",
        "height": "95%",
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "textAlign": "center",
        "position": "relative",
        "bottom": 6
    },
    "up-status": {
        "float": "left",
        "width": "20%",
        "height": "95%",
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "textAlign": "center",
        "position": "relative",
        "bottom": 6
    },
    "limit-status": {
        "float": "left",
        "width": "20%",
        "height": "95%",
        "marginTop": 2,
        "marginRight": 2,
        "marginBottom": 2,
        "marginLeft": 2,
        "textAlign": "center",
        "position": "relative",
        "bottom": 6
    },
    "status-bar p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 26,
        "fontFamily": "russo one",
        "lineHeight": 52,
        "paddingLeft": 15
    },
    "input[type=\"text\"]": {
        "position": "relative",
        "right": "50%",
        "WebkitAppearance": "none",
        "backgroundColor": "inherit",
        "borderImageSource": "none",
        "borderImageSlice": "none",
        "borderImageWidth": "none",
        "borderImageOutset": "none",
        "borderImageRepeat": "none",
        "WebkitRtlOrdering": "none",
        "WebkitUserSelect": "none",
        "cursor": "auto",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "borderWidth": 0,
        "borderStyle": "none",
        "borderColor": "none",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 32,
        "fontFamily": "russo one",
        "lineHeight": 52,
        "textAlign": "center"
    },
    "arrow-right": {
        "position": "relative",
        "right": 10,
        "marginTop": 8,
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": 0,
        "height": 0,
        "borderTop": "15px solid transparent",
        "borderBottom": "15px solid transparent",
        "borderLeft": "15px solid green",
        "cursor": "pointer"
    },
    "arrow-right:active": {
        "right": 8
    },
    "status-description": {
        "float": "right",
        "display": "inline-block",
        "width": "49%",
        "height": "90%"
    },
    "status-title": {
        "width": "100%",
        "height": "10%",
        "backgroundColor": "rgba(60, 60, 60,0.8)",
        "textAlign": "left",
        "paddingLeft": "2%"
    },
    "status-title p": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 52,
        "fontSize": 26,
        "fontFamily": "shojumaru"
    },
    "status-command-box": {
        "position": "absolute",
        "bottom": -15,
        "width": "97%",
        "height": "15%",
        "marginTop": 20,
        "marginRight": 10,
        "marginBottom": 20,
        "marginLeft": 10,
        "paddingLeft": "46%"
    },
    "btn": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10,
        "float": "left",
        "display": "inline-block",
        "height": "50%",
        "width": "40%",
        "cursor": "pointer",
        "borderRadius": 10,
        "fontSize": 16,
        "fontFamily": "russo one",
        "background": "linear-gradient(to bottom right, rgba(255, 0, 0, 0.6), rgba(255, 255, 0, 0.8))"
    },
    "btn:focus": {
        "outline": 0
    },
    "status-description-bar-left": {
        "float": "left",
        "width": "45%",
        "height": "14%",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 6
    },
    "status-description-bar-center": {
        "position": "relative",
        "left": "20%",
        "width": "48%",
        "height": "14%",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "textAlign": "center"
    },
    "status-description-bar-right": {
        "float": "left",
        "width": "45%",
        "height": "14%",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 6
    },
    "status-description-bar-left p": {
        "display": "inline-block",
        "lineHeight": 52,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 20,
        "paddingLeft": 15
    },
    "status-description-bar-right p": {
        "display": "inline-block",
        "lineHeight": 52,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 20,
        "paddingLeft": 15
    },
    "status-description-bar-center p": {
        "display": "inline-block",
        "lineHeight": 52,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 24,
        "paddingLeft": 15,
        "fontFamily": "russo one"
    },
    "status-description-bar-center i": {
        "display": "inline-block",
        "lineHeight": 52,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 32,
        "fontFamily": "bungee shade",
        "paddingLeft": 15
    },
    "status-description-bar-left i": {
        "display": "inline-block",
        "lineHeight": 52,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 26,
        "fontFamily": "russo one",
        "paddingLeft": 15
    },
    "status-description-bar-right i": {
        "display": "inline-block",
        "lineHeight": 52,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 26,
        "fontFamily": "russo one",
        "paddingLeft": 15
    },
    "experience-bar-box": {
        "position": "relative",
        "top": "1%",
        "float": "left",
        "width": "85%",
        "height": "15%",
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 21,
        "textAlign": "center"
    },
    "experience-bar-box p": {
        "display": "inline-block",
        "fontSize": 19,
        "position": "absolute",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "left": 0,
        "top": 0,
        "fontFamily": "ek mukta"
    },
    "experience-bar-box progress": {
        "position": "absolute",
        "bottom": 20,
        "left": 0,
        "width": "100%"
    },
    "delete-status": {
        "position": "absolute",
        "background": "rgb(255, 77, 77)",
        "right": "4%",
        "height": "8%",
        "top": "11%",
        "width": "30%"
    }
});