
```js
import { Box } from '../../src/components/index.js';

    <Flex>
        <Box p={2} border='2px solid #000'>I'm in</Box>
        <Box p={2} border='2px solid #000'>a default</Box>
        <Box p={2} border='2px solid #000'>flex container.</Box>
    </Flex>
    
```


```js
import { Box } from '../../src/components/index.js';

    <Flex justifyContent='space-around' alignItems='stretch' height='100px'>
        <Box p={2} border='2px solid #000'>I'm in</Box>
        <Box p={2} border='2px solid #000'>a custom</Box>
        <Box p={2} border='2px solid #000'>flex container.</Box>
    </Flex>
    
```