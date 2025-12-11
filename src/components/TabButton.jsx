export default function TabButton({children, onSelect, isSelected}) {
    // function handleClick() {
    //     console.log(`Tab "${children}" clicked`);
    // }
    console.log('TAB BUTTON RENDERED');
    return (<li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>);
}