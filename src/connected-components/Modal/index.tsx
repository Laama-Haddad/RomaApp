import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import {closeGlobalModal} from './actions';
import {RootState} from '../../redux/store';
import {ModalProps} from "../../resources/interfaces/connected-components/modal";
import {tr} from "../../resources/translations";
import TextGeneric from "../../components/TextGeneric";
import {getByScreenSize, wdp} from "../../utils/responsive";
import {Modal} from "react-native";
import {modalTypes} from "../../utils/enums";
import Ripple from 'react-native-material-ripple';

const Container = styled.View`
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
  position:absolute;
  background-color: ${({theme}) => theme.modal.containerBackground}
`;
const ModalView = styled.View`
  border-radius: 7px;
  width: 90%;
`;
const QuestionModalView = styled.View`
  border-radius: 7px;
  width: 90%;
  background-color:${({theme}) => theme.modal.messageBackground};
  padding-top: 7%;
`;
const TitleView = styled.View`
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  justify-content:center;
  align-items:center;
  background-color:${({theme}) => theme.modal.titleBackground};
  padding-vertical:3%;
`;
const Title = styled(TextGeneric)`
  color: ${({theme}) => theme.modal.title};
  font-size: ${({theme}) => theme.text.s6}px;
  font-family:${({theme}) => theme.fonts.semi_bold};
  text-align: center;
`;
const MessageView = styled.View`
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  justify-content:center;
  align-items:center;
  background-color:${({theme}) => theme.modal.messageBackground};
  padding-vertical:5%;

`;
const Message = styled(TextGeneric)`
  color: ${({theme}) => theme.modal.message};
  font-size: ${({theme}) => theme.text.s7}px;
  font-family:${({theme}) => theme.fonts.semi_bold};
  text-align: center;
`;

const Submit = styled.TouchableOpacity`
  justify-content:center;
  align-items:center;
  background-color:${({theme}) => theme.modal.okBackground};
  border-radius:${getByScreenSize(20, 25)}px;
  width:50%;
  height: ${getByScreenSize(40, 55)}px;
  margin-top:3%;
`;
const Ok = styled(TextGeneric)`
  color: ${({theme}) => theme.modal.okTitle};
  font-size: ${({theme}) => theme.text.s8}px;
  font-family:${({theme}) => theme.fonts.bold};
`;

const RowView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 4%;
`;

const Button = styled(Ripple)`
  width: 50%;
  padding: 2%;
  border-top-width: 1px;
  border-color: ${({theme}) => theme.modal.borderColor};
`;

const ButtonText = styled(TextGeneric)`
  font-size: ${({theme}) => theme.text.s8}px;
  font-weight: bold;
  text-align: center;
  padding-vertical: 7%;
`;

const GlobalModal = ({modal}: ModalProps) => {
    const {message, title, isVisible, type, onConfirm, onReject} = modal || {};

    const closeModal = (status: 'confirm' | 'reject' = 'confirm') => {
        if (status === 'confirm') {
            if (onConfirm) onConfirm();
            closeGlobalModal();
        } else {
            if (onReject) onReject();
            closeGlobalModal();
        }
    }
    const getContentByType = () => {
        switch (type) {
            case modalTypes.info:
                return <ModalView>
                    <TitleView>
                        <Title>
                            {title}
                        </Title>
                    </TitleView>
                    <MessageView>
                        <Message>{message}</Message>
                        <Submit onPress={() => closeModal()}>
                            <Ok>{tr('modal.ok')}</Ok>
                        </Submit>
                    </MessageView>
                </ModalView>;
            case modalTypes.question:
                return <QuestionModalView>
                    <Message style={{fontWeight: 'bold'}}>{message}</Message>
                    <RowView>
                        <Button style={{borderRightWidth: 0.5}} onPress={() => closeModal()}>
                            <ButtonText>{tr('app.yes')}</ButtonText>
                        </Button>
                        <Button style={{borderLeftWidth: 0.5}} onPress={() => closeModal('reject')}>
                            <ButtonText>{tr('app.no')}</ButtonText>
                        </Button>
                    </RowView>
                </QuestionModalView>
        }
    }
    return (<Modal visible={isVisible} transparent animated animationType={'fade'}>
        <Container>
            {getContentByType()}
        </Container>
    </Modal>);
};

const mapStateToProps = (state: RootState) => ({
    modal: state.modal,
});

export default connect(mapStateToProps, null)(GlobalModal);
