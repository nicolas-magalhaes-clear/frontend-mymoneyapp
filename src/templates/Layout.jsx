import Sidebar from "./Sidebar"
import Header from "./Header"
const Layout = (props) => {
    return (
        <div className="flex w-full h-screen">

            <Sidebar />
            <div className="wrapper w-full h-full">
                <div className="header-area" style={{height: '5%'}}>
                    <Header />

                </div>
                <div className="content-area bg-stone-700 border-stone-400" style={{height: '85%'}}>
                    <div className="h-full w-100 grid grid-cols-6 grid-rows-6">
                        <div className="content col-span-6 px-3 row-span-5">
                            {props.children}
                        </div>
                        <footer className="col-span-6 p-1 w-full grid grid-rows-2 grid-cols-1">
                            <div className="void col-span-1 row-span-1"></div>
                            <div className="row-span-1 col-span-1 flex w-full items-center m-0 p-0 ps-3 text-white bg-stone-800 ">2023 - Nícolas Bispo Magalhães</div>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout