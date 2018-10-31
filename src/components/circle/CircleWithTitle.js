import React from 'react'
import PropTypes from 'prop-types'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import * as material from 'material-colors'

import { ColorWrap } from '../common'
import CircleSwatch from './CircleSwatch'

export const CircleWithTitle = ({ width, onChange, onSwatchHover, colors, hex, circleSize,
  circleSpacing, className = '' }) => {
  const styles = reactCSS({
    'default': {
      card: {
        width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing,
      },
    },
  })

  const handleChange = (hexCode, e) => onChange({ hex: hexCode, source: 'hex' }, e)

  return (
    <div style={ styles.card } className={ `circle-picker ${ className }` }>
      { map(colors, c => (
        <CircleSwatch
          key={ c.color }
          color={ c.color }
          onClick={ handleChange }
          onSwatchHover={ onSwatchHover }
          active={ hex === c.color.toLowerCase() }
          circleSize={ circleSize }
          circleSpacing={ circleSpacing }
          title={c.title}
        />
      )) }
    </div>
  )
}

CircleWithTitle.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  circleSize: PropTypes.number,
  circleSpacing: PropTypes.number,
}

CircleWithTitle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [{color: material.red['500'],title: "red"},{color: material.pink['500'],title: "pink"},{color: material.purple['500'],title: "purple"},
    {color: material.deepPurple['500'],title: "deepPurple"},{color: material.indigo['500'],title: "indigo"},{color: material.blue['500'], title: "blue"},
    {color: material.lightBlue['500'], title: "lightBlue"},{color: material.cyan['500'], title: "cyan"},{color: material.teal['500'],title: "teal"}
    ],
}

export default ColorWrap(CircleWithTitle)
