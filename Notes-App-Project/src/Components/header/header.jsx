import Left from "./left";
import Right from "./right";

function Header() {
    
    return (
        <header className="w-screen h-15 bg-[#000] flex items-center p-5 justify-between border-b-2 border-b-[#111111] border-solid">
             
            <Left/>
            <Right/>
        </header>
    );
}

export default Header