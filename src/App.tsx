import { Landing } from "./pages/Landing";
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './global/theme';

function App() {
  return (
    <ChakraProvider theme={theme} > 

      <Landing />
    </ChakraProvider>
  );
}

export default App;
