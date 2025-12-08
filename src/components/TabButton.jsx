export default function TabButton({children, onSelect}) {
    // function handleClick() {
    //     console.log(`Tab "${children}" clicked`);
    // }

    return (<li>
        <button onClick={onSelect}>{children}</button>
    </li>);
}