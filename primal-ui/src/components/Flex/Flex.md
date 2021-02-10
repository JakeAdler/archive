
Default (With [Box](#/Components/Box)):
```js
import Box from '../Box/Box.js';

<Flex>
    <Box>Flex</Box>
    <Box>Box</Box>
</Flex>
```

Custom (With [Box](#/Components/Box)):
```js
import Box from '../Box/Box.js';

<Flex width='50%'>
    <Box width={1/2} bg='lightblue' p={2}>Flex</Box>
    <Box width={1/2} bg='pink' p={2}>Box</Box>
</Flex>

```