import { darkGrey } from "./colors";

// see theme structure at https://github.com/plouc/nivo/issues/132

export default {
    textColor: '#FFF',
    background: darkGrey,
    tooltip: {
        container: {
          color: '#000',
          borderRadius: '2px',
          padding: '5px 9px'
        },
        basic: {
          whiteSpace: 'pre',
          display: 'flex',
          alignItems: 'center'
        },
        table: {},
        tableCell: {
          padding: '3px 5px'
        }
      },
}