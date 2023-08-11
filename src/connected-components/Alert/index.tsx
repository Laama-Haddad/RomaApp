import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components/native';
import {closeGlobalAlert} from './actions';
import {RootState} from '../../redux/store';
import {AlertProps, AlertState} from '../../resources/interfaces/alert';

const Container = styled.View`
  padding-horizontal: 10px;
  padding-vertical: 5px;
  border-radius: 10px;
  width: 90%;
  right: 5%;
  position: absolute;
  bottom: 20px;
  background-color: ${({theme}) => `${theme.alert.backgroundPrimary}D1`};
  elevation: 5;
`;

const Label = styled.Text`
  color: ${({theme}) => theme.alert.textPrimary};
  font-size: ${({theme}) => theme.text.s9}px;
  text-align: center;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.alert.textPrimary};
  font-size: ${({theme}) => theme.text.s7}px;
  font-weight: bold;
  text-align: center;
`;

const GlobalAlert = ({alert}: AlertProps) => {
  const {message, title, isVisible} = alert;

  useEffect(() => {
    if (isVisible) {
      setTimeout(closeGlobalAlert, 2000);
    }
  }, [isVisible]);

  return (
    <React.Fragment>
      {isVisible && (
        <Container>
          <Title>{title}</Title>
          <Label>{message}</Label>
        </Container>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootState) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, null)(GlobalAlert);
