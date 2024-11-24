import React, { useState, useEffect } from 'react'
import { useSliderState } from '@react-stately/slider'
import { useFocusRing } from '@react-aria/focus'

const ColorSlider = (props) => {
  const [currentTheme, setCurrentTheme] = useState(1)
  const [hue, setHue] = useState(0)

  const state = useSliderState({
    minValue: 0,
    maxValue: 360,
    step: 1,
    value: hue
  })

  const { focusProps, isFocusVisible } = useFocusRing()

  useEffect(() => {
    const themeIndex = Math.floor(hue / 21.25)
    setCurrentTheme(themeIndex)
    document.documentElement.setAttribute('data-theme', themes[themeIndex])
  }, [hue])

  return (
    <div className="color-slider">
      <div className="slider-label">
        <label>{props.label || 'Hue'}</label>
        <output>{hue}°</output>
      </div>

      <div className="slider-track">
        <div
          className={`slider-thumb ${isFocusVisible ? 'focus-visible' : ''}`}
          style={{
            left: `${(hue / 360) * 100}%`,
            backgroundColor: `hsl(${hue}, 100%, 50%)`
          }}
        >
          <input
            type="range"
            {...focusProps}
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            min={0}
            max={360}
            step={1}
          />
        </div>
      </div>
    </div>
  )
}

export default ColorSlider




