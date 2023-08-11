import React from 'react';
import { useTheme } from "styled-components/native";
import { HomeProps } from '../../../resources/interfaces/screens/home';
import MainLayout from '../../MainLayout';
import ScrollableTabView from '../../../components/ScrollableTabView';
import TabBar from '../../../components/TabBar';
import { homeData } from "../../../resources/static/home";
import HomeTabList from "./HomeTabList";
import { getByLanguage } from "../../../utils/langFuncs";

const Home = ({navigation}: HomeProps) => {
    const theme = useTheme();
    const navigateToHomeFilter = (tab) => (navigation?.navigate('homeFilter', {
        title: tab[getByLanguage('tabName')], types: tab[getByLanguage('productTypes')], products: tab.list
    }))
    const navigateToProductDetails = (category, details) => (navigation?.navigate('productDetails', {
        category: category, details: details
    }))
/*    const buildTab = (tab, index) => (<HomeTabList tab={tab} key={`tab_${index}`}
                                                   category={tab.category}
                                                   tabLabel={`${tab[getByLanguage('tabName')]}`}
                                                   onPressFilterIcon={({tab}) => navigateToHomeFilter(tab)}
                                                   onPressProduct={({
                                                                        category, details
                                                                    }) => navigateToProductDetails(category, details)}/>)*/
    return (<MainLayout backgroundColor={theme.home.background} backgroundHeader={'transparent'}
                        tabHeader={true} menuColor={theme.home.headerIcon}
                        titleImage={true} onMenuPress={() => navigation?.toggleDrawer()} iconSize={theme.text.s2}
                        showRightIcon={true} rightIconType={'Feather'} rightIconName={'shopping-cart'}
                        onRightPress={() => navigation.navigate('Cart')}
                        rightIconColor={theme.home.headerIcon} rightIconSize={theme.text.s5} showCurve={true}>
        <ScrollableTabView
            style={{
                overflow: 'hidden', paddingTop: '5%', position: 'relative'
            }}
            renderTabBar={() => (<TabBar
                activeTextColor={'black'}
                inactiveTextColor={theme.text.color}
                underlineStyle={{opacity: 0}}
                tabsContainerStyle={{}}
                tabStyle={{
                    borderColor: theme.homeBackground,
                }}
                activeTabStyle={{
                    borderColor: theme.primary,
                }}
                tabs={homeData}
                // onTabPress={(item) => navigation.navigate('moreNews', {item})}
            />)}>
            {/*{homeData?.map((tab, index) => buildTab(tab, index))}*/}
        </ScrollableTabView>
    </MainLayout>);
}
export default Home;

