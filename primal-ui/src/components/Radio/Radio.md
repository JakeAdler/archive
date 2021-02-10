Default :
```js
    <>
        <Radio name='radio'/>
    </>
```
With [Input Group](#/Components/InputGroup) and [Label](#/Components/Label):
```js
import Label from '../Label/Label.js';
import InputGroup from '../InputGroup/InputGroup.js'

    ;<InputGroup flexDirection='column' alignItems='flex-start'>
    <div><Radio name="radio" mr={2} fillBg='green'/><Label for="radio">Go</Label></div>
    <div><Radio name="radio" mr={2} fillBg='yellow' dotColor='grey'/><Label for="radio">Wait</Label></div>
    <div><Radio name="radio" mr={2} fillBg='red'/><Label for="radio">Stop</Label></div>
    </InputGroup>
```