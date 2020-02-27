import React from 'react';
import { connect } from 'react-redux';

import { PageTemplateDiv } from '../../components/Page/PageTemplateDiv';

const PageTemplateC = props => {
  return (
    <PageTemplateDiv>
      <h1>{props.display.header.title}</h1>
    </PageTemplateDiv>
  )
}

const mapStateToProps = (state) => {
  return {
    display: state.currentDisplayPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const PageTemplate = connect(mapStateToProps, mapDispatchToProps)(PageTemplateC)