# *React - Adding Interactivity*

# 1 - Responding to Events
React lets you add *event handlers* to your JSX.
> **Event Handlers: Are your own functions** (that will be triggered in response to interactions like: clicking, hovering, focusing form inputs).

## Button Example:
```
export default function Button(){
    return (
        <button>
            I don't do anything
        </button>
    );
}
```
## Adding event handlers
- Define a function
- Pass it as a prop

### Button that show a message:
```
export default function Button(){

    function handleClick(){
        alert('You clicked me!');
    }

    return (
        <button onClick={handlClick}>
            I don't do anything
        </button>
    );
}
```
<details>
<summary>Event Handler Inline / Arrow Function Version</summary>

### Event handler (Inline):
```
<button onClick={function handleClick(){
	alert('You clicked me!');
}}>
```
### Event handler (Arrow Functions) :
```
<button onClick={() => {
	alert('You clicked me!');
}}>
```
</details>


### Reading props in event handlers
```
function AlertButton({message, children}){
	<button onClick={() => alert(message)}>
		{children}
	</button>
}
```

```
export default function Toolbar(){
	return(
		<AlertButton message="Playing!"> 
			PLAY 
		</AlertButton>

		<AlertButton message="Uploading!"> 
			UPLOAD 
		</AlertButton>
	);
}
```