import React from 'react';
import PropTypes from 'prop-types';
import { PromoPageTemplate } from '../../templates/promo-page';

const PromoPagePreview = ({ entry }) => (
  <PromoPageTemplate
    title={entry.getIn(['data', 'title'])}
    description={entry.getIn(['data', 'description'])}
  />
);

PromoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default PromoPagePreview;
