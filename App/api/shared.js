import {Dimensions} from "react-native";

var totalHeight = Dimensions.get('window').height;
var totalWidth = Dimensions.get('window').width;
var aspectRatio = (totalHeight/totalWidth).toFixed(1);
var heightHeader = (aspectRatio == 2.2 ? totalHeight *.15 : totalHeight *.09);
var heightTitle = totalWidth * 0.1136;
var heightMenuSection = totalHeight - (heightHeader + heightTitle + (aspectRatio == 2.2 ? 30 : 20));

export {
    totalHeight,
    totalWidth,
    aspectRatio,
    heightHeader,
    heightTitle,
    heightMenuSection
};
