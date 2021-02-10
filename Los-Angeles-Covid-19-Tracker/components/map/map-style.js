// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer = {
    type: 'fill',
    paint: {
      'fill-color': {
        property: 'infections',
        stops: [
          [0, '#3288bd'],
          [15, '#66c2a5'],
          [25, '#abdda4'],
          [50, '#e6f598'],
          [75, '#ffffbf'],
          [100, '#fee08b'],
          [125, '#fdae61'],
          [150, '#f46d43'],
          [200, '#d53e4f']
        ]
      },
      'fill-opacity': 0.8,
      'fill-outline-color': 'black'
    }
  };