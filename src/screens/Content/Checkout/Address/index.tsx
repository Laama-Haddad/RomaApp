import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components/native";
import { AddressProps } from "../../../../resources/interfaces/screens/address";
import { tr } from "../../../../resources/translations";
import { addresses } from "../../../../resources/static/location";
import { hdp, wdp } from "../../../../utils/responsive";
import TextGeneric from "../../../../components/TextGeneric";
import { FlatList } from "react-native";
import TextInput from "../../../../components/TextInput";
import GenericButton from "../../../../components/Button";
import Icon from "../../../../components/Icon";

const Container = styled.View`
    background-color:${({theme}) => theme.address.background};
    align-items:center;
`;
const AddressContainer = styled.TouchableOpacity`
    width:${wdp(80)}px;
    height:${hdp(20)}px;
    border-radius:12px;
    background-color:${({theme}) => theme.address.addressBackground};
    margin-horizontal: 7px;
    margin-vertical:5%;
    padding-horizontal:2%;
  
`;
const AddressTitle = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s7}px;
    color:${({theme}) => theme.address.addressTitle};
    font-family:${({theme}) => theme.fonts.semi_bold};
    text-align:center;
    margin-vertical:7%;
`;
const AddressDetails = styled(TextGeneric)`
    font-size:${({theme}) => theme.text.s8}px;
    color:${({theme}) => theme.address.addressDetails};
    font-family:${({theme}) => theme.fonts.semi_bold};
    margin-vertical:1%;
`;
const NewAddressContainer = styled.View`
    width:${wdp(90)}px;
    border-radius:12px;
    background-color:${({theme}) => theme.address.addressBackground};
    padding-horizontal:5%;
    padding-vertical:7%;
`;
const mandatoryFields = ['recipient', 'telephone', 'address'];
const Address = ({onToggleStep}: AddressProps) => {
    const theme = useTheme();
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
    const [addressList, setAddressList] = useState(addresses);
    useEffect(() => {
        !!onToggleStep && onToggleStep({headerTitle: tr('address.headerTitle')})
    }, [])
    const [form, updateForm] = useState({
        recipient: '', telephone: '', address: ''
    });
    const [formComplete, setFormComplete] = useState(false);

    const handleChange = (key, value) => {
        updateForm({
            ...form, [key]: value,
        });
    };
    useEffect(() => {
        let _formComplete = true;
        for (let index = 0; index < mandatoryFields.length; index++) {
            const field = mandatoryFields[index];
            if (!form[field] || form[field].length <= 0) {
                setFormComplete(false);
                _formComplete = false;
                break;
            }
        }
        if (_formComplete) setFormComplete(true);
    }, [form]);
    const addAddress = async () => {
        let newAddressList = addressList;
        let newAddress = {
            id: newAddressList.length - 1,
            recipient: form.recipient,
            telephone: form.telephone,
            title: 'New Title',
            street: '1 Bishop Dr # 300. San',
            city: 'CA, California',
            area: form.address
        }
        newAddressList.push(newAddress);
        setAddressList(newAddressList);
    };
    const renderItem = ({item, index}) => {
        return (
            <AddressContainer onPress={() => setSelectedAddressIndex(index)}>
                {index === selectedAddressIndex &&
                    <Icon name={'check'} type={'SVG'} color={theme.address.check} size={theme.text.s8} style={{
                        position: 'absolute', right: 10, top: 10,
                    }}/>}
                <AddressTitle>{item.title}</AddressTitle>
                <AddressDetails>{item.street}</AddressDetails>
                <AddressDetails>{item.area},{item.city}</AddressDetails>
            </AddressContainer>
        );
    }
    const renderNewAddress = () => {
        return (
            <NewAddressContainer>
                <TextInput placeholder={tr('address.recipientPlaceHolder')}
                           placeholderTextColor={theme.address.inputPlaceHolder}
                           value={form.recipient}
                           onChangeText={text => handleChange('recipient', text)}
                />
                <TextInput placeholder={tr('address.telephonePlaceHolder')}
                           placeholderTextColor={theme.address.inputPlaceHolder}
                           value={form.telephone}
                           onChangeText={text => handleChange('telephone', text)}
                           containerStyle={{marginTop: '5%', marginBottom: '5%'}}
                />
                <TextInput placeholder={tr('address.addressPlaceHolder')}
                           placeholderTextColor={theme.address.inputPlaceHolder}
                           value={form.address}
                           onChangeText={text => handleChange('address', text)}
                           inputStyle={{color: theme.address.inputText}}
                           showRightIcon={true}
                           rightIconType={'Octicons'}
                           rightIconName={'globe'}
                           rightIconColor={theme.address.inputIcon}
                           rightIconSize={theme.text.s5}
                />
                <GenericButton title={tr('address.addButtonTitle')}
                               titleStyle={{color: theme.address.buttonTitle}}
                               disabled={!formComplete}
                               onPress={() => formComplete && addAddress()}
                               containerStyle={{
                                   width: wdp(80),
                                   backgroundColor: theme.address.buttonBackground,
                                   marginTop: '7%'
                               }}/>
            </NewAddressContainer>

        )
    }
    return (<Container>
            <FlatList horizontal pagingEnabled
                      decelerationRate={0}
                      showsHorizontalScrollIndicator={false}
                      disableIntervalMomentum={true}
                      snapToInterval={wdp(80)}
                      data={addressList} renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
            />
            {renderNewAddress()}
        </Container>
    );
}
export default Address;
