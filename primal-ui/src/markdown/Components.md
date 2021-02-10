

### [Box](#/Components/Box):

```js
    import Box from '../components/Box/Box';

    <Box bg='lightblue' py={5} pl={5} pr={6} fontSize='1.5rem'
    borderBottom='10px solid #696969'>
        Box
    </Box>
```

### [Button](#/Components/Button):

```js
    import Button from '../components/Button/Button';

    <Button noBorder bg='lightblue' px={3} py={2}>Button</Button>
```
### [Flex](#/Components/Flex):

```js
    import Flex from '../components/Flex/Flex';
    import Box from '../components/Box/Box';

    <Flex width='50%'>
        <Box width={1/2} bg='lightblue' p={2}>Flex</Box>
        <Box width={1/2} bg='pink' p={2}>Box</Box>
    </Flex>
```
### [InputGroup](#/Components/InputGroup):

```js
    import InputGroup from '../components/InputGroup/InputGroup';
    import Radio from '../components/Radio/Radio';
    import Label from '../components/Label/Label';

    <InputGroup>
        <Radio name='radio'/><Label for='radio'>Hello</Label>
    </InputGroup>
```
### [Label](#/Components/Label):

```js
    import Label from '../components/Label/Label';

    <Label>Label</Label>
```
### [Radio](#/Components/Radio):

```js
    import Radio from '../components/Radio/Radio';

    <Radio name='radio'/>
```
### [Select](#/Components/Select):

```js
    import Select from '../components/Select/Select';

      <Select border={'2px solid lightblue'} pr={6} py={2} fontFamily='monospace' fontSize='1.2rem'>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </Select>
```
### [Text](#/Components/Text):

```js
    import Text from '../components/Text/Text';

    <Text letterSpacing='0.1rem' fontSize='2rem' fontFamily='monospace' fontWeight='800' color='lightblue' as='h1'>Text</Text>
```
### [TextField](#/Components/TextField):

```js
    import TextField from '../components/TextField/TextField';

    <TextField placeholder='Text Field' noBorder borderBottom='2px solid lightblue'
    fontSize='1.5rem'/>
```