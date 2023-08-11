import { NavigationProp, RouteProp } from "@react-navigation/native";

export interface CountryProps {
    id: number;
    alpha2: string;
    alpha3: string;
    name: string;
    dial_code: string;
}

export interface ChooseCountryProps {
    route: RouteProp<{ params: { onToggleCountry: ({country: CountryProps}) => void } }, 'params'>
    navigation?: NavigationProp<any>;
}
