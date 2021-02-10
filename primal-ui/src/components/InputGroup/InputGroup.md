Default (With [Label](#/Components/Label) and [Radio](#/Components/Radio)):
```js
import Label from '../Label/Label.js';
import Radio from '../Radio/Radio.js';
    <InputGroup>
        <Radio name='radio'/><Label for='radio'>Hello</Label>
    </InputGroup>
```

Custom (With [Label](#/Components/Label) and [Radio](#/Components/Radio)):
```js
import Label from '../Label/Label.js';
import Radio from '../Radio/Radio.js';

initialState = { bool: true, bool2: true}
    ;<>
    <InputGroup alignItems='center' flexDirection='column' mr={4}>
        <div>
            <Radio name='bool' onClick={()=>setState({bool:true})} 
            border='2px solid green' fillBg='green' value={state.bool}/>
            <Radio name='bool' onClick={()=>setState({bool:false})} 
            border='2px solid red' fillBg='red' value={state.bool}/>
        </div>
        <Label for='bool'>{state.bool.toString()}</Label>
    </InputGroup>
    <InputGroup alignItems='center' flexDirection='column'>
        <div>
            <Radio name='bool2' onClick={()=>setState({bool2: true})} 
            border='2px solid green' fillBg='green' value={state.bool2}/>
            <Radio name='bool2' onClick={()=>setState({bool2: false})} 
            border='2px solid red' fillBg='red' value={state.bool2}/>
        </div>
        <Label for='bool'>{state.bool2.toString()}</Label>
    </InputGroup>
    </>
```

