import {
  View,
  Animated,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  ViewPropTypes,
  Dimensions,
} from 'react-native';
import Button from '../HomeTabButton';

const React = require('react');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');

const WINDOW_WIDTH = Dimensions.get('window').width;

const ScrollableTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    scrollOffset: PropTypes.number,
    style: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    tabsContainerStyle: ViewPropTypes.style,
    textStyle: Text.propTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    onScroll: PropTypes.func,
    activeTabStyle: PropTypes.object,
  },

  getDefaultProps() {
    return {
      scrollOffset: 52,
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null,
      style: {},
      tabStyle: {},
      tabsContainerStyle: {},
      underlineStyle: {},
    };
  },

  getInitialState() {
    this._tabsMeasurements = [];
    return {
      _leftTabUnderline: new Animated.Value(0),
      _widthTabUnderline: new Animated.Value(0),
      _containerWidth: null,
    };
  },

  componentDidMount() {
    this.props.scrollValue.addListener(this.updateView);
  },

  updateView(offset) {
    const position = Math.floor(offset.value);
    const pageOffset = offset.value % 1;
    const tabCount = this.props.tabs.length;
    const lastTabPosition = tabCount - 1;

    if (tabCount === 0 || offset.value < 0 || offset.value > lastTabPosition) {
      return;
    }

    if (
      this.necessarilyMeasurementsCompleted(
        position,
        position === lastTabPosition,
      )
    ) {
      this.updateTabPanel(position, pageOffset);
      this.updateTabUnderline(position, pageOffset, tabCount);
    }
  },

  necessarilyMeasurementsCompleted(position, isLastTab) {
    return (
      this._tabsMeasurements[position] &&
      (isLastTab || this._tabsMeasurements[position + 1]) &&
      this._tabContainerMeasurements &&
      this._containerMeasurements
    );
  },

  updateTabPanel(position, pageOffset) {
    const containerWidth = this._containerMeasurements.width;
    const tabWidth = this._tabsMeasurements[position].width;
    const nextTabMeasurements = this._tabsMeasurements[position + 1];
    const nextTabWidth =
      (nextTabMeasurements && nextTabMeasurements.width) || 0;
    const tabOffset = this._tabsMeasurements[position].left;
    const absolutePageOffset = pageOffset * tabWidth;
    let newScrollX = tabOffset + absolutePageOffset;

    // center tab and smooth tab change (for when tabWidth changes a lot between two tabs)
    newScrollX -=
      (containerWidth -
        (1 - pageOffset) * tabWidth -
        pageOffset * nextTabWidth) /
      2;
    newScrollX = newScrollX >= 0 ? newScrollX : 0;

    if (Platform.OS === 'android') {
      this._scrollView?.scrollTo({
        x: newScrollX,
        y: 0,
        animated: false,
      });
    } else {
      const rightBoundScroll =
        this._tabContainerMeasurements.width -
        this._containerMeasurements.width;
      newScrollX =
        newScrollX > rightBoundScroll ? rightBoundScroll : newScrollX;
      this._scrollView?.scrollTo({
        x: newScrollX,
        y: 0,
        animated: false,
      });
    }
  },

  updateTabUnderline(position, pageOffset, tabCount) {
    const lineLeft = this._tabsMeasurements[position].left;
    const lineRight = this._tabsMeasurements[position].right;

    if (position < tabCount - 1) {
      const nextTabLeft = this._tabsMeasurements[position + 1].left;
      const nextTabRight = this._tabsMeasurements[position + 1].right;

      const newLineLeft =
        pageOffset * nextTabLeft + (1 - pageOffset) * lineLeft;
      const newLineRight =
        pageOffset * nextTabRight + (1 - pageOffset) * lineRight;

      this.state._leftTabUnderline.setValue(newLineLeft);
      this.state._widthTabUnderline.setValue(newLineRight - newLineLeft);
    } else {
      this.state._leftTabUnderline.setValue(lineLeft);
      this.state._widthTabUnderline.setValue(lineRight - lineLeft);
    }
  },

  renderTab(name, page, isTabActive, onPressHandler, onLayoutHandler) {
    return (
      <View key={page} onLayout={onLayoutHandler}>
        <Button title={name} key={`${name}_${page}`} active={isTabActive}
                       onPress={() => onPressHandler(page)} />
      </View>
    );
  },

  measureTab(page, event) {
    const {
      x,
      width,
      height
    } = event.nativeEvent.layout;
    this._tabsMeasurements[page] = {
      left: x,
      right: x + width,
      width,
      height,
    };
    this.updateView({ value: this.props.scrollValue.__getValue() });
  },

  render() {
    const tabUnderlineStyle = {
      position: 'absolute',
      height: 4,
      backgroundColor: 'navy',
      bottom: 0,
    };

    const dynamicTabUnderline = {
      left: this.state._leftTabUnderline,
      width: this.state._widthTabUnderline,
    };

    return (
      <View
        style={[styles.container, this.props.style]}
        onLayout={this.onContainerLayout}>
        <ScrollView
          ref={scrollView => {
            this._scrollView = scrollView;
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled={true}
          bounces={false}
          scrollsToTop={false}>
          <View
            style={[
              styles.tabs,
              { width: this.state._containerWidth },
              this.props.tabsContainerStyle,
            ]}
            ref={'tabContainer'}
            onLayout={this.onTabContainerLayout}>
            {this.props.tabs.map((name, page) => {
              const isTabActive = this.props.activeTab === page;
              const renderTab = this.props.renderTab || this.renderTab;
              return renderTab(
                name,
                page,
                isTabActive,
                this.props.goToPage,
                this.measureTab.bind(this, page),
              );
            })}
            <Animated.View
              style={[
                tabUnderlineStyle,
                dynamicTabUnderline,
                this.props.underlineStyle,
              ]}
            />
          </View>
        </ScrollView>
      </View>
    );
  },

  componentDidUpdate(prevProps) {
    // If the tabs change, force the width of the tabs container to be recalculated
    if (
      JSON.stringify(prevProps.tabs) !== JSON.stringify(this.props.tabs) &&
      this.state._containerWidth
    ) {
      this.setState({ _containerWidth: null });
    }
  },

  onTabContainerLayout(e) {
    this._tabContainerMeasurements = e.nativeEvent.layout;
    let width = this._tabContainerMeasurements.width;
    if (width < WINDOW_WIDTH) {
      width = WINDOW_WIDTH;
    }
    this.setState({ _containerWidth: width });
    this.updateView({ value: this.props.scrollValue.__getValue() });
  },

  onContainerLayout(e) {
    this._containerMeasurements = e.nativeEvent.layout;
    this.updateView({ value: this.props.scrollValue.__getValue() });
  },
});

export default ScrollableTabBar;

const styles = StyleSheet.create({
  tab: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 32,
    borderRadius: 30,
    overflow: 'hidden',
  },
  activeShadow: {
    backgroundColor: '#fff',
    color: '#000'
  },
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginLeft: 12,
    paddingTop: 4,
    paddingBottom: 4,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    color: ({ theme }) => theme.text.color,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
