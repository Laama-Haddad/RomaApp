import React, { ReactElement } from "react";
import { StyleProp } from "react-native";

export interface ItemProps {
    id: number;
    name: string;
}

export interface RadioGroupProps {
    list: ItemProps[];
    renderItem: (ItemProps, number) => ReactElement | null;
    onValueChange?: (number) => void;
    selected?: number;
    radius?: number;
    style?: StyleProp<any> | StyleProp<any>[];
}
