import Route from "./components/Route"
import AccordianPage from "./pages/AccordiaPage"
import DropdownPage from "./pages/DropdownPage"
import ButtonPage from "./pages/ButtonPage"
import SideBar from "./components/SideBar"
import ModalPage from "./pages/ModalPage"
import TablePage from "./pages/TablePage"
import CounterPage from "./components/counterPage"

function App(){
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar />
            <div className="colspan-5">
                <Route path='/accordian'>
                    <AccordianPage />
                </Route>
                <Route path='/'>
                    <DropdownPage />
                </Route>
                <Route path='/buttons'>
                    <ButtonPage />
                </Route>
                <Route path='/modal'>
                    <ModalPage></ModalPage>
                </Route>
                <Route path='/table'>
                    <TablePage />
                </Route>
                <Route path='/counter'>
                    <CounterPage initialCount={10}/>
                </Route>
            </div>
        </div>
    )
}

export default App