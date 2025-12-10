export default function TabButton({children, onSelect}) {
    // function handleClick() {
    //     console.log(`Tab "${children}" clicked`);
    // }
    console.log('TAB BUTTON RENDERED');
    return (<li>
        <button onClick={onSelect}>{children}</button>
    </li>);
}