import React from 'react';
import PropTypes from 'prop-types';
import Pie from 'react-native-pie';
import {COLORS} from '../../constants/Colors';
import {styles} from './styles';
import {SMText, SMView} from '..';
import {Divider} from 'react-native-paper';

function SMDoughNutChart(props) {
  const {containerStyle, radius, innerRadius, sections} = props;
  return (
    <SMView style={[styles.container, containerStyle]}>
      <SMView style={styles.doughNutChartView}>
        <Pie
          radius={radius}
          innerRadius={innerRadius}
          sections={sections}
          strokeCap={'butt'}
          dividerSize={4}
        />
      </SMView>
      <SMView style={styles.legendMainView}>
        {sections &&
          sections.map(section => {
            return (
              <SMView style={styles.legendView}>
                <SMView
                  style={[
                    styles.legendBox,
                    {
                      backgroundColor: section?.color
                        ? section.color
                        : COLORS.TEXT_GREY,
                    },
                  ]}
                />
                {section?.coinTitle ? (
                  <SMText type="Title" style={styles.coinTitle}>
                    {section.coinTitle}
                    {section?.currency ? (
                      <SMText type="Paragraph" style={styles.currencyText}>
                        /{section.currency}
                      </SMText>
                    ) : null}
                    <SMText type="Paragraph" style={styles.currencyText}>
                      {`    (${section.percentage}%)`}
                    </SMText>
                  </SMText>
                ) : (
                  <Divider style={styles.legendDivider} />
                )}
              </SMView>
            );
          })}
      </SMView>
    </SMView>
  );
}

SMDoughNutChart.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  radius: PropTypes.number,
  innerRadius: PropTypes.number,
  sections: PropTypes.array,
};

SMDoughNutChart.defaultProps = {};

export default SMDoughNutChart;
