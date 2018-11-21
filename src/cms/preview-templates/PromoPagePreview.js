import React from 'react';
import PropTypes from 'prop-types';
import { PromoPageTemplate } from '../../templates/promo-page';

const PromoPagePreview = ({ entry, getAsset }) => (
  <PromoPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={getAsset(entry.getIn(['data', 'image']))}
    description={entry.getIn(['data', 'description'])}
  />
);

PromoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default PromoPagePreview;
