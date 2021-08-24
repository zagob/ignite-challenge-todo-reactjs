// export default {
//   colors: {
//     purple: '#8257E5',
//     green: '#1DB863',
//     black: '#525252',
//     gray: '#666666',
//     gray2: '#B2B2B2',
//     white: '#FFFFFF',
//   },
// }


// export default {
//   styles: {
//     global: {
//       "html, body": {
//         color: "gray.600",
//         lineHeight: "tall",
//         border: '10px solid red',
//       },
//       html: {
//         margin: 0,
//         padding: 0,
//       },
//       a: {
//         color: "teal.500",
//       },
//     },
//   },
//   colors: {
//     purple: '#8257E5',
//     green: '#1DB863',
//     black: '#525252',
//     gray: '#666666',
//     gray2: '#B2B2B2',
//     white: '#FFFFFF',
//   },
// }

import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        purple: '#8257E5',
        green: '#1DB863',
        black: '#525252',
        gray: '#666666',
        gray2: '#B2B2B2',
        white: '#FFFFFF',
        light: '#f3e9df',
    },
    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },
    
    styles: {
        global: {
            button: {
                bg: '#F5F8FA',
            },
        }
    }
})