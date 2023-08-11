import { StyleProp } from 'react-native';

export interface DropDownListProps {
    placeHolder?:string;
    label?:string;
    value?:string;
    required?:boolean;
    list:any[];
    titleKey?:string;
    valueKey?:string;
    onValueChange?:(itemValue:string, itemIndex:number)=>void;
    disabled?:boolean;
    labelStyle?:StyleProp<any> | StyleProp<any>[];
    dropDownListContainerStyle?: StyleProp<any> | StyleProp<any>[];
    containerStyle?: StyleProp<any> | StyleProp<any>[];
}
